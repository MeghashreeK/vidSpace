import React from 'react'

const MainVideoCard = ({ videoInfo }) => {
    const { snippet} = videoInfo;
    const { thumbnails, title, channelTitle } = snippet;

    return (
        <div className="h-full rounded-lg bg-[#1f1f1f]">
            <div className="flex flex-col h-full">
                <img
                    alt="thumbnail"
                    src={thumbnails.high.url}
                    className="w-full h-48 object-cover rounded-lg"
                />
                <div className="p-4 flex flex-col justify-between h-full">
                    <ul>
                        <li className="font-bold truncate-2-lines text-white">{title}</li>
                        <li className="text-slate-400">{channelTitle}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default MainVideoCard