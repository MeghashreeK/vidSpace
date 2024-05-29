// import { useDispatch, useSelector } from "react-redux";
// import { closeMenu } from "../utils/MenuSlice";
// import { useEffect, useState,useRef } from "react";
// import { useSearchParams } from "react-router-dom";
// import { YOUTUBE_COMMENTS } from "../utils/constants";
// import { YOUTUBE_SUGGESTIONS_VIDEOS } from "../utils/constants";

// const WatchPage = () => {

//     const [searchParams] = useSearchParams();
//     const [comments, setComments] = useState([]);
//     const [suggestions, setSuggestions] = useState([]);
//     const dispatch = useDispatch();
//     const suggestionVideoData = useSelector((store) => store.suggestionId.id);
//     const [displayVideo, setDisplayVideo] = useState(false);
//     const [videoI,setVideoI]=useState([]);
//     const iframeRef = useRef(null);


//     useEffect(() => {
//         dispatch(closeMenu());
//         getComments();
//         getSuggestionVideos();
//     }, [])
//     // console.log(searchParams.get("v"));

//     const getComments = async () => {
//         const data = await fetch(YOUTUBE_COMMENTS + searchParams.get("v"));
//         const json = await data.json();
//         // console.log(json)
//         setComments(json.items);
//     }
//     const getSuggestionVideos = async () => {
//         const data = await fetch(YOUTUBE_SUGGESTIONS_VIDEOS + suggestionVideoData);
//         const json = await data.json();
//         console.log(json);
//         setSuggestions(json.items);
//     }

//     const displayFunction = () => {
//         setDisplayVideo(true);
//         if (iframeRef.current) {
//             iframeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//         }
//         }

//     return (
//         <div className=" flex w-full border-2 border-black gap-5">

//             <div className="flex flex-col w-3/5">

//                 {displayVideo===false && <iframe height="415" src={"https://www.youtube.com/embed/" + searchParams.get("v")}
//                     title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                     referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
//                 {displayVideo && <iframe ref={iframeRef} height="415" src={"https://www.youtube.com/embed/" + videoI}
//                     title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                     referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}


//                 <div className="flex flex-col border-2 border-black gap-1">
//                     {comments.length > 0 && comments.map((comment) => {
//                         const { authorDisplayName, authorProfileImageUrl, textOriginal } = comment?.snippet?.topLevelComment?.snippet || {};
//                         return (
//                             <div key={comment.id} className="flex gap-2">
//                                 <img className="h-10 w-10 rounded-full" src={authorProfileImageUrl} alt="user-profile" />
//                                 <div>
//                                     <p className="font-bold">{authorDisplayName}</p>
//                                     <p>{textOriginal}</p>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>

//             </div>
//             <div className="w-2/5 cursor-pointer">
//                 {suggestions.map((data) => {
//                     const { snippet,id } = data;
//                     const {videoId}=id;
//                     const { thumbnails, title, publishTime, channelTitle } = snippet;
//                     return (<div onClick={()=>{displayFunction(); setVideoI(videoId)}}>
//                         <img className="w-full h-1/5" src={thumbnails.medium.url} alt="thumbnail" />
//                         <p>{title}</p>
//                         <p>{publishTime}</p>
//                         <p>{channelTitle}</p>
//                     </div>)
//                 })}
//             </div>
//         </div>
//     );
// }
// export default WatchPage;


