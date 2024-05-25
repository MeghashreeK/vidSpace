import { useEffect, useState } from "react";
import { YOUTUBE_LIVE_VIDEO } from "../utils/constants";
import LivevCard from "./LivevCard";
import { Link } from "react-router-dom";


const LiveV=()=>{

    const [LiveData,setLiveData]=useState([]);
    useEffect(()=>{
        getLiveData();
    },[]);
    
    const getLiveData=async()=>{
        const data=await fetch(YOUTUBE_LIVE_VIDEO);
        const json=await data.json();
        console.log(json);                              
        setLiveData(json.items);
    }

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 border-2 border-red-800">
            {LiveData.map((video) => (
                <Link
                    key={video.id.videoId}
                    to={"/livewatch?v=" + video.id.videoId}
                >
                    <LivevCard videoInfo={video} />
                </Link>
            ))}
        </div>
    )
}
export default LiveV;