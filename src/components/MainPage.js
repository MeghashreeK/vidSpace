import React, { useEffect } from 'react';
import { MAIN_PAGE_API } from '../utils/constants';
import { useSelector } from 'react-redux';


const MainPage = () => {
    useEffect(()=>{getMainPageData();},[]);
    const getVdioId=useSelector((store)=>store.apiId.mainvdioId);

    const getMainPageData=async()=>{
        const data=await fetch(MAIN_PAGE_API+getVdioId);
        const json=await data.json();
        console.log(json);
    }
  return (
    <div>

    </div>
  )
}

export default MainPage