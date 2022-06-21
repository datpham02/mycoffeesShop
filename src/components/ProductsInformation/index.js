import {useDataStore,Edit } from '~/components'
import {useState,useEffect ,useCallback} from 'react'



function ProductsInformation({product}) {
    const [productData,setProductData] = useState(undefined);
    const [status,setStatus] = useState(true);
    const [data,setData] = useDataStore('category')

    const handleStatus = useCallback( () => {
        setStatus(!status)
    },[status])
    const getIdbyName = (name) => {
        const filterData = data.filter(item => item.name === name);
        return filterData[0].id;
    }
    useEffect(() => {
        const handle =  () => {
            const filterData =  data.filter(item => item.name === product);
            setProductData(filterData[0]);
        }
        handle();
        return () => handle();
    }
    ,[data,productData,product])

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <thead className="bg-white border-b">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        #
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Type
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Image
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Name
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Price($)
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Edit
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productData
                                    ?
                                    productData.products.map( (item,index) => {
                                        return (
                                            <tr key={item.name} className="bg-white border-b">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index+1}</td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {product}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {item.img ? <img src={item.img} alt={item.name}/> : 'No image'}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {item.name}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {item.price}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <Edit 
                                                    id={getIdbyName(product)} 
                                                    Product={{
                                                        name : item.name,
                                                        price : item.price
                                                    }} 
                                                    status={status}
                                    
                                                    onClick={handleStatus}/>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    :
                                    undefined
                                } 
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsInformation;
