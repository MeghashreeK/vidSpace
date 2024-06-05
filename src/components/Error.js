import React from 'react';
import space from "../images/space.jpg";
const Error = () => {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center px-5 p-4 bg-black">
        <div className='flex w-full h-[10%] justify-center items-center rounded-lg bg-black border-2 border-slate-400'>
        <p className='flex text-white font-bold'>Our apologies❗Due to exceeding our daily API quota, data retrieval is currently unavailable. Service will resume tomorrow at 1 PM 🕒.</p>
        </div>
        </div>
  )
}

export default Error;

