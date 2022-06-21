import {Outlet} from 'react-router-dom';
import {AllProducts} from '~/components'
function Contents(){
    
    return (
        <div className="flex flex-column">
            <h1 className="text-[30px] font-bold">Menu</h1>
            <div className="h-[100vh] srcollAnble">
                {<Outlet/>}
            </div>
        </div>
    )
}

export default Contents;




