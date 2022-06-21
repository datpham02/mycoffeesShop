import {Outlet} from 'react-router-dom';
function ContentProducts(){
    
    return (
        <div className="flex flex-column">
            <div className="h-[100vh] srcollAnble">
                <Outlet/>
            </div>
        </div>
    )
}

export default ContentProducts;




