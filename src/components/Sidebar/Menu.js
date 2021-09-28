import {Icon} from "Icons";
import { NavLink } from "react-router-dom";

function Menu(){
    return (
        <nav className="px-2">
            <ul className="flex flex-col">
                <li>
                    <NavLink to={"/"} activeClassName="bg-active text-white" exact className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">
                        <span>
                            <Icon name="home" size={24}/>
                        </span>
                        Ana sayfa
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/search"} activeClassName="bg-active text-white" className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">
                        <span>
                            <Icon name="search" size={24}/>
                        </span>
                        Ara
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/collection"} activeClassName="bg-active text-white" className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">
                         <span>
                            <Icon name="collection" size={24}/>
                        </span>
                        Kitaplığın
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu