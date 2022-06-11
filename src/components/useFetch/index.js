import { useState,useEffect } from "react";
import * as request from '~/untils/httpRequest';
const useFetch = (path , params) => {
    
    const [data, setData] = useState(['']);

    
    
    useEffect(() => {
        if(data.trim !== ''){
            return;
        }
        async function onFetch() {
            await request.get(path,params)
            .then(res => {
                setData(res);
            })
        }
        onFetch();

    }, [params]);


    return data;
}

export default useFetch