import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/MenuSlice";
import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_COMMENTS } from "../utils/constants";
import { YOUTUBE_SUGGESTIONS_VIDEOS } from "../utils/constants";
import { addComment } from "../utils/CommentsSlice";
import LiveWatchPage from "./LiveWatchPage";

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    const [comments, setComments] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const dispatch = useDispatch();
    const suggestionVideoData = useSelector((store) => store.suggestionId.id);
    const [displayVideo, setDisplayVideo] = useState(false);
    const [videoI, setVideoI] = useState([]);
    const iframeRef = useRef(null);
    const commentSection = useRef(null);
    const [subscribeValue, setsubscribeValue] = useState(true);
    const [likeValue, setLikeValue] = useState(true);
    const [dislikedValue, setDislikedValue] = useState(true);
    const [commentValue, setCommentValue] = useState([]);
    const [insertComment, setInsertComment] = useState(false);
    const [commentSectionDisabled, setCommentSectionDisabled] = useState(false);
    const [isLivePage, setIsLivePage] = useState(false);
    const getVdioId = useSelector((store) => store.apiId.mainvdioId);



    const addingComment = useSelector((store) => store.comment.csection);

    useEffect(() => {
        dispatch(closeMenu());
        getComments();
        getSuggestionVideos();
        const lastVdioId = getVdioId[getVdioId.length - 1];
        if (lastVdioId === "Live%202024") {
            setIsLivePage(true);
        }
    }, [])



    useEffect(() => {
        if (insertComment && commentSection.current) {
            commentSection.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, [addingComment]);

    const getComments = async () => {
        try {
            const response = await fetch(YOUTUBE_COMMENTS + searchParams.get("v"));
            const data = await response.json();

            if (data.error) {
                if (data.error.errors[0].reason === 'commentsDisabled') {
                    setCommentSectionDisabled(true);
                }
            } else {
                setComments(data.items);
                setCommentSectionDisabled(false);
            }
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

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

    const subscribeValueChange = () => {
        setsubscribeValue(!subscribeValue);
    }

    const likeValueChange = () => {
        setLikeValue(!likeValue);
    }

    const dislikedValueChange = () => {
        setDislikedValue(!dislikedValue);
    }

    const commentFunction = (commentValue) => {
        dispatch(addComment(commentValue));
        setCommentValue("");
        setInsertComment(true);
    }

    return (
        <div className="flex w-full h-full bg-black text-[14px] sm:text-[16px] text-white gap-5 sm:p-8 justify-center flex-wrap sm:flex-nowrap" >

            <div className="flex flex-col w-full sm:w-3/5">
                <div className="aspect-w-16 aspect-h-9 w-full">
                    <iframe
                        ref={iframeRef}
                        src={`https://www.youtube.com/embed/${displayVideo ? videoI : searchParams.get("v")}?autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="rounded-lg w-full"
                        allowFullScreen
                    ></iframe>

                </div>
                <div className="flex gap-5 mt-[2%] p-2">
                    <button className={`border-white w-26  border rounded-[50%/100%] px-4 py-2 cursor-pointer ${subscribeValue === false ? 'bg-white text-black' : ''} cursor-pointer`} onClick={() => subscribeValueChange()}>{subscribeValue === true ? 'Subscribe' : 'Subscribed'}</button>
                    <button className={`border-white w-26 border rounded-[50%/100%] px-4 py-2 cursor-pointer ${likeValue === false ? 'bg-white text-black' : ''}`} onClick={() => likeValueChange()}>{likeValue === true ? 'Like' : 'Liked'}</button>
                    <button className={`border-white w-26 border rounded-[50%/100%] px-4 py-2 cursor-pointer ${dislikedValue === false ? 'bg-white text-black' : ''}`} onClick={() => dislikedValueChange()}>{dislikedValue === true ? 'Dislike' : 'Disliked'}</button>
                </div>

                <div ref={commentSection} className="flex flex-col p-2 gap-1 mt-2">
                    {
                        commentSectionDisabled ? (
                            <div className="flex h-full justify-center">
                                <p className="text-slate-400">Comments Section Off.</p>
                            </div>
                        ) :
                            (
                                <>
                                    <p className="font-bold">Comments</p>
                                    <form className=" flex gap-1 mb-4 mt-4" onSubmit={
                                        (e) => {
                                            e.preventDefault();
                                            dispatch(addComment(commentValue));
                                            setCommentValue("");
                                            setInsertComment(true);
                                        }
                                    }>
                                        <input type="text" value={commentValue} autoFocus placeholder="Add a comment" onChange={(e) => { setCommentValue(e.target.value) }} className="bg-black text-white border-b border-white focus:outline-none focus:border-b focus:border-white w-full" />
                                        <img className="h-5 w-5 cursor-pointer" src="https://img.icons8.com/metro/26/ffffff/sent.png" onClick={() => commentFunction(commentValue)} alt="sent" />
                                    </form>
                                    <div className="flex flex-col gap-5">
                                        {comments.map((comment) => {
                                            const { authorDisplayName, authorProfileImageUrl, textOriginal } = comment?.snippet?.topLevelComment?.snippet || {};
                                            return (
                                                <div key={comment.id} className="flex gap-3">
                                                    <img className="h-10 w-10 rounded-full" src={authorProfileImageUrl} alt="user-profile" />
                                                    <div>
                                                        <p className="font-bold">{authorDisplayName}</p>
                                                        <p>{textOriginal}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                        {addingComment.map((comment, index) =>
                                            insertComment && (
                                                <div className="flex gap-2" key={index}>
                                                    <img className="h-10 w-10" src="https://img.icons8.com/material/24/808080/user-male-circle--v1.png" alt="user-male-circle--v1" />
                                                    <div>
                                                        <p className="font-bold">@Username</p>
                                                        <p>{comment}</p>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </>)
                    }
                </div>

            </div>
            <div className="flex h-full flex-col w-full sm:w-[30%] cursor-pointer sm:p-0 p-3 gap-5">
                {isLivePage && <div className="flex h-[80vh] overflow-hidden">
                    <LiveWatchPage />
                </div>}
                <div className="flex flex-col gap-5 sm:gap-3">
                    {suggestions.map((data) => {
                        const { snippet, id } = data;
                        const { videoId } = id;
                        const { thumbnails, title, publishTime, channelTitle } = snippet;
                        return (
                            <div onClick={() => { displayFunction(); setVideoI(videoId) }} className="flex flex-col h-full rounded-lg w-full bg-[#1f1f1f]">
                                <img alt="thumbnail" src={thumbnails.high.url} className="w-full h-48 object-cover rounded-lg" />
                                <div className="p-4 flex flex-col justify-between h-full">
                                    <ul>
                                        <li className="font-bold truncate-2-lines text-white">{title}</li>
                                        <li className="text-slate-400">{publishTime}</li>
                                        <li className="text-slate-400">{channelTitle}</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div >
    );
}
export default WatchPage;
