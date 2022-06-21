import {useState , useEffect} from 'react';
import {useDataStore} from '~/components'
import {Card,Spinner} from '~/components'
function HeaderProducts({product}) {
    const [productData,setProductData] = useState(undefined);
    const [data] = useDataStore('category')
    useEffect(() => {
        const handle =  () => {
            console.log(product)
            const filterData =  data.filter(item => item.name == product);
            setProductData(filterData[0]);
        }
        handle();
        return () => handle();
    }
    ,[data,productData,product])

    return (
        <div className="flex flex-column mt-[25px]">
            <h1 className="text-[25px] font-bold">{product}</h1>
            <hr className="mt-[20px]"/>
            <div className="container mt-[20px]">
                <div className="row">
                {
                productData
                ?
                productData.products.map( item => {
                    return (
                        <div className="col py-4">
                            <Card key={item.name} title ={item.name} price = {item.price}/>
                        </div>
                    )
                })
                :
                <Spinner/>
                }
                </div>

            </div>

        </div>
    );
}

export default HeaderProducts;

