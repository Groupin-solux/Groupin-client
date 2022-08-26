import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatting from '../components/Chat/Chatting';

const ChattingPage = () => {
    return (
        <>
        <Header />
        <Chatting/>
        <br></br>
        <br></br>
        <Footer />
        </>
    );
};

export default ChattingPage;