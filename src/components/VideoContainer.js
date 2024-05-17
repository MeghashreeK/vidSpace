import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_URL } from "../constants";
import VideoCard from "./VideoCard";

const VideoContainer=()=>{
    const [videoData,setVideoData]=useState([]);
    useEffect(()=>{
        getData();
    },[]);
    
    const getData=async()=>{
        const data=await fetch(YOUTUBE_VIDEO_URL);
        const json=await data.json();
        console.log(json);
        setVideoData(json.items);
    }

    return(
        <div className="flex flex-wrap space-x-5 justify-center items-center">
        {videoData.map((video)=><VideoCard key={video.id} videoInfo={video}/> )}
        </div>

    );
}
export default VideoContainer;

