import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";


export async function getData(uuid) {
    const querySnapshot = await getDocs(collection(db, uuid));
    querySnapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data())
    })
}


