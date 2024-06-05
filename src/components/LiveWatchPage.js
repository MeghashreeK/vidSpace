import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/MenuSlice";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { addMessage } from "../utils/LiveChatSlice";
import { generateRandomNames } from "../utils/helper";
import { generateRandomStrings } from "../utils/helper";
import { generateRandomImage } from "../utils/helper";

const LiveWatchPage = () => {

    const dispatch = useDispatch();
    const liveMessage = useSelector((store) => store.chat.message);
    // const [searchParams] = useSearchParams();
    const [newMessage,setNewMessage]=useState([]);

    useEffect(() => {
        dispatch(closeMenu());

        const i = setInterval(() => {
            dispatch(addMessage({
                name: generateRandomNames(),
                message: generateRandomStrings(),
                image: generateRandomImage()
            }))
        }, 1000)
        return () => clearInterval(i);
    }, []);

  


    return (
        <div className="flex w-full gap-5 h-screen flex-row">
            <div className="flex flex-col w-full">
                <div className="flex border-2 border-black w-2/3 flex-col-reverse overflow-y-scroll h-1/2 gap-3 p-2">
                    {liveMessage.map((c) => <div className="flex items-center gap-1">
                        <img className="h-8 w-8 rounded-full" width="24" height="24" src={c.image} alt="user-male-circle" />
                        <div className="flex gap-2">
                            <p className="font-bold">{c.name}</p>
                            <p>{c.message}</p>
                        </div>
                    </div>)}
                </div>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    dispatch(addMessage({
                        name:"@user",
                        message: newMessage,
                        image:"https://img.icons8.com/material-rounded/24/000000/user-male-circle.png"
                    }))
                    setNewMessage("");                  
                    }}>
                    <input className="border-2 border-black" type="text" value={newMessage} onChange={(e) =>setNewMessage(e.target.value)}/>
                    <button className="border border-black">send</button>
                </form>
            </div>
        </div>
    );
}
export default LiveWatchPage;