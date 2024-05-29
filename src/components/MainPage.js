import React, { useEffect } from 'react';
import { MAIN_PAGE_API } from '../utils/constants';


const MainPage = () => {
    useEffect(()=>{getMainPageData();},[]);

    const getMainPageData=async()=>{
        const data=await fetch(MAIN_PAGE_API)
    }
  return (
    <div>

    </div>
  )
}

export default MainPage