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

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    const [comments, setComments] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const dispatch = useDispatch();
    const suggestionVideoData = useSelector((store) => store.suggestionId.id);
    const [displayVideo, setDisplayVideo] = useState(false);
    const [videoI, setVideoI] = useState([]);
    const iframeRef = useRef(null);


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

    return (
        <div className=" flex w-full h-full bg-black text-white gap-5 sm:p-8 justify-center flex-wrap sm:flex-nowrap border-2 border-red-600" >

            <div className="flex flex-col w-full sm:w-3/5">
                <div className="aspect-w-16 aspect-h-9 w-full">
                    {displayVideo === false && <iframe src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" className="rounded-lg w-full" allowFullScreen></iframe>}
                    {displayVideo && <iframe ref={iframeRef} height="415" src={"https://www.youtube.com/embed/" + videoI}
                        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" className="rounded-lg w-full" allowFullScreen></iframe>}
                </div>
                <div className="flex gap-5 mt-[2%]">
                        <button className="border-white w-24 border rounded-[50%/100%] px-4 py-2">Subscribe</button>
                        <button className="border-white w-24 border rounded-[50%/100%] px-4 py-2">Like</button>
                        <button className="border-white w-24 border rounded-[50%/100%] px-4 py-2">DisLike</button>
                </div>

                <div className="flex flex-col border-2 p-2 border-black gap-1">

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


                </div>

            </div>
            <div className="flex  flex-col w-full sm:w-2/5 cursor-pointer p-2 gap-5 sm:gap-3">
                <div onClick={() => { displayFunction(); }} className="border-2 border-black p-2 rounded-lg">
                    <img className="w-full h-3/4 rounded-lg" src="https://i.ytimg.com/vi/C6XhHV4wRFs/mqdefault.jpg" alt="thumbnail" />
                    <p>Yeh Rishta Kya Kehlata Promo 28th May 2024</p>
                    <p>2024-05-28T02:46:55Z</p>
                    <p>India Forums Hindi</p>
                </div>
                <div onClick={() => { displayFunction();}} className="border-2 border-black p-2 rounded-lg">
                    <img className="w-full h-3/4 rounded-lg" src="https://i.ytimg.com/vi/C6XhHV4wRFs/mqdefault.jpg" alt="thumbnail" />
                    <p>Yeh Rishta Kya Kehlata Promo 28th May 2024</p>
                    <p>2024-05-28T02:46:55Z</p>
                    <p>India Forums Hindi</p>
                </div>
                <div onClick={() => { displayFunction()}} className="border-2 border-black p-2 rounded-lg">
                    <img className="w-full h-3/4 rounded-lg" src="https://i.ytimg.com/vi/C6XhHV4wRFs/mqdefault.jpg" alt="thumbnail" />
                    <p>Yeh Rishta Kya Kehlata Promo 28th May 2024</p>
                    <p>2024-05-28T02:46:55Z</p>
                    <p>India Forums Hindi</p>
                </div>
                <div onClick={() => { displayFunction();}} className="border-2 border-black p-2 rounded-lg">
                    <img className="w-full h-3/4 rounded-lg" src="https://i.ytimg.com/vi/C6XhHV4wRFs/mqdefault.jpg" alt="thumbnail" />
                    <p>Yeh Rishta Kya Kehlata Promo 28th May 2024</p>
                    <p>2024-05-28T02:46:55Z</p>
                    <p>India Forums Hindi</p>
                </div>
                <div onClick={() => { displayFunction();}} className="border-2 border-black p-2 rounded-lg">
                    <img className="w-full h-3/4 rounded-lg" src="https://i.ytimg.com/vi/C6XhHV4wRFs/mqdefault.jpg" alt="thumbnail" />
                    <p>Yeh Rishta Kya Kehlata Promo 28th May 2024</p>
                    <p>2024-05-28T02:46:55Z</p>
                    <p>India Forums Hindi</p>
                </div>
                <div onClick={() => { displayFunction();}} className="border-2 border-black p-2 rounded-lg">
                    <img className="w-full h-3/4 rounded-lg" src="https://i.ytimg.com/vi/C6XhHV4wRFs/mqdefault.jpg" alt="thumbnail" />
                    <p>Yeh Rishta Kya Kehlata Promo 28th May 2024</p>
                    <p>2024-05-28T02:46:55Z</p>
                    <p>India Forums Hindi</p>
                </div>
            </div>


        </div>
    );
}
export default WatchPage;

