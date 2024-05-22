import { useDispatch } from "react-redux";
import vidspacelogo from "../images/vidspace-logo.png";
import { toggleMenu } from "../utils/MenuSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SUGGESTIONS } from "../constants";
const Header = () => {
    const dispatch = useDispatch();
    const toggleMenuBar = () => {
        dispatch(toggleMenu());
        // console.log(true);
    }
    const [searchQuery,setSearchQuery]=useState("");

    useEffect(()=>{
        getSuggestions();
    },[setSearchQuery]);

    const getSuggestions=async()=>{
        const data=await fetch(YOUTUBE_SUGGESTIONS+setSearchQuery);
        const json=await data.json();
        console.log(json);
    }

    return (
        <div className="grid grid-flow-col p-2 shadow-md shadow-slate-400">
            <div className="flex justify-center items-center col-span-1">
                <img className="h-8 w-8" src="https://img.icons8.com/ios-filled/50/menu--v6.png" alt="menu--v6" onClick={toggleMenuBar} />
                <img className="h-16 w-16" src={vidspacelogo} alt="logo" />
                <h1 className="font-bold">vidSpace</h1>
               
            </div>
            <div className="flex flex-col col-span-10">

                 <div className="flex w-1/2">
                <input type="text" className="border-black border h-8 w-full rounded-l-full" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
                <button className="border border-black rounded-r-full px-2"><img className="w-[1.85rem] h-[1.90rem]" src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" alt="search--v1"/></button>
                </div>

                <div className="border-2 bg-white fixed mt-9 w-1/3 px-5 rounded-lg">
                <ul>
                    <li>apple</li>
                    <li>apple</li>
                    <li>apple</li>
                    <li>apple</li>
                </ul>
                </div>

            </div>
            <div className="col-span-1">
                <img className="h-8 w-8" width="24" height="24" src="https://img.icons8.com/material-rounded/24/000000/user-male-circle.png" alt="user-male-circle" />
            </div>
        </div>

    );
}
export default Header;
