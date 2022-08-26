import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import LoginPage from './pages/User/LoginPage';
import SportsBoardPage from './pages/Board/SportsBoardPage';
import CraftsBoardPage from './pages/Board/CraftsBoardPage';
import CultureBoardPage from './pages/Board/CultureBoardPage';
import GameBoardPage from './pages/Board/GameBoardPage';
import TravelBoardPage from './pages/Board/TravelBoardPage';
import MyPage from './pages/User/MyPage';
import ReviewBoard from './pages/Board/ReviewBoard';
import ClubManagePage from './pages/Group/ClubManagePage';
import BoardWritePage from './pages/Board/BoardWritePage';
import ReviewBoardWritePage from './pages/Board/ReviewBoardWritePage';
import ViewPage from './pages/Board/ViewPage';
import ReviewPage from './pages/Board/ReviewPage';
import SignUpPage from './pages/User/SignUpPage';
import SignModifyPage from './pages/User/SignModifyPage';
import Chatting from './pages/Chat/ChattingPage';


class App extends Component {
  render() {
    return (
      <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/sportsboardpage" element={<SportsBoardPage/>}></Route>
        <Route path="/craftsboardpage" element={<CraftsBoardPage/>}></Route>
        <Route path="/cultureboardpage" element={<CultureBoardPage/>}></Route>
        <Route path="/gameboardpage" element={<GameBoardPage/>}></Route>
        <Route path="/travelboardpage" element={<TravelBoardPage/>}></Route>
        <Route path="/mypage" element={<MyPage/>}></Route>
        <Route path="/reviewboard" element={<ReviewBoard/>}></Route>
        <Route path="/clubmanagepage" element={<ClubManagePage/>}></Route>
        <Route path="/boardwritepage" element={<BoardWritePage/>}></Route>
        <Route path="/reviewboardwritepage" element={<ReviewBoardWritePage/>}></Route>
        <Route path="/viewpage" element={<ViewPage/>}></Route>
        <Route path="/reviewpage" element={<ReviewPage/>}></Route>
        <Route path="/signuppage" element={<SignUpPage/>}></Route>
        <Route path="/signmodifypage" element={<SignModifyPage/>}></Route>
        <Route path="/chatting" element={<Chatting/>}></Route>
      </Routes>
      </>
    );
  }
}
           
export default App;