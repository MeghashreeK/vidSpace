import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer=()=>{
    return(
        <div className="flex flex-col px-5 w-11/12">
            <ButtonList/>
            <VideoContainer/>
        </div>
    );
}
export default MainContainer;