import { ConstructionOutlined } from "@mui/icons-material";
import { getStorage, ref, listAll, getMetadata } from "firebase/storage";
import { storage } from "./firebase";

async function listFiles(user) {
    var data = []
    const listRef = ref(storage, `${user}/`)
    
    await listAll(listRef)
    .then((res) => {
        res.items.forEach((itemRef) => {
        // All the items under listRef.
        data.push(itemRef.fullPath)        
        });
    })
    return data
}


async function listMetaData(path) {
    var data = {}
    const metaRef = ref(storage, path)
    await getMetadata(metaRef).then((md) =>{
        var date = new Date(md.timeCreated)
         data = {
            id: md.md5Hash,
            fileName: md.name,
            path: md.fullPath,
            timeCreated: date
        }
        
    }

    )
    return data
    
}



export {
    listFiles,
    listMetaData

}