import { useState,useEffect } from "react";


const useDebounce = (value,deplay) => {
    const [data, setData] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setData(value);
        }, deplay);
        return () => {
            clearTimeout(timeout);
        };
    },[value])


    return data;
}


export default useDebounce;