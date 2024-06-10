import React from 'react'

const ShimmerVdioCard = () => {

    return (
        <div className="h-full rounded-lg bg-[#D6D8DA]">
            <div className="flex flex-col h-full">
                <div className="relative overflow-hidden bg-[#D6D8DA] rounded-lg" style={{ paddingTop: '56.25%' }}>
                    <div
                        className="absolute top-0 left-0 w-full h-full object-cover bg-[#D6D8DA]"
                    >
                    </div>
                </div>
                <div className="p-4 flex flex-col justify-between h-full bg-[#D6D8DA]">
                    <ul>
                        <li className="bg-[#D6D8DA]"></li>
                        <li className="bg-[#D6D8DA]"></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default ShimmerVdioCard;