import * as axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'http://localhost:80/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});


export  async function get(path , options){
    const handler = await httpRequest.get(path,{
        params : {...options}
    });
    return handler.data;
}


export default httpRequest;