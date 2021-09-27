import logo from "image/logo.svg"
import Menu from "components/Sidebar/Menu";

function SideBar(){
    return (
        <aside className="w-60 py-6 flex flex-col">
            <a href="#" className="mb-5 px-6">
                <img src={logo} className="h-10" alt=""/>
            </a>
            <Menu />

        </aside>
    )
}

export default SideBar