import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/MenuSlice";
import { useEffect, useState,useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_COMMENTS } from "../utils/constants";
import { YOUTUBE_SUGGESTIONS_VIDEOS } from "../utils/constants";

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    const [comments, setComments] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const dispatch = useDispatch();
    const suggestionVideoData = useSelector((store) => store.suggestionId.id);
    const [displayVideo, setDisplayVideo] = useState(false);
    const [videoI,setVideoI]=useState([]);
    const iframeRef = useRef(null);


    useEffect(() => {
        dispatch(closeMenu());
        getComments();
        getSuggestionVideos();
    }, [])
    // console.log(searchParams.get("v"));

    const getComments = async () => {
        const data = await fetch(YOUTUBE_COMMENTS + searchParams.get("v"));
        const json = await data.json();
        // console.log(json)
        setComments(json.items);
    }
    const getSuggestionVideos = async () => {
        const data = await fetch(YOUTUBE_SUGGESTIONS_VIDEOS + suggestionVideoData);
        const json = await data.json();
        console.log(json);
        setSuggestions(json.items);
    }

    const displayFunction = () => {
        setDisplayVideo(true);
        if (iframeRef.current) {
            iframeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        }

    return (
        <div className=" flex w-full border-2 border-black gap-5">

            <div className="flex flex-col w-3/5">

                {displayVideo===false && <iframe height="415" src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                {displayVideo && <iframe ref={iframeRef} height="415" src={"https://www.youtube.com/embed/" + videoI}
                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}


                <div className="flex flex-col border-2 border-black gap-1">
                    {comments.length > 0 && comments.map((comment) => {
                        const { authorDisplayName, authorProfileImageUrl, textOriginal } = comment?.snippet?.topLevelComment?.snippet || {};
                        return (
                            <div key={comment.id} className="flex items-start gap-2">
                                <img className="h-10 w-10 rounded-full" src={authorProfileImageUrl} alt="user-profile" />
                                <div>
                                    <p className="font-bold">{authorDisplayName}</p>
                                    <p>{textOriginal}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
            <div className="w-2/5 cursor-pointer">
                {suggestions.map((data) => {
                    const { snippet,id } = data;
                    const {videoId}=id;
                    const { thumbnails, title, publishTime, channelTitle } = snippet;
                    return (<div onClick={()=>{displayFunction(); setVideoI(videoId)}}>
                        <img className="w-full h-1/5" src={thumbnails.high.url} alt="thumbnail" />
                        <p>{title}</p>
                        <p>{publishTime}</p>
                        <p>{channelTitle}</p>
                    </div>)
                })}
            </div>
        </div>
    );
}
export default WatchPage;




