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
        // console.log(json);
        setSuggestions(json[1]);
        dispatch(cacheResults({
            [searchQuery]: json[1],
        }))

    }

    return (
        <div className="flex w-full p-2 shadow-md shadow-slate-400 ">
            <div className="flex w-1/5 items-center justify-between">
                <img className="h-8 w-8" src="https://img.icons8.com/ios-filled/50/menu--v6.png" alt="menu--v6" onClick={toggleMenuBar} />
                <img className="h-8 w-8" src={vidspacelogo} alt="logo" />
                <h1 className="font-bold">vidSpace</h1>

            </div>
            <div className="flex flex-col w-full items-center justify-center">

                <div className="flex w-2/3" id="searchbar-container">
                    <input type="text" className="border-black border h-8 w-full rounded-l-full" value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value); }} />
                    <button className="border border-black rounded-r-full px-2"><img className="w-[1.85rem] h-[1.90rem]" src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" alt="search--v1" /></button>
                </div>

                {suggestions.length > 0 && <div className="border-2 bg-white fixed mt-9 w-1/3 px-5 rounded-lg">
                    {suggestions.map((query, index) => <ul key={index}><li>{query}</li></ul>)}
                </div>}

            </div>
        </div>

    );
}
export default Header;

