import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBar = () => {
    const isMenuOpen=useSelector((store)=>store.menu.isMenuOpen);
    if(!isMenuOpen) return null;
    return (
        <div className="bg-black w-2/6 flex justify-center">
        <ul className="text-white flex flex-col gap-3 w-full px-2">
            <div className="flex items-center gap-1 hover:bg-[#1f1f1f] hover:rounded-lg p-1">
            <img className="w-5 h-4" src="https://img.icons8.com/material-sharp/24/ffffff/home.png" alt="home"/>
            <Link to="/"><li>Home</li></Link>
            </div>
            <div className="flex items-center gap-1 hover:bg-[#1f1f1f] hover:rounded-lg p-1">
            <img className="w-5 h-4" src="https://img.icons8.com/material-sharp/24/ffffff/musical-notes.png" alt="musical-notes"/>
            <li>Music</li>
            </div>
            <div className="flex items-center gap-1 hover:bg-[#1f1f1f] hover:rounded-lg p-1">
            <img className="w-5 h-4" src="https://img.icons8.com/ios-glyphs/30/ffffff/cinema---v2.png" alt="cinema---v2"/>                <li>Movies</li>
            </div>
            <div className="flex items-center gap-1 hover:bg-[#1f1f1f] hover:rounded-lg p-1">
            <img className="w-5 h-4" src="https://img.icons8.com/windows/32/ffffff/youtube-live.png" alt="youtube-live"/>
            <Link to="/live"><li>Live Videos</li></Link>
            </div>
        </ul>
        </div>);
}
export default SideBar;
