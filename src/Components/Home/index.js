import React, { useState } from 'react';
import './index.css';
import Header from '../Header';
import Loading from '../Loading';
const Home = () => {
    const[isLoading, setIsLoading] = useState(true);
    setTimeout(()=>{
        setIsLoading(false);
    } ,1000);
    
    return isLoading ? (
        <>
        <Header />
        <Loading />
        </>
        ) : (
        <>
        <Header />
        <h1>Content</h1> 
        </>
    )
}
export default Home;