import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/MenuSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(closeMenu());
    }, [])
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"))

    return (
        <div>
            <div className="flex flex-col">
        <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <p>comments</p>
        </div>
        </div>
    );
}
export default WatchPage;