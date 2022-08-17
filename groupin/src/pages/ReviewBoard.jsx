import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BestList from './components/BestList';
import './ReviewBoard.css';
import ReviewBoardList from './components/ReviewBoardList';


const ReviewBoard = () => {
    return (
        <>
        <Header />
        <div className='form'>
            <BestList title="월간 베스트" text1="디즈니 플러스 완다비전 달리는 방" like1="100"
            text2="연남동 카페 투어 모임" like2="150"
            text3="아이스크림이 땡기는 날" like3="300"/><br></br><br></br>
            <BestList title="주간 베스트" text1="디즈니 플러스 완다비전 달리는 방" like1="600"
            text2="연남동 카페 투어 모임" like2="770"
            text3="아이스크림이 땡기는 날" like3="800"/>
        </div>
        <ReviewBoardList title="후기"/>
        <br></br>
        <Footer />
        </>
    );
};

export default ReviewBoard;