import { collection, query, where, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";


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
    var summaryData = {
        stormRating: 0,
        totalCustomers: 0,
        totalTurnover: 0,
        actualRevOnTurnover: 0,
        expectRetOnTurnover: 0,
        popularStatus: null,
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
    summaryData.totalCustomers = clientCount


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

        summaryData.stormRating = summaryData.stormRating + overview.stormScore
        summaryData.totalTurnover = summaryData.totalTurnover + overviewAll.turnover
        summaryData.actualRevOnTurnover = summaryData.actualRevOnTurnover + (overviewAll.actualRevenue / overviewAll.turnover) 
        summaryData.expectRetOnTurnover = summaryData.expectRetOnTurnover + (overviewAll.expectedRevenue / overviewAll.turnover)

        if (overview.stormCategory === 'Recreational'){
            category.Recreational++
        } else if (overview.stormCategory === 'Sharp'){
            category.Sharp++
        } else {
            category.Player++
        }


    }


    
    console.log(summaryData)
    console.log(category)
}


