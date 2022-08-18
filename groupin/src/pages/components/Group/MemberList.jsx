import React from 'react';
import '../CSS/BoardCss.css';
import MemberCard from './MemberCard';
import Button from '../Button';
import { Link } from 'react-router-dom';



const MemberList = () => {
    return (
        <div>
            <div class="board_wrap">
                <div class="board_title">
                    <strong>모집글 제목</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" name="모임 이름" class="field" value="디즈니 플러스 완다비전 달리는 방"></input>
                </div>
                <div class="board_list_wrap">
                    <div class="board_list">
                    </div>
                    <div class="board_title">
                        <br></br>
                        <strong>신청자 목록</strong>
                        <Link to="/chatting">
                            <div class="btn">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button text="모임 생성" />
                            </div></Link>
                    </div>
                    <div class="space">
                        <MemberCard nickname="송편"
                            content="저도 평소에 마블 엄청 좋아하는데 같이 이야기하고 싶어요~" />
                    </div>
                    <div class="space">
                        <MemberCard nickname="정인"
                            content="완다비는 봐야지" />
                    </div>
                    <div class="space">
                        <MemberCard nickname="Holymoly"
                            content="they are real" />
                    </div>
                    <div class="space">
                        <MemberCard nickname="웰컴"
                            content="ㅅㅊ" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberList;