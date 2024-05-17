import { useSelector } from "react-redux";

const SideBar = () => {
    const isMenuOpen=useSelector((store)=>store.menu.isMenuOpen);
    if(!isMenuOpen) return null;
    return (
        <ul className="border-2 border-black w-1/6">
            <div className="flex">
                <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/home--v2.png" alt="home--v2" />                <li>Home</li>
            </div>
            <div className="flex">
                <img width="24" height="24" src="https://img.icons8.com/external-dashed-line-kawalan-studio/24/external-subscription-social-media-dashed-line-kawalan-studio.png" alt="external-subscription-social-media-dashed-line-kawalan-studio" />
                <li>Subscriptions</li>
            </div>
            <div className="flex">
                <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/external-like-thumbs-up-button-from-popular-social-media-logo-regular-tal-revivo.png" alt="external-like-thumbs-up-button-from-popular-social-media-logo-regular-tal-revivo" />            <li>Liked Videos</li>
            </div>
            <div className="flex">
                <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/external-social-media-dislike-thumbs-down-gesture-in-square-logo-regular-tal-revivo.png" alt="external-social-media-dislike-thumbs-down-gesture-in-square-logo-regular-tal-revivo" />            <li>Disliked Videos</li>
            </div>



        </ul>);
}
export default SideBar;
