import ListGroup from 'react-bootstrap/ListGroup';
import '../CSS/BestList.css';

function DefaultExample({ title, text1, text2, text3, like1, like2, like3}) {
  return (
    <div className='box'>{title}
    <ListGroup className="list">
      <ListGroup.Item style={{
      backgroundColor: "#F9EDDE",
    }}>{text1}
    <div className='conn'>좋아요 {like1}개</div></ListGroup.Item>
      <ListGroup.Item style={{
      backgroundColor: "#F9EDDE",
    }}>{text2}
    <div className='conn'>좋아요 {like2}개</div></ListGroup.Item>
      <ListGroup.Item style={{
      backgroundColor: "#F9EDDE",
    }}>{text3}
    <div className='conn'>좋아요 {like3}개</div></ListGroup.Item>
    </ListGroup>
    </div>
  );
}

export default DefaultExample;