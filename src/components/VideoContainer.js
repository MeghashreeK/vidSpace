import { useEffect, useState } from "react";
import {YOUTUBE_VIDEO_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { addId } from "../utils/SuggestionIdSlice";
import { MAIN_PAGE_API } from '../utils/constants';
import { useSelector } from 'react-redux';

const VideoContainer=()=>{
    const [videoData,setVideoData]=useState([]);
    const dispatch=useDispatch();
    const getVdioId=useSelector((store)=>store.apiId.mainvdioId);

    useEffect(() => {
        // Fetch main page data whenever getVdioId changes
        if (getVdioId.length > 0) {
            getMainPageData();
        }
    }, [getVdioId]);

    useEffect(()=>{
        getVideoData();
    },[]);
    console.log(MAIN_PAGE_API+getVdioId);
      
    const getMainPageData=async()=>{
        const data=await fetch(MAIN_PAGE_API+getVdioId);
        const json=await data.json();
        console.log(json);
        console.log(MAIN_PAGE_API+getVdioId);
    }

    const getVideoData=async()=>{
        const data=await fetch(YOUTUBE_VIDEO_URL);
        const json=await data.json();
        // console.log(json);                              
        setVideoData(json.items);
    }

    const getId=(channelname)=>{
        dispatch(addId(channelname));
    }



    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {videoData.map((video,index) => (
                <Link
                    key={video.id}
                    index={index}
                    to={"/watch?v=" + video.id}
                    onClick={()=>getId(video.snippet.channelTitle)}
                >
                    <VideoCard videoInfo={video}/>
                </Link>
            ))}
        </div>
    );
  
}
export default VideoContainer;
