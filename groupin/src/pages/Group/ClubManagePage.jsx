import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MemberList from '../components/Group/MemberList';

const ClubManagePage = () => {
    return (
        <>
        <Header />
        <MemberList/>
        <br></br>
        <br></br>
        <Footer />
        </>
    );
};

export default ClubManagePage;