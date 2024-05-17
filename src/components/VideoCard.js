const VideoCard = ({ videoInfo }) => {
    console.log(videoInfo);
    const { snippet, statistics } = videoInfo;
    const { thumbnails, channelTitle, title } = snippet;
    const { viewCount } = statistics;

    return (
        <div className="border-2 border-black">
         
            <img className="w-full" alt="thumbnail" src={thumbnails.medium.url} />
            <ul>
                <li>{viewCount}views</li>
                <li>{title}</li>
                <li>{channelTitle}</li>
            </ul>
          
        </div>
    //     <div className="border-2 border-black w-full p-4 h-full rounded-lg shadow-lg">
    //     {thumbnails && thumbnails.medium && (
    //         <img alt="thumbnail" src={thumbnails.medium.url} className="w-full h-auto rounded" />
    //     )}
    //     <ul className="mt-2">
    //         <li className="font-bold">{title}</li>
    //         <li className="text-gray-600">{channelTitle}</li>
    //         <li className="text-gray-600">{viewCount} views</li>
    //     </ul>
    // </div>
    );
}
export default VideoCard;
