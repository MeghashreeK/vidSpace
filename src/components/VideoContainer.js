import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addId } from "../utils/SuggestionIdSlice";
import { MAIN_PAGE_API } from '../utils/constants';
import { useSelector } from 'react-redux';
import MainVideoCard from "./MainVideoCard";
import Noresult from "./Noresult";


const VideoContainer = () => {
    const dispatch = useDispatch();
    const getVdioId = useSelector((store) => store.apiId.mainvdioId);
    const [mainData, setMainData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const keys = useSelector((store) => store.filter.searchkeys);

    console.log(getVdioId);
    useEffect(() => {
        if (getVdioId.length > 0) {
            getMainPageData();
        }
    }, [getVdioId]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (keys.length > 0) {
            const lastValueOfKeys = keys[keys.length - 1];
            const filteredTitles = mainData.filter((data) => data.snippet.title.toLowerCase().includes(lastValueOfKeys.toLowerCase()));
            setFilteredData(filteredTitles);
        }

    }, [keys.length]);

    const getMainPageData = async () => {
        try{
        const lastVdioId = getVdioId[getVdioId.length - 1];
        const data = await fetch(MAIN_PAGE_API + lastVdioId);
        const json = await data.json();
        setMainData(json.items);
        setFilteredData(json.items);
        }
        catch(error){
            console.log("Error fetching MainPage VideoData:",error);
        }
    }

    const getId = (channelname) => {
        dispatch(addId(channelname));
    }
    return (

        <div className="w-full h-full">
            {keys.length > 0 ? (
                filteredData.length === 0 && mainData.length > 0  ? (
                    <div className="flex justify-center items-center w-full h-full">
                        <Noresult />
                    </div>
                ) : (
                    <div className="text-[14px] sm:text-[16px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full h-full">
                        {filteredData.map((video, index) => (
                            <Link
                                key={video.id.videoId}
                                index={index}
                                to={"/watch?v=" + video.id.videoId}
                                onClick={() => getId(video.snippet.channelTitle)}
                            >
                                <MainVideoCard videoInfo={video} loading={loading} />
                            </Link>
                        ))}
                    </div>
                )
            ) : (
               
                    <div className="text-[14px] sm:text-[16px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full h-full">
                        {mainData.map((video, index) => (
                            <Link
                                key={video.id.videoId}
                                index={index}
                                to={"/watch?v=" + video.id.videoId}
                                onClick={() => getId(video.snippet.channelTitle)}
                            >
                                <MainVideoCard videoInfo={video} loading={loading} />
                            </Link>
                        ))}
                    </div>
                
            )}
        </div>
    );

}
export default VideoContainer;
