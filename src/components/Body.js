import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Body = () => {
    return (
        <div className="flex w-full bg-black">
            <SideBar />
            <Outlet />
        </div>
    );
}
export default Body;