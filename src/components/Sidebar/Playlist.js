function Playlist(){
    return (
        <nav className="mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-10 overflow-auto">
            <ul>
                {new Array(40).fill(
                    <li>
                        <a href="#" className="text-s text-link hover:text-white flex items-center h-8">
                            22. Çalma Listem
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Playlist