import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/MenuSlice";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const LiveWatchPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    }, []);

    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));

    return (
        <div className="flex w-full gap-5">

            <div className="flex flex-col">

                <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <div>
                        <p>Comments Section Off</p>
                    </div>
            </div>

            <div className="flex flex-col border-2 border-black w-2/5">
               <div className="flex items-center">

               <img className="h-8 w-8" width="24" height="24" src="https://img.icons8.com/material-rounded/24/000000/user-male-circle.png" alt="user-male-circle" />
                <div className="flex gap-2">
                <p>@username</p>
                <p>wow!!So prettyyyyy</p>
                </div>

               </div>
            </div>

        </div>
    );
}
export default LiveWatchPage;