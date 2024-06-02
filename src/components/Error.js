import React from 'react';
import space from "../images/space.jpg";
const Error = () => {
  return (
    <div className='border-2 border-red-500 h-full justify-center items-center'>
        <div>
        <p className='flex text-white'>Our apologies! Due to exceeding our daily API quota, data retrieval is currently unavailable. Service will resume tomorrow at 1 PM.</p>
        </div>
        </div>
  )
}

export default Error