import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBar = () => {
    const isMenuOpen=useSelector((store)=>store.menu.isMenuOpen);
    if(!isMenuOpen) return null;
    return (
        <div className="bg-black border-2 w-2/6">
        <ul className="text-white">
            <div className="flex">
                <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/home--v2.png" alt="home--v2" />                
                <Link to="/"><li>Home</li></Link>
            </div>
            <div className="flex">
                <img width="24" height="24" src="https://img.icons8.com/external-dashed-line-kawalan-studio/24/external-subscription-social-media-dashed-line-kawalan-studio.png" alt="external-subscription-social-media-dashed-line-kawalan-studio" />
                <li>Subscriptions</li>
            </div>
            <div className="flex">
                <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/external-like-thumbs-up-button-from-popular-social-media-logo-regular-tal-revivo.png" alt="external-like-thumbs-up-button-from-popular-social-media-logo-regular-tal-revivo" />            
                <Link to="/live"><li>Live Videos</li></Link>
            </div>
            <div className="flex">
                <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/external-social-media-dislike-thumbs-down-gesture-in-square-logo-regular-tal-revivo.png" alt="external-social-media-dislike-thumbs-down-gesture-in-square-logo-regular-tal-revivo" />            
                <li>Disliked Videos</li>
            </div>
        </ul>
        </div>);
}
export default SideBar;
