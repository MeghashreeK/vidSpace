import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_URL } from "../constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

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
        // <div className="flex flex-wrap gap-4">
        // {videoData.map((video)=><Link key={video.id} to={"/watch?v="+video.id}><VideoCard videoInfo={video}/></Link> )}
        // </div>
        <div className="flex flex-wrap gap-4">
            {videoData.map((video) => (
                <Link key={video.id} to={`/watch?v=${video.id}`} className="block">
                    <VideoCard videoInfo={video} />
                </Link>
            ))}
        </div>

    );
}
export default VideoContainer;

