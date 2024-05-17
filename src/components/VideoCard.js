const VideoCard = ({ videoInfo }) => {
    console.log(videoInfo);
    const { snippet, statistics } = videoInfo;
    const { thumbnails, channelTitle, title } = snippet;
    const { viewCount } = statistics;

    return (
        <div className="border w-3/12">
         
            <img alt="thumbnail" src={thumbnails.medium.url} />
            <ul>
                <li>{viewCount}views</li>
                <li>{title}</li>
                <li>{channelTitle}</li>
            </ul>
          
        </div>
    );
}
export default VideoCard;