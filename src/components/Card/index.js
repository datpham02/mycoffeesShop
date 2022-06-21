import Image from '~/assets/images';

function Card({title = "title",price = "0",src},key) {
    return (
        <div key={key} className="flex items-center w-[290px] h-[128px] bg-[#544639] rounded-[20px]">
            <div className="w-[50%] h-[100%] rounded-[5px]">
                <img src={src ?? Image.menu_item_1} alt={title} className="w-[100%] h-[100%] rounded-[20px]"/>
            </div>
            <div className="px-[20px] py-[15px] w-[50%] h-[100%] flex flex-column justify-around">
                <div className="break-all text-[20px] text-[#FC6]">{title}</div>
                <div className="break-all text-[20px] text-[#fff]">{price}</div>
            </div>
        </div>
    );
}

export default Card;
