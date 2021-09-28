import logo from "image/logo.svg"
import Menu from "components/Sidebar/Menu";
import {Icon} from "Icons";

function SideBar(){
    return (
        <aside className="w-60 py-6 flex flex-col bg-black">
            <a href="#" className="mb-7 px-6">
                <img src={logo} className="h-10" alt=""/>
            </a>
            <Menu />

            <nav className="mt-6 ">
                <ul>
                    <li>
                        <a href="#" className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white">
                            <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-70 group-hover:bg-opacity-100 rounded-sm text-black">
                                <Icon name="plus" size={12}/>
                            </span>
                            Çalma Listesi Oluştur
                        </a>
                    </li>
                    <li>
                        <a href="#" className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white">
                            <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-indigo-600 to-blue-300 text-white rounded-sm opacity-70 group-hover:opacity-100">
                                <Icon name="heart" size={12}/>
                            </span>
                            Beğenilen Şarkılar
                        </a>
                    </li>
                    <li>
                        <a href="#" className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white">
                            <span className="w-6 h-6 flex items-center justify-center mr-4 text-green-400 rounded-sm opacity-70 group-hover:opacity-100" style={{ backgroundColor:"#006450" } }>
                                <Icon name="chapters" size={12}/>
                            </span>
                            Bölümlerin
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default SideBar