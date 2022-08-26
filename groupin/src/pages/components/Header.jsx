import React from 'react';
import './CSS/Header.css';
import { Link } from 'react-router-dom';
import Button from './Button';

class Header extends React.Component{
  render(){
    return (
    <>
    <div className='header'>
    <div className="navbar">
        <div className="navbar_logo">
        <Link to = "/"><div className="groupin">Groupin'</div></Link>      
        </div>

        <ul className="navbar_menu">
            <li><Link to = "/sportsboardpage">스포츠</Link></li>
            <li><Link to = "/craftsboardpage">공예/만들기</Link></li>
            <li><Link to = "/cultureboardpage">문화</Link></li>
            <li><Link to = "/gameboardpage">오락</Link></li>
            <li><Link to = "/travelboardpage">여행</Link></li>
            <li><Link to = "/reviewboard">후기게시판</Link></li>
        </ul>
        <div>

                <Link to = "/chatting">
                <img className="navbar_icons1" alt="chatting" src="img/chatting_icon.png" />
                </Link>
                <Link to = "/mypage">
                <img className="navbar_icons2" alt="mypage" src="img/mypage_icon.png" />
                </Link>
                <span><Link to="/login">로그인</Link></span>

                

        </div>
    </div>
    <article>
        <div className="article_menu"></div>
    </article>
    </div>
      </>
    )
  }
}
    
export default Header;