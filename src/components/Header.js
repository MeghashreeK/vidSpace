import { useDispatch } from "react-redux";
import vidspacelogo from "../images/vidspace-logo.png";
import { toggleMenu } from "../utils/MenuSlice";
import { Link } from "react-router-dom";
const Header = () => {
    const dispatch = useDispatch();
    const toggleMenuBar = () => {
        dispatch(toggleMenu());
        // console.log(true);
    }
    return (
        <div className="grid grid-flow-col p-2 shadow-md shadow-slate-400">
            <div className="flex justify-center items-center col-span-1">
                <img className="h-8 w-8" src="https://img.icons8.com/ios-filled/50/menu--v6.png" alt="menu--v6" onClick={toggleMenuBar} />
                <img className="h-16 w-16" src={vidspacelogo} alt="logo" />
                <h1 className="font-bold">vidSpace</h1>
               
            </div>
            <div className="flex col-span-10">
                <p>Search</p>
                <input type="text" className="border-black border" />
            </div>
            <div className="col-span-1">
                <img className="h-8 w-8" width="24" height="24" src="https://img.icons8.com/material-rounded/24/000000/user-male-circle.png" alt="user-male-circle" />
            </div>
        </div>

    );
}
export default Header;
