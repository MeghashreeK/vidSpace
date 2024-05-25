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

    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));

    return (
        <div className="flex w-full gap-5 h-screen flex-row">

            <div className="flex flex-col">

                <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <div>
                    <p>Comments Section Off</p>
                </div>
            </div>
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
                <div className="">
                    <input className="border-2 border-black" type="text" />
                    <button>send</button>
                </div>
            </div>
        </div>
    );
}
export default LiveWatchPage;