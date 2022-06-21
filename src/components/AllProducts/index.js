import {useState , useEffect} from 'react';
import {useDataStore} from '~/components'
import {Card,Spinner} from '~/components'
function AllProducts() {
    const [productData,setProductData] = useState(undefined);
    const [data] = useDataStore('category')
    useEffect(() => {
       setProductData(data);
    }
    ,[data,productData])
    return (
        <div className="flex flex-column mt-[25px]">
            {
            productData
            ?
            productData.map( item => {
                return(
                    <div key = {item.name}>
                        <h1 className="text-[25px] font-bold">{item.name}</h1>
                        <hr className="mt-[20px]"/>
                        <div className="container mt-[20px]">
                            <div className="row">
                                {item.products.map( item => {
                                    return (
                                        <div key={item.name} className="col py-4">
                                            <Card title ={item.name} price = {item.price}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })
            :
            <Spinner/>
            }

        </div>
    );
}

export default AllProducts;
