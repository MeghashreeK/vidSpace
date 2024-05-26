import { useDispatch, useSelector } from "react-redux";
import vidspacelogo from "../images/vidspace-logo.png";
import { toggleMenu } from "../utils/MenuSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SUGGESTIONS } from "../utils/constants";
import { cacheResults } from "../utils/SearchSlice";
const Header = () => {
    const dispatch = useDispatch();
    const toggleMenuBar = () => {
        dispatch(toggleMenu());
    }
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const searchCache = useSelector((store) => store.search);

    // Suppose,
    // searchCache={
    //     "iphone":["iphone11","iphone12"]
    // }
    // searchQuery=iphone

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            }
            else {
                getSuggestions();
            }
        }, 200);


        return () => {
            clearInterval(timer);
        }

    }, [searchQuery]);

    useEffect(() => { handleClick(); }, [])

    const handleClick = () => {
        document.addEventListener("click", function (event) {
            const searchBarContainer = document.getElementById('searchbar-container');
            if (searchBarContainer.contains(event.target)) {
                return;
            }
            else {
                setSuggestions([]);
            }
        });

        document.addEventListener("scroll", function (event) {
            const searchBarContainer = document.getElementById('searchbar-container');
            if (searchBarContainer.contains(event.target)) {
                return;
            }
            else {
                setSuggestions([]);
            }
        });
    }

    const getSuggestions = async () => {
        const data = await fetch(YOUTUBE_SUGGESTIONS + searchQuery);
        const json = await data.json();
        console.log(json);
        setSuggestions(json[1]);
        dispatch(cacheResults({
            [searchQuery]: json[1],
        }))

    }

    return (
        <div className="flex w-full p-2 bg-[#000000]">
            <div className="flex w-1/5 items-center gap-2">
                <img className="h-6 w-6 cursor-pointer" src="https://img.icons8.com/ios-filled/50/ffffff/menu--v6.png" alt="menu--v6" onClick={toggleMenuBar} />
                <div className="flex items-center justify-center gap-1">
                    <img className="h-6 w-8" src={vidspacelogo} alt="logo" />
                    <h1 className="font-Bebas text-[24px] mt-[3px] text-[#ffffff] hidden sm:block">vidSpace</h1>
                </div>


            </div>
            <div className="flex flex-col w-full items-center justify-center relative">

                <div className="flex w-2/3" id="searchbar-container">
                    <input type="text" className="border-black border h-8 w-full rounded-l-full border-r-0 px-5 focus:outline-none" placeholder="Search" value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value); }} />
                    <button className="border border-black rounded-r-full px-2 bg-[#1f1f1f]"><img className="w-[18px] h-[18px]" src="https://img.icons8.com/ios-glyphs/30/ffffff/search--v1.png" alt="search--v1" /></button>
                </div>

                {suggestions.length > 0 && <div className="flex flex-col bg-[#1f1f1f] text-white w-3/5 px-5 rounded-lg absolute top-full mt-1 gap-2 pt-1 pb-1">
                    {suggestions.map((query, index) => (<div className="flex items-center gap-2">
                        <img className="w-[14px] h-[14px] mt-1" src="https://img.icons8.com/ios-glyphs/30/ffffff/search--v1.png" alt="search--v1" />
                        <ul key={index}>
                            <li>{query}</li>
                        </ul>
                    </div>))}
                </div>}

            </div>
        </div>

    );
}
export default Header;

