import { useEffect } from "react";
import { YOUTUBE_VIDEO_URL } from "../constants";

const VideoContainer=()=>{
    useEffect(()=>{
        getData();
    },[]);
    
    const getData=async()=>{
        const data=await fetch(YOUTUBE_VIDEO_URL);
        const json=await data.json();
        console.log(json);
    }

    return(
        <div>vdiocontainer</div>
    );
}
export default VideoContainer;