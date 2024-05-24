const LivevCard = ({ videoInfo }) => {
    const { snippet} = videoInfo;
    const { thumbnails, channelTitle, title,liveBroadcastContent } = snippet;

    return (
        <div className="border-2 border-black h-full">
        <div className="flex flex-col h-full">
            <img 
                alt="thumbnail" 
                src={thumbnails.medium.url}
                className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-full">
                <ul>
                    <li className="font-bold break-words">{title}</li>
                    <li className="text-slate-400">{channelTitle}</li>
                    <li className="text-slate-400">{liveBroadcastContent}</li>
                </ul>
            </div>  
        </div>
    </div>
    );
}
export default LivevCard;

