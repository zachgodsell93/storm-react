import { collection, query, where, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import _ from 'lodash'

export async function getUploadDates(uuid, client) {
    const docRef = doc(db, uuid, client)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data().dates);
        
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
}


export async function getData(uuid, client, dateSelected) {
    const docRef = doc(db, uuid, client, 'runDate', dateSelected)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data().modules);
        const data = docSnap.data().modules[0].betCode[0]
        const cleanData = {
            stormScore: data.stormScore
        }

        return cleanData
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    let data = []

    return data
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
            console.log(sD[key])
        }
        
    }

    sD.stormRating = Math.round(sD.stormRating)
    sD.actualRevOnTurnover = parseFloat(sD.actualRevOnTurnover.toFixed(2)) 
    sD.expectRetOnTurnover = parseFloat(sD.expectRetOnTurnover.toFixed(2))
    sD.totalRevenue = parseFloat(sD.totalRevenue.toFixed(2))
    sD.totalTurnover = parseFloat(sD.totalTurnover.toFixed(2))

    sD.popularStatus = Object.keys(category).reduce((a,b) => category[a] > category[b] ? a : b);
    
    console.log(sD)

    return sD
}


