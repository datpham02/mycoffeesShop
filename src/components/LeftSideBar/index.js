import { Link } from 'react-router-dom';

function LeftSideBar() {
    return (
        <div className="flex flex-column mt-[60px] ">
            <div className="flex flex-column mt-[10px]">
                <h3 className="text-[20px] font-semibold">
                    <Link to="/drinks">Drinks</Link>
                </h3>
                <ul class="list-group list-group-flush">
                    <li className="list-group-item text-[#00000094] font-medium opacity-80">Hot Coffees</li>
                    <li className="list-group-item text-[#00000094] font-medium opacity-80">Hot Teas</li>
                    <li className="list-group-item text-[#00000094] font-medium opacity-80">Hot Drinks</li>
                </ul>
            </div>
            <div className="flex flex-column mt-[10px]">
                <h3 className="text-[20px] font-semibold">
                    <Link to="/foods">Food</Link>
                </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item text-[#00000094] font-medium opacity-80">Hot Breakfast</li>
                    <li className="list-group-item text-[#00000094] font-medium opacity-80">Bakery</li>
                    <li className="list-group-item text-[#00000094] font-medium opacity-80">Lunch</li>
                </ul>
            </div>
        </div>
    );
}

export default LeftSideBar;
