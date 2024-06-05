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
    const [newMessage, setNewMessage] = useState([]);

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


    const handleCommentEvent = () => {
        dispatch(addMessage({
            name: "user",
            message: newMessage,
            image: "https://img.icons8.com/material-rounded/24/808080/user-male-circle.png"
        }))
        setNewMessage("");
    }

    return (
        <div className="flex w-full gap-5 h-screen flex-row text-[14px] sm:text-[16px]">
            <div className="flex flex-col w-full">
                <p className="font-bold">🔴Live Chat</p>
                <div className="flex border border-slate-100 rounded-sm flex-col-reverse overflow-y-scroll h-1/2 gap-3 p-4 mt-1">
                    {liveMessage.map((c) => <div className="flex items-center gap-1">
                        <img className="h-8 w-8 rounded-full" width="24" height="24" src={c.image} alt="user-male-circle" />
                        <div className="flex gap-2">
                            <p className="font-bold">{c.name}</p>
                            <p>{c.message}</p>
                        </div>
                    </div>)}
                </div>
                <form className="flex mt-1 items-center gap-1" onSubmit={(e) => {
                    e.preventDefault();
                    handleCommentEvent();
                }}>
                    <input className="w-full rounded-lg py-0.5 px-2 focus:outline-none text-black" placeholder="Your message..." type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
                    <img className="h-8 w-8 cursor-pointer" src="https://img.icons8.com/metro/26/ffffff/sent.png" alt="sent" onClick={() => {handleCommentEvent();}} />

                </form>
            </div>
        </div>
    );
}
export default LiveWatchPage;