import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/MenuSlice";
import { useEffect } from "react";

const WatchPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(closeMenu());
    }, [])

    return (
        <div>WatchPage</div>
    );
}
export default WatchPage;