import { collection, query, where, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import _ from 'lodash'

export async function getUploadDates(uuid, client) {
    const docRef = doc(db, uuid, client)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data().dates);
        
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
}


export async function getChartData(uuid, client, dateSelected){

    var chartData = {
        all: [],
        horse: [],
        sport: [],
    }

    const docRef = doc(db, uuid, client, 'runDate', dateSelected)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data().modules);
        
        // All data returned
        const data = docSnap.data().modules
        const profitGraph = data[3]['data']

        for(let i=1; i < profitGraph.length; i++){
            profitGraph[i]['rtActRev'] = profitGraph[i]['actualRevenue'] + profitGraph[i-1]['actualRevenue']
            profitGraph[i]['rtExpRev'] = profitGraph[i]['expectedRevenue'] + profitGraph[i-1]['expectedRevenue']
        }

        var racingGraph = []
        var sportGraph = []
        for(let i =0; i < profitGraph.length; i++) {
            if(profitGraph[i]['betCode'] === 'racing'){
                racingGraph.push(profitGraph[i])
            } else if(profitGraph[i]['betCode'] === 'sport'){
                sportGraph.push(profitGraph[i])
            }
        }

        chartData.all = profitGraph
        chartData.horse = racingGraph
        chartData.sport = sportGraph

        return chartData

    }

}


