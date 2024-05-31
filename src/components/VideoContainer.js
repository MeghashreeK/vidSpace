import { useEffect, useState } from "react";
import {YOUTUBE_VIDEO_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { addId } from "../utils/SuggestionIdSlice";
import { MAIN_PAGE_API } from '../utils/constants';
import { useSelector } from 'react-redux';
import { clearMainVdioId } from "../utils/MainPageSlice";
import MainVideoCard from "./MainVideoCard";

const VideoContainer=()=>{
    const [videoData,setVideoData]=useState([]);
    const dispatch=useDispatch();
    const getVdioId=useSelector((store)=>store.apiId.mainvdioId);
    const [mainPageDataValue,setMainPageDataValue]=useState(false);
    const [mainData,setMainData]=useState([]);
    

    useEffect(() => {
        if (getVdioId.length > 0) {
            getMainPageData();
            setMainPageDataValue(!mainPageDataValue);
            dispatch(clearMainVdioId());
        }
    }, [getVdioId]);

    useEffect(()=>{
        getVideoData();
    },[]);
      
    const getMainPageData=async()=>{
        const data=await fetch(MAIN_PAGE_API+getVdioId);
        const json=await data.json();
        console.log(json);
        console.log(MAIN_PAGE_API+getVdioId);
        setMainData(json.items);

    }

    const getVideoData=async()=>{
        const data=await fetch(MAIN_PAGE_API+"Videos%202024");
        const json=await data.json();
        setVideoData(json.items);
    }

    const getId=(channelname)=>{
        dispatch(addId(channelname));
    }



    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {mainPageDataValue===false && videoData.length>0 && videoData.map((video,index) => (
                 <Link
                 key={video.id.videoId}
                 index={index}
                 to={"/watch?v=" + video.id.videoId}
                 onClick={()=>getId(video.snippet.channelTitle)}
             >
                 <MainVideoCard videoInfo={video}/>
             </Link>
            ))}
            {mainPageDataValue && mainData.length>0 && mainData.map((video,index) => (
                <Link
                    key={video.id.videoId}
                    index={index}
                    to={"/watch?v=" + video.id.videoId}
                    onClick={()=>getId(video.snippet.channelTitle)}
                >
                    <MainVideoCard videoInfo={video}/>
                </Link>
            ))}
        </div>
    );
  
}
export default VideoContainer;


