import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SportsBoardPage from './pages/SportsBoardPage';
import CraftsBoardPage from './pages/CraftsBoardPage';
import CultureBoardPage from './pages/CultureBoardPage';
import GameBoardPage from './pages/GameBoardPage';
import TravelBoardPage from './pages/TravelBoardPage';
import MyPage from './pages/MyPage';
import ReviewBoard from './pages/ReviewBoard';
import ClubManagePage from './pages/ClubManagePage';
import BoardWritePage from './pages/BoardWritePage';
import ReviewBoardWritePage from './pages/ReviewBoardWritePage';
import ViewPage from './pages/ViewPage';
import ReviewPage from './pages/ReviewPage';
import SignUpPage from './pages/SignUpPage';
import SignModifyPage from './pages/SignModifyPage';
import GetTest from './pages/GetTest';
import BoardTest from './pages/components/BoardTest';

class App extends Component {
  render() {
    return (
      <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/auth/signin" element={<LoginPage/>}></Route>
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
        <Route path="/gettest" element={<GetTest/>}></Route>
        <Route path="/posttest" element={<BoardTest/>}></Route>
      </Routes>
      </>
    );
  }
}
           
export default App;