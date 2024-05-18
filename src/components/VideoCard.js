const VideoCard = ({ videoInfo }) => {
    console.log(videoInfo);
    const { snippet, statistics } = videoInfo;
    const { thumbnails, channelTitle, title } = snippet;
    const { viewCount } = statistics;

    return (
        <div className="border-2 border-black">
         
            <img  className="w-full" alt="thumbnail" src={thumbnails.medium.url} />
            <ul>
                <li className="font-bold">{title}</li>
                <li className="text-slate-400">{channelTitle}</li>
                <li className="text-slate-400">{viewCount}views</li>
            </ul>   
        </div>
    );
}
export default VideoCard;
