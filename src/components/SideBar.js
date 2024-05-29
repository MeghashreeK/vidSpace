import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addApiId } from "../utils/MainPageSlice";
const SideBar = () => {
    const isMenuOpen=useSelector((store)=>store.menu.isMenuOpen);
    const dispatch=useDispatch();
    
    const musicIdFunction=()=>{
         dispatch(addApiId("Music%202024"));
         console.log("music");
    }
    const movieIdFunction=()=>{
        dispatch(addApiId("Movies%202024"));
        console.log("movie");
    }
    
    if(!isMenuOpen) return null;
    return (
        <div className="bg-black w-2/6 flex justify-center">
        <ul className="text-white flex flex-col gap-3 w-full px-2">
            <div className="flex flex-wrap justify-center xl:justify-normal items-center gap-1 hover:bg-[#1f1f1f] hover:rounded-lg p-1">
            <div className="flex flex-col items-center xl:flex-row xl:space-x-2">
            <img className="w-5 h-4" src="https://img.icons8.com/material-sharp/24/ffffff/home.png" alt="home"/>
            <Link to="/"><li>Home</li></Link>
            </div>
            </div>

            <div className="flex flex-wrap justify-center xl:justify-normal items-center gap-1 hover:bg-[#1f1f1f] hover:rounded-lg p-1" onClick={()=>musicIdFunction()}>
            <div className="flex flex-col items-center xl:flex-row xl:space-x-2">
            <img className="w-5 h-4" src="https://img.icons8.com/material-sharp/24/ffffff/musical-notes.png" alt="musical-notes"/>
            <li>Music</li>
            </div>
            </div>

            <div className="flex flex-wrap justify-center xl:justify-normal items-center gap-1 hover:bg-[#1f1f1f] hover:rounded-lg p-1" onClick={()=>movieIdFunction()}>
            <div className="flex flex-col items-center xl:flex-row xl:space-x-2">
            <img className="w-5 h-4" src="https://img.icons8.com/ios-glyphs/30/ffffff/cinema---v2.png" alt="cinema---v2"/>                
            <li>Movies</li>
            </div>
            </div>

            <div className="flex flex-wrap justify-center xl:justify-normal items-center gap-1 hover:bg-[#1f1f1f] hover:rounded-lg p-1">
            <div className="flex flex-col items-center xl:flex-row xl:space-x-2">
            <img className="w-5 h-4" src="https://img.icons8.com/windows/32/ffffff/youtube-live.png" alt="youtube-live"/>
            <Link to="/live"><li className="text-center">Live Videos</li></Link>
            </div>
            </div>
        </ul>
        </div>);
}
export default SideBar;

