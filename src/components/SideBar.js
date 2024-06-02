import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addApiId } from "../utils/MainPageSlice";
const SideBar = () => {
    const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
    const dispatch = useDispatch();
 
    const sideBarItems = [
        { name: "Home", iconSrc: "https://img.icons8.com/material-sharp/24/ffffff/home.png", id: "Home" },
        { name: "Music", iconSrc: "https://img.icons8.com/material-sharp/24/ffffff/musical-notes.png", id: "Music%202024" },
        { name: "Movies", iconSrc: "https://img.icons8.com/ios-glyphs/30/ffffff/cinema---v2.png", id: "Movie%202024" },
        // Add more sidebar items here
        { name: "News", iconSrc: "https://img.icons8.com/material-rounded/24/ffffff/megaphone.png", id: "News%202024" },
        { name: "Sports", iconSrc: "https://img.icons8.com/ios-glyphs/30/ffffff/trophy.png", id: "Sports%202024" },
        { name: "Gaming", iconSrc: "https://img.icons8.com/material/24/ffffff/controller--v2.png", id: "Gaming%202024" },
        { name: "Shopping", iconSrc: "https://img.icons8.com/material/24/ffffff/shopaholic.png", id: "Shopping%202024" },
        { name: "Trending", iconSrc: "https://img.icons8.com/external-anggara-glyph-anggara-putra/32/ffffff/external-trending-basic-user-interface-anggara-glyph-anggara-putra-7.png", id: "Trending%202024" },
        { name: "Podcast", iconSrc: "https://img.icons8.com/material-rounded/24/ffffff/microphone.png", id: "Podcast%202024" }
    ];

    const sideBarFunction = (id) => {
        dispatch(addApiId(id));
    }

    if (!isMenuOpen) return null;
    return (
        <div className="bg-black w-2/6 flex justify-center h-screen">
            <ul className="text-white flex flex-col gap-3 w-full px-2">
            {sideBarItems.map((item, index) => (
                    <div key={index} className="flex flex-wrap justify-center xl:justify-normal items-center gap-1 hover:bg-[#1f1f1f] hover:rounded-lg p-1" onClick={() => sideBarFunction(item.id)}>
                        <div className="flex flex-col items-center xl:flex-row xl:space-x-2">
                            <img className="w-5 h-4" src={item.iconSrc} alt={item.name} />
                            <Link to="/"><li>{item.name}</li></Link>
                        </div>
                    </div>
                ))}
                <div className="flex flex-wrap justify-center xl:justify-normal items-center gap-1 hover:bg-[#1f1f1f] hover:rounded-lg p-1">
                    <div className="flex flex-col items-center xl:flex-row xl:space-x-2">
                        <img className="w-5 h-4" src="https://img.icons8.com/windows/32/ffffff/youtube-live.png" alt="youtube-live" />
                        <Link to="/live"><li className="text-center">Live Videos</li></Link>
                    </div>
                </div>
            </ul>
        </div>);
}
export default SideBar;

