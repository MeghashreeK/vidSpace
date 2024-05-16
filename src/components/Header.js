import vidspacelogo from "../images/vidspace-logo.png";
const Header=()=>{
    return(
        <div className="flex">
            <div className="flex justify-center items-center">
           <img className="h-8 w-8" src="https://img.icons8.com/ios-filled/50/menu--v6.png" alt="menu--v6"/>
           <img className="h-16 w-16" src={vidspacelogo} alt="logo"/>
           </div>
           <div className="flex">
            <p>Search</p>
            <input type="text" className="border-black border" />
           </div>
           <div>
           <img className="h-8 w-8" width="24" height="24" src="https://img.icons8.com/material-rounded/24/000000/user-male-circle.png" alt="user-male-circle"/>
           </div>
        </div>
       
    );
}
export default Header;