export async function getData(uuid, client, dateSelected) {
    var fullData = {
        allData: {
            dataSectionOne: {

            },
            dataSectionTwo: {
    
            },
        },
        horseData: {
            dataSectionOne: {
    
            },
            dataSectionTwo: {
    
            },
    
        },
        sportData: {
            dataSectionOne: {
    
            },
            dataSectionTwo: {
    
            },
    
        }  
        
    };

    const docRef = doc(db, uuid, client, 'runDate', dateSelected)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        
        // All data returned
        const data = docSnap.data().modules
        
        // Assigns data for everything in section two
        fullData.allData.dataSectionTwo.bonus = data[0].betCode[0].betType[0]
        fullData.horseData.dataSectionTwo.bonus = data[0].betCode[1].betType[0]
        fullData.sportData.dataSectionTwo.bonus = data[0].betCode[2].betType[0]
        fullData.allData.dataSectionTwo.regular = data[0].betCode[0].betType[1]
        fullData.horseData.dataSectionTwo.regular = data[0].betCode[1].betType[1]
        fullData.sportData.dataSectionTwo.regular = data[0].betCode[2].betType[1]

        fullData.allData.dataSectionOne = {
            bonus: {
                turnover: parseFloat(data[0].betCode[0].betType[0].turnover).toFixed(2),
                avgBet: data[0].betCode[0].betType[0].avgBet,
                avgOdds: data[0].betCode[0].betType[0].avgOdds,
                actualRevenue: data[1].betCode[0].actualRevenue,
                expectedRevenue: data[1].betCode[0].expectedRevenue,
                numberBets: data[1].betCode[0].numberBets,
                clientCategory: data[0].betCode[0].stormCategory,
                secondsBetweenBetAndMarketStart: data[0].betCode[0].betType[0].secondsBetweenBetAndMarketStart,
                expectedRot: (data[1].betCode[0].expectedRevenue/data[0].betCode[0].betType[0].turnover)*100,
                actualRot: (data[1].betCode[0].actualRevenue/data[0].betCode[0].betType[0].turnover)*100

            },
            regular: {
                turnover: parseFloat(data[0].betCode[0].betType[1].turnover).toFixed(2),
                avgBet: data[0].betCode[0].betType[1].avgBet,
                avgOdds: data[0].betCode[0].betType[1].avgOdds,
                actualRevenue: data[1].betCode[0].actualRevenue,
                expectedRevenue: data[1].betCode[0].expectedRevenue,
                numberBets: data[1].betCode[0].numberBets,
                clientCategory: data[0].betCode[0].stormCategory,
                secondsBetweenBetAndMarketStart: data[0].betCode[0].betType[1].secondsBetweenBetAndMarketStart,
                expectedRot: (data[1].betCode[0].expectedRevenue/data[0].betCode[0].betType[1].turnover)*100,
                actualRot: (data[1].betCode[0].actualRevenue/data[0].betCode[0].betType[1].turnover)*100
            },
            

        }

        fullData.horseData.dataSectionOne = {
            bonus: {
                turnover: parseFloat(data[0].betCode[1].betType[0].turnover).toFixed(2),
                avgBet: data[0].betCode[1].betType[0].avgBet,
                avgOdds: data[0].betCode[1].betType[0].avgOdds,
                actualRevenue: data[1].betCode[1].actualRevenue,
                expectedRevenue: data[1].betCode[1].expectedRevenue,
                numberBets: data[1].betCode[1].numberBets,
                clientCategory: data[0].betCode[1].stormCategory,
                secondsBetweenBetAndMarketStart: data[0].betCode[1].betType[0].secondsBetweenBetAndMarketStart,
                expectedRot: (data[1].betCode[1].expectedRevenue/data[0].betCode[1].betType[0].turnover)*100,
                actualRot: (data[1].betCode[1].actualRevenue/data[0].betCode[1].betType[0].turnover)*100

            },
            regular: {
                turnover: parseFloat(data[0].betCode[1].betType[1].turnover).toFixed(2),
                avgBet: data[0].betCode[1].betType[1].avgBet,
                avgOdds: data[0].betCode[1].betType[1].avgOdds,
                actualRevenue: data[1].betCode[1].actualRevenue,
                expectedRevenue: data[1].betCode[1].expectedRevenue,
                numberBets: data[1].betCode[1].numberBets,
                clientCategory: data[0].betCode[1].stormCategory,
                secondsBetweenBetAndMarketStart: data[0].betCode[1].betType[1].secondsBetweenBetAndMarketStart,
                expectedRot: (data[1].betCode[1].expectedRevenue/data[0].betCode[1].betType[1].turnover)*100,
                actualRot: (data[1].betCode[1].actualRevenue/data[0].betCode[1].betType[1].turnover)*100
            },
            

        }

        fullData.sportData.dataSectionOne = {
            bonus: {
                turnover: parseFloat(data[0].betCode[2].betType[0].turnover).toFixed(2),
                avgBet: data[0].betCode[2].betType[0].avgBet,
                avgOdds: data[0].betCode[2].betType[0].avgOdds,
                actualRevenue: data[1].betCode[2].actualRevenue,
                expectedRevenue: data[1].betCode[2].expectedRevenue,
                numberBets: data[1].betCode[2].numberBets,
                clientCategory: data[0].betCode[2].stormCategory,
                secondsBetweenBetAndMarketStart: data[0].betCode[2].betType[0].secondsBetweenBetAndMarketStart,
                expectedRot: (data[1].betCode[2].expectedRevenue/data[0].betCode[2].betType[0].turnover)*100,
                actualRot: (data[1].betCode[2].actualRevenue/data[0].betCode[2].betType[0].turnover)*100

            },
            regular: {
                turnover: parseFloat(data[0].betCode[2].betType[1].turnover).toFixed(2),
                avgBet: data[0].betCode[2].betType[1].avgBet,
                avgOdds: data[0].betCode[2].betType[1].avgOdds,
                actualRevenue: data[1].betCode[2].actualRevenue,
                expectedRevenue: data[1].betCode[2].expectedRevenue,
                numberBets: data[1].betCode[2].numberBets,
                clientCategory: data[0].betCode[2].stormCategory,
                secondsBetweenBetAndMarketStart: data[0].betCode[2].betType[1].secondsBetweenBetAndMarketStart,
                expectedRot: (data[1].betCode[2].expectedRevenue/data[0].betCode[2].betType[1].turnover)*100,
                actualRot: (data[1].betCode[2].actualRevenue/data[0].betCode[2].betType[1].turnover)*100
            },
            

        }
        
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

    return fullData
}



