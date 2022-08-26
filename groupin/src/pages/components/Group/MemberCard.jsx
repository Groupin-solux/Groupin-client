import Card from 'react-bootstrap/Card';



function BorderExample({ nickname, content }) {

  function handleClick(e) {
    e.preventDefault();
    alert("신청이 승인되었습니다.")
  }

  function handleClick2(e) {
    e.preventDefault();
    alert("신청을 거절했습니다.")
  }

  return (
    <>
      <Card id="card" border="light" style={{ width: '18rem', boxShadow: '1px 2px 2px 0px grey',  }}>
        <Card.Header>{nickname}</Card.Header>
        <Card.Body>
          <Card.Text>
            {content}
          </Card.Text>
          <div style={{ float: "right", }}>
            <img onClick={handleClick} src="img/check.png" alt="check"></img>
          <img onClick={handleClick2} src="img/delete.png" alt="delete"></img></div>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default BorderExample;