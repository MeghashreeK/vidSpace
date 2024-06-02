import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addId } from "../utils/SuggestionIdSlice";
import { MAIN_PAGE_API } from '../utils/constants';
import { useSelector } from 'react-redux';
import { clearMainVdioId } from "../utils/MainPageSlice";
import MainVideoCard from "./MainVideoCard";
import { closeHeader } from "../utils/HeaderSlice";
import Error from "./Error";


const VideoContainer = () => {
    const [videoData, setVideoData] = useState([]);
    const dispatch = useDispatch();
    const getVdioId = useSelector((store) => store.apiId.mainvdioId);
    const [mainPageDataValue, setMainPageDataValue] = useState(false);
    const [mainData, setMainData] = useState([]);
    const [error, setError] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const keys = useSelector((store) => store.filter.searchkeys);


    useEffect(() => {
        if (getVdioId.length > 0) {
            getMainPageData();
            setMainPageDataValue(!mainPageDataValue);
            dispatch(clearMainVdioId());
        }
    }, [getVdioId]);

    useEffect(() => {
        getVideoData();
    }, []);

    useEffect(() => {
        if (keys.length > 0) {
            const lastValueOfKeys = keys[keys.length - 1];
            const filteredTitles = videoData.filter((data) => data.snippet.title.toLowerCase().includes(lastValueOfKeys.toLowerCase()));
            setFilteredData(filteredTitles);
            console.log(filteredTitles);
        }

    }, [keys.length]);

    const getMainPageData = async () => {

        const data = await fetch(MAIN_PAGE_API + getVdioId);
        const json = await data.json();
        console.log(json);
        console.log(MAIN_PAGE_API + getVdioId);
        setMainData(json.items);

    }



    const getVideoData = async () => {
        const data = await fetch(YOUTUBE_VIDEO_URL);
        const json = await data.json();
        setVideoData(json.items);
        setFilteredData(json.items);
    }





    // const getVideoData = async () => {
    //     try {
    //         const data = await fetch(MAIN_PAGE_API + "Videos%202024");
    //         if (!data.ok) {
    //             throw new Error(`HTTP error! status: ${data.status}`);
    //         }
    //         const json = await data.json();
    //         setVideoData(json.items);
    //     } catch (error) {
    //         setError(true); 
    //         console.error("Error fetching video data:", error);
    //     }
    // }



    const getId = (channelname) => {
        dispatch(addId(channelname));
    }

    if (error) {
        return <Error />;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {/* {mainPageDataValue===false && videoData.length>0 && videoData.map((video,index) => (
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
            ))} */}


            {keys.length===0 && videoData.map((video, index) => (
                <Link
                    key={video.id}
                    index={index}
                    to={"/watch?v=" + video.id}
                    onClick={() => getId(video.snippet.channelTitle)}
                >
                    <VideoCard videoInfo={video} />
                </Link>
            ))}

            {filteredData.map((video, index) => (
                <Link
                    key={video.id}
                    index={index}
                    to={"/watch?v=" + video.id}
                    onClick={() => getId(video.snippet.channelTitle)}
                >
                    <VideoCard videoInfo={video} />
                </Link>
            ))}


        </div>
    );

}
export default VideoContainer;

