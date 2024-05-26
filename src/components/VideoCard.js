const VideoCard = ({ videoInfo }) => {
    const { snippet, statistics } = videoInfo;
    const { thumbnails, channelTitle, title } = snippet;
    const { viewCount } = statistics;

    const formatViewCount = (count) => {
        if (count >= 1000000) {
            const millionCount = (count / 1000000).toFixed(1);
            return millionCount.endsWith('.0') ? millionCount.slice(0, -2) + 'M' : millionCount + 'M';
        } else if (count >= 1000) {
            return (count / 1000).toFixed(0) + 'K';
        } else {
            return count;
        }
    };
    const formattedViewCount = formatViewCount(viewCount);


    return (
        <div className="h-full">
            <div className="flex flex-col h-full">
                <img
                    alt="thumbnail"
                    src={thumbnails.standard.url}
                    className="w-full h-48 object-cover rounded-lg"
                />
                <div className="p-4 flex flex-col justify-between h-full">
                    <ul>
                        <li className="font-bold truncate-2-lines text-white">{title}</li>
                        <li className="text-slate-400">{channelTitle}</li>
                        <li className="text-slate-400">{formattedViewCount} views</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default VideoCard;


