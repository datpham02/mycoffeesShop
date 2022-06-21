import { faPenToSquare ,faX,faCheck} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {memo} from 'react'


import {db} from '~/firebase/config.js'
import {doc, updateDoc, arrayRemove } from 'firebase/firestore'

function Edit({id,Product,status ,onClick}){
    const DeleteProduct = async () => {
        const collectionRef = doc(db,"category",id)
        await updateDoc(collectionRef,{
            products: arrayRemove(Product)
        })
        .then(() =>{
            
            alert("Successed")
        })
    }
    return (
        <div>
            {
                status 
                ? 
                <FontAwesomeIcon onClick={onClick} icon={faPenToSquare} className="w-[20px] h-[20px] text-[blue]" />
                :
                <div className="w-[100%] flex justify-between">
                    <FontAwesomeIcon onClick={DeleteProduct} icon={faX} className="w-[20px] h-[20px] text-[red]" />
                    <FontAwesomeIcon onClick={onClick} icon={faCheck} className="w-[20px] h-[20px] text-[green]" />
                </div>
            }
        </div>
    )
}

export default memo(Edit);