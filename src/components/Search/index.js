import {useMemo, useState,useEffect} from 'react';
import useDebounce from '~/components/useDebounce';
import useFetch from '~/components/useFetch';
import * as httpRequest from '~/untils/httpRequest';
function Search() {
    const [data,setData] = useState('');
    function handleInput(e) {
        setData(e.target.value)
    }
    const searchValue = useDebounce(data,500);
    const results = useMemo(() => searchValue,[searchValue]);
    useEffect(() => {
        if(searchValue) {
            httpRequest.get('data',{_page : results,_limit : 5}).then(res => {
                console.log(res);
            })
        }
    },[results]);

   
    return (
        <input type="text" value={data} onChange={handleInput}/>
    )
}



export default Search;