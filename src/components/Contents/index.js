
import {Outlet} from 'react-router-dom';
function Contents(){
    return (
        <div className="flex flex-column">
            <h1 className="text-[30px] font-bold">Menu</h1>
            <Outlet/>
        </div>
    )
}

export default Contents;