import ListGroup from 'react-bootstrap/ListGroup';
import './ContentList.css';
import Button from './Button';
import Now from './Now';
import React, { useState } from "react";
import { Link } from 'react-router-dom';

function DefaultExample({ title, text1, text2, text3, text4,  }) {
  const [value, setValue] = useState("모집 진행중");
  const changeValue = () => setValue("모집 마감");
  return (
    <div className='box'>{title}
    <ListGroup className="list">
      <ListGroup.Item style={{
      backgroundColor: "#F9EDDE",
    }}><Link to="/clubmanagepage">{text1}</Link>&nbsp;&nbsp;&nbsp;<Button text="마감하기"/>
    <div className="flo">
      <Now text={value} bgcolor={true} changeValue={changeValue} />
      </div></ListGroup.Item>
      <ListGroup.Item style={{
      backgroundColor: "#F9EDDE",
    }}>{text2}</ListGroup.Item>
      <ListGroup.Item style={{
      backgroundColor: "#F9EDDE",
    }}>{text3}</ListGroup.Item>
      <ListGroup.Item style={{
      backgroundColor: "#F9EDDE",
    }}>{text4}</ListGroup.Item>
    </ListGroup>
    </div>
  );
}

export default DefaultExample;