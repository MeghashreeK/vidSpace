import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/MenuSlice";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_COMMENTS } from "../utils/constants";

const WatchPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(closeMenu());
    getComments();
    }, [])
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));

    const [comments,setComments]=useState([]);

const getComments=async()=>{
    const data=await fetch(YOUTUBE_COMMENTS+searchParams.get("v"));
    const json=await data.json();
    // console.log(json.items[2]?.snippet?.topLevelComment?.snippet);
    console.log(json)
    setComments(json.items);
}


    return (
        <div>
            <div className="flex flex-col">
        <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        
        <div className="flex flex-col border-2 border-black gap-1">
        {comments.length>0 && comments.map((comment) => {
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
        </div>
    );
}
export default WatchPage;
