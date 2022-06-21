import { useDataStore } from '~/components';
import { useState, useEffect,useCallback } from 'react';
import { Input, InputFile, Card } from '~/components';
import Image from '~/assets/images';
import { updateDoc , doc,arrayUnion } from 'firebase/firestore';
import { db } from '~/firebase/config.js';

function AddProducts() {
    const [data] = useDataStore('category');

    const [procductType, setProductType] = useState('');
    const [nameProduct, setNameProduct] = useState('');
    const [priceProduct, setPriceProduct] = useState('');
    const [imageProduct, setImageProduct] = useState(undefined);
    const getIdbyName = (name) => {
        const filterData = data.filter(item => item.name === name);
        return filterData[0].id;
    }
    const handleText = (textInput) => {
        let arr = textInput.split(" ");
        for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        }
        let capString = arr.join(" ");
        return capString;
    }
    const handleSubmit = async () => {
    const docRef = doc(db,"category",getIdbyName(handleText(procductType)));
        await updateDoc(docRef, {
            products: arrayUnion({
                name: handleText(nameProduct),
                price: priceProduct,
            })
        })
        .then(() =>{
            alert('Successed')
        })
    };

    return (
        <div className="container mt-[50px]">
            <div className="row divide-y">
                <div className="col-7">
                    <div className="flex flex-column justify-center items-center mt-[50px]  divide-x">
                        <Input
                            text="Product type"
                            placeholder="Enter product type"
                            value={procductType}
                            onChange={(e) => {
                                setProductType(e.target.value);
                            }}
                        />
                        <Input
                            text="Product name"
                            placeholder="Enter product name"
                            value={nameProduct ?? ''}
                            onChange={(e) => {
                                setNameProduct(e.target.value);
                            }}
                        />
                        <Input
                            text="Product price"
                            placeholder="Enter product price"
                            value={priceProduct ?? ''}
                            onChange={(e) => {
                                setPriceProduct(parseInt(e.target.value));
                            }}
                        />
                        <InputFile
                            text="Product image"
                            placeholder="Choose product image"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                const url = URL.createObjectURL(file);
                                file.url = url;
                                setImageProduct(file);
                            }}
                        />
                        <div className="flex space-x-2 justify-center">
                            <button
                                type="button"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                className="inline-block w-[300px] mt-[15px] px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                onClick={handleSubmit}
                            >
                                Add new product
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-5">
                    <div className="flex justify-center items-center w-[100%] h-[100%] ">
                        {
                            <Card
                                title={nameProduct || 'Name'}
                                price={priceProduct || 'Price'}
                                src={imageProduct ? imageProduct.url : Image.img_placeholder}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProducts;
