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
        <div className="flex flex-wrap gap-4 border-2 border-red-800 justify-center">
        {videoData.map((video)=><Link key={video.id} className="flex w-1/4" to={"/watch?v="+video.id}><VideoCard videoInfo={video}/></Link> )}
        </div>

        // <div className="flex flex-wrap">
        //     {videoData.map((video) => (
        //         <Link
        //             key={video.id}
        //             className="block w-1/4 p-2"
        //             to={"/watch?v=" + video.id}
        //         >
        //             <VideoCard videoInfo={video} />
        //         </Link>
        //     ))}
        // </div>
    );
}
export default VideoContainer;

