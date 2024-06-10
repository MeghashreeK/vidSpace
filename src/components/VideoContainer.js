import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addId } from "../utils/SuggestionIdSlice";
import { MAIN_PAGE_API } from '../utils/constants';
import { useSelector } from 'react-redux';
import MainVideoCard from "./MainVideoCard";

const VideoContainer = () => {
    const [videoData, setVideoData] = useState([]);
    const dispatch = useDispatch();
    const getVdioId = useSelector((store) => store.apiId.mainvdioId);
    const [mainPageDataValue, setMainPageDataValue] = useState(false);
    const [mainData, setMainData] = useState([]);
    const [error, setError] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const keys = useSelector((store) => store.filter.searchkeys);

    console.log(getVdioId);
    useEffect(() => {
        if (getVdioId.length > 0) {
            getMainPageData();
        }
    }, [getVdioId]);


    useEffect(() => {
        if (keys.length > 0) {
            const lastValueOfKeys = keys[keys.length - 1];
            const filteredTitles = mainData.filter((data) => data.snippet.title.toLowerCase().includes(lastValueOfKeys.toLowerCase()));
            setFilteredData(filteredTitles);
            console.log(filteredTitles);
        }

    }, [keys.length]);

    const getMainPageData = async () => {

        const lastVdioId = getVdioId[getVdioId.length - 1];
        const data = await fetch(MAIN_PAGE_API + lastVdioId);
        const json = await data.json();
        console.log(json);
        console.log(MAIN_PAGE_API + getVdioId);
        setMainData(json.items);
        console.log(json.items);
        setFilteredData(json.items);

    }

    const getId = (channelname) => {
        dispatch(addId(channelname));
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">

              {
                keys.length > 0 ? (
                    filteredData.length > 0 && filteredData.map((video, index) => (
                        <Link
                            key={video.id.videoId}
                            index={index}
                            to={"/watch?v=" + video.id.videoId}
                            onClick={() => getId(video.snippet.channelTitle)}
                        >
                            <MainVideoCard videoInfo={video} />
                        </Link>
                    ))
                ) : (
                    mainData.length > 0 && mainData.map((video, index) => (
                        <Link
                            key={video.id.videoId}
                            index={index}
                            to={"/watch?v=" + video.id.videoId}
                            onClick={() => getId(video.snippet.channelTitle)}
                        >
                            <MainVideoCard videoInfo={video} />
                        </Link>
                    ))
                )
            }
        </div>
    );

}
export default VideoContainer;
