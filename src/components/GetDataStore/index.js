import {db} from '~/firebase/config.js';
import {collection, getDocs} from 'firebase/firestore';
import {useState,useEffect} from 'react'


function useDataStore(options) {
    const [data,setData] = useState([]);

    const collectionRef = collection(db , options);
    useEffect(() => {
        const handle = async () => {
            const data = await getDocs(collectionRef)
            const handleData = data.docs.map(item => {
                return {id : item.id , ...item.data()}
            })

            setData(handleData)
        }
        handle();
        return () => handle();
    },[])

    return [data,setData];
}

export default useDataStore;