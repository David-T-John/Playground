import React from 'react';
import './index.css';
import Header from '../Header';
import Loading from '../Loading';
const Home = () => {
    return (
        <div className="page-container">
            <Header />
            <Loading />
        </div>
    )
}
export default Home;