export async function getDashboardData(uuid) {
    var sD = {
        stormRating: 0,
        totalCustomers: 0,
        totalTurnover: 0,
        actualRevOnTurnover: 0,
        expectRetOnTurnover: 0,
        popularStatus: '',
        totalRevenue: 0
    }

    var category = {
        Sharp: 0,
        Player: 0,
        Recreational: 0 
    }
    // Make a list of all clients for a particular bookmaker
    var clients = []
    const clientSnapshot = await getDocs(collection(db, uuid));
    clientSnapshot.forEach((doc) => {
        clients.push(doc.id)
    })

    const clientCount = clients.length
    sD.totalCustomers = clientCount


    for (const client of clients) {
        const dateRef = doc(db, uuid, client)
        const dateSnap = await getDoc(dateRef)

        // Find list item in date array to determine latest date
        const len = dateSnap.data().dates.length - 1
        const recentDate = dateSnap.data().dates[len]


        const dataRef = doc(db, uuid, client, 'runDate', recentDate)
        const dataSnapshot = await getDoc(dataRef)
        const overview = dataSnapshot.data().modules[0].betCode[0]
        const overviewAll = overview.betType[0]

        sD.stormRating = sD.stormRating + overview.stormScore
        sD.totalTurnover = sD.totalTurnover + overviewAll.turnover
        sD.totalRevenue = sD.totalRevenue + overviewAll.actualRevenue
        sD.actualRevOnTurnover = sD.actualRevOnTurnover + (overviewAll.actualRevenue / overviewAll.turnover)*100 
        sD.expectRetOnTurnover = sD.expectRetOnTurnover + (overviewAll.expectedRevenue / overviewAll.turnover)*100

        if (overview.stormCategory === 'Recreational'){
            category.Recreational++
        } else if (overview.stormCategory === 'Sharp'){
            category.Sharp++
        } else if (overview.stormCategory === 'Player') {
            category.Player++
        }


    }


    // Find the average of certain values based on number of clients
    for (var key of Object.keys(sD)) {
        if (!['totalCustomers', 'totalTurnover', 'totalRevenue'].includes(key)) {
            sD[key] = sD[key]/clientCount 
            // console.log(sD[key])
        }
        
    }

    sD.stormRating = Math.round(sD.stormRating)
    sD.actualRevOnTurnover = parseFloat(sD.actualRevOnTurnover.toFixed(2)) 
    sD.expectRetOnTurnover = parseFloat(sD.expectRetOnTurnover.toFixed(2))
    sD.totalRevenue = parseFloat(sD.totalRevenue.toFixed(2))
    sD.totalTurnover = parseFloat(sD.totalTurnover.toFixed(2))

    sD.popularStatus = Object.keys(category).reduce((a,b) => category[a] > category[b] ? a : b);
    
    // console.log(sD)

    return sD
}


export async function getStatisticsData(uuid) {
    let clients = []
    let statData = []
    const statSnapshot = await getDocs(collection(db, uuid))
    statSnapshot.forEach((doc) => {
        clients.push(doc.id) 
    })

    for(const client of clients){
        console.log(client)
        const dateRef = doc(db, uuid, client)
        const dateSnap = await getDoc(dateRef)
        const dates = dateSnap.data().dates
        var d = dates.reduce((a, b) => (a.MeasureDate > b.MeasureDate ? a : b));
        console.log(d)

        const docRef = doc(db, uuid, client, 'runDate', d)
        const docSnap = await getDoc(docRef)
        var data = docSnap.data().modules[0].betCode[0]
        console.log(data)
        var summary = {
            id: Math.random(),
            name: client,
            stormScore: Math.round(data.stormScore),
            location: 'NSW',
            turnover: `$${parseFloat(data.betType[0].turnover).toFixed(2)}`,
            avgBet: `$${parseFloat(data.betType[0].avgBet).toFixed(2)}`,
            actualRevenue: `$${parseFloat(data.betType[0].actualRevenue).toFixed(2)}`,
            avgOdds: `$${parseFloat(data.betType[0].avgOdds).toFixed(2)}`,
            expectedRevenue: `$${parseFloat(data.betType[0].expectedRevenue).toFixed(2)}`,
            expectedROT: `${parseFloat(((data.betType[0].expectedRevenue / data.betType[0].turnover)*100).toString()).toFixed(2)}%`

        }
        console.log(summary)
        statData.push(summary)
    }

    return statData

}
