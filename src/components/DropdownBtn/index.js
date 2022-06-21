import {Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function DropDownBtn({text,menu}) {
    return (
        <Dropdown>
            <Dropdown.Toggle className="text-[#fff] hover:text-[blue] text-[20px]" variant="none" id="dropdown-basic">
                {text}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {menu.map(item => {
                    return(
                        <Dropdown.Item key={item.id} as="div">
                            <Link to={item.link}>{item.text}</Link>
                        </Dropdown.Item>
                    )
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropDownBtn;