import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/MenuSlice";
import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_COMMENTS } from "../utils/constants";
import { YOUTUBE_SUGGESTIONS_VIDEOS } from "../utils/constants";
import { addComment } from "../utils/CommentsSlice";

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

    const addingComment = useSelector((store) => store.comment.csection);
    console.log(addingComment);
    useEffect(() => {
        dispatch(closeMenu());
        // getComments();
        // getSuggestionVideos();
    }, [])

    // const getComments = async () => {
    //     const data = await fetch(YOUTUBE_COMMENTS + searchParams.get("v"));
    //     const json = await data.json();
    //     setComments(json.items);
    // }
    // const getSuggestionVideos = async () => {
    //     const data = await fetch(YOUTUBE_SUGGESTIONS_VIDEOS + suggestionVideoData);
    //     const json = await data.json();
    //     console.log(json);
    //     setSuggestions(json.items);
    // }

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
        if (commentSection.current) {
            commentSection.current.scrollIntoView({ behavior: "smooth", flex: "end" });
        }

    }

    return (
        <div className="flex w-full h-full bg-black text-[14px] sm:text-[16px] text-white gap-5 sm:p-8 justify-center flex-wrap sm:flex-nowrap" >

            <div className="flex flex-col w-full sm:w-3/5">
                <div className="aspect-w-16 aspect-h-9 w-full">
                    {displayVideo === false && <iframe src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" className="rounded-lg w-full" allowFullScreen></iframe>}
                    {displayVideo && <iframe ref={iframeRef} height="415" src={"https://www.youtube.com/embed/" + videoI}
                        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" className="rounded-lg w-full" allowFullScreen></iframe>}
                </div>
                <div className="flex gap-5 mt-[2%] p-2">
                    <button className={`border-white w-26  border rounded-[50%/100%] px-4 py-2 cursor-pointer ${subscribeValue === false ? 'bg-white text-black' : ''} cursor-pointer`} onClick={() => subscribeValueChange()}>{subscribeValue === true ? 'Subscribe' : 'Subscribed'}</button>
                    <button className={`border-white w-26 border rounded-[50%/100%] px-4 py-2 cursor-pointer ${likeValue === false ? 'bg-white text-black' : ''}`} onClick={() => likeValueChange()}>{likeValue === true ? 'Like' : 'Liked'}</button>
                    <button className={`border-white w-26 border rounded-[50%/100%] px-4 py-2 cursor-pointer ${dislikedValue === false ? 'bg-white text-black' : ''}`} onClick={() => dislikedValueChange()}>{dislikedValue === true ? 'Dislike' : 'Disliked'}</button>
                </div>

                <div ref={commentSection} className="flex flex-col border-2 p-2 border-black gap-1 mt-2">
                    <p className="font-bold">Comments</p>
                    <form className=" flex gap-1 mb-4 mt-4" onSubmit={
                        (e)=>{
                            e.preventDefault();
                            dispatch(addComment(commentValue));
                            setCommentValue("");
                            setInsertComment(true);
                            if (commentSection.current) {
                                commentSection.current.scrollIntoView({ behavior: "smooth", flex: "end" });
                            }
                        }
                    }>
                        <input type="text" value={commentValue} placeholder="Add a comment" onChange={(e) => { setCommentValue(e.target.value) }} className="bg-black text-white border-b border-white focus:outline-none focus:border-b focus:border-white w-full" />
                        <img className="h-5 w-5 cursor-pointer" src="https://img.icons8.com/metro/26/ffffff/sent.png" onClick={() => commentFunction(commentValue)} alt="sent" />
                    </form>
                    <div className="flex gap-2">
                        <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/windows/32/ffffff/user-male-circle.png" alt="user-profile" />
                        <div>
                            <p className="font-bold">Janahvi shah</p>
                            <p>In this serial only 3 sensible people are there. Rest all are senseless and selfish. Manisha ji and abhira bonding is so beautiful. I love the way how madhav takes her side and the way manish supports abhira by keeping ruhi aside
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/windows/32/ffffff/user-male-circle.png" alt="user-profile" />
                        <div>
                            <p className="font-bold">Janahvi shah</p>
                            <p>In this serial only 3 sensible people are there. Rest all are senseless and selfish. Manisha ji and abhira bonding is so beautiful. I love the way how madhav takes her side and the way manish supports abhira by keeping ruhi aside
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/windows/32/ffffff/user-male-circle.png" alt="user-profile" />
                        <div>
                            <p className="font-bold">Janahvi shah</p>
                            <p>❤❤❤ https://youtube.com/shorts/nLC9tNH0awo?si=O8Sdvp3KwBy58eNb</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/windows/32/ffffff/user-male-circle.png" alt="user-profile" />
                        <div>
                            <p className="font-bold">Janahvi shah</p>
                            <p>In this serial only 3 sensible people are there. Rest all are senseless and selfish. Manisha ji and abhira bonding is so beautiful. I love the way how madhav takes her side and the way manish supports abhira by keeping ruhi aside
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/windows/32/ffffff/user-male-circle.png" alt="user-profile" />
                        <div>
                            <p className="font-bold">Janahvi shah</p>
                            <p>❤❤❤ https://youtube.com/shorts/nLC9tNH0awo?si=O8Sdvp3KwBy58eNb</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/windows/32/ffffff/user-male-circle.png" alt="user-profile" />
                        <div>
                            <p className="font-bold">Janahvi shah</p>
                            <p>Kkehk</p>
                        </div>
                    </div>
                    {addingComment.map((comment,index) => 
                        insertComment && <div className="flex gap-2" key={index}>
                            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/windows/32/ffffff/user-male-circle.png" alt="user-profile" />
                            <div>
                                <p className="font-bold">@Username</p>
                                <p>{comment}</p>
                            </div>
                        </div>
                    )}
                </div>

            </div>
            <div className="flex h-full flex-col w-full sm:w-2/5 cursor-pointer sm:p-0 p-2 gap-5 sm:gap-3">
                <div onClick={() => { displayFunction(); }} className="p-2 rounded-lg bg-[#1f1f1f]">
                    <img className="w-full h-3/4 rounded-lg" src="https://i.ytimg.com/vi/C6XhHV4wRFs/mqdefault.jpg" alt="thumbnail" />
                    <p className="font-bold">Yeh Rishta Kya Kehlata Promo 28th May 2024</p>
                    <p className="text-slate-300">2024-05-28T02:46:55Z</p>
                    <p className="text-slate-300">India Forums Hindi</p>
                </div>
                <div onClick={() => { displayFunction(); }} className="p-2 rounded-lg bg-[#1f1f1f]">
                    <img className="w-full h-3/4 rounded-lg" src="https://i.ytimg.com/vi/C6XhHV4wRFs/mqdefault.jpg" alt="thumbnail" />
                    <p className="font-bold">Yeh Rishta Kya Kehlata Promo 28th May 2024</p>
                    <p className="text-slate-300">2024-05-28T02:46:55Z</p>
                    <p className="text-slate-300">India Forums Hindi</p>
                </div>
                <div onClick={() => { displayFunction() }} className="p-2 rounded-lg bg-[#1f1f1f]">
                    <img className="w-full h-3/4 rounded-lg" src="https://i.ytimg.com/vi/C6XhHV4wRFs/mqdefault.jpg" alt="thumbnail" />
                    <p className="font-bold">Yeh Rishta Kya Kehlata Promo 28th May 2024</p>
                    <p className="text-slate-300">2024-05-28T02:46:55Z</p>
                    <p className="text-slate-300">India Forums Hindi</p>
                </div>
                <div onClick={() => { displayFunction(); }} className="p-2 rounded-lg bg-[#1f1f1f]">
                    <img className="w-full h-3/4 rounded-lg" src="https://i.ytimg.com/vi/C6XhHV4wRFs/mqdefault.jpg" alt="thumbnail" />
                    <p className="font-bold">Yeh Rishta Kya Kehlata Promo 28th May 2024</p>
                    <p className="text-slate-300">2024-05-28T02:46:55Z</p>
                    <p className="text-slate-300">India Forums Hindi</p>
                </div>
                <div onClick={() => { displayFunction(); }} className="p-2 rounded-lg bg-[#1f1f1f]">
                    <img className="w-full h-3/4 rounded-lg" src="https://i.ytimg.com/vi/C6XhHV4wRFs/mqdefault.jpg" alt="thumbnail" />
                    <p className="font-bold">Yeh Rishta Kya Kehlata Promo 28th May 2024</p>
                    <p className="text-slate-300">2024-05-28T02:46:55Z</p>
                    <p className="text-slate-300">India Forums Hindi</p>
                </div>
                <div onClick={() => { displayFunction(); }} className="p-2 rounded-lg bg-[#1f1f1f]">
                    <img className="w-full h-3/4 rounded-lg" src="https://i.ytimg.com/vi/C6XhHV4wRFs/mqdefault.jpg" alt="thumbnail" />
                    <p className="font-bold">Yeh Rishta Kya Kehlata Promo 28th May 2024</p>
                    <p className="text-slate-300">2024-05-28T02:46:55Z</p>
                    <p className="text-slate-300">India Forums Hindi</p>
                </div>
            </div>


        </div>
    );
}
export default WatchPage;

