import Card from 'react-bootstrap/Card';

function BorderExample({ nickname, content }) {
  return (
    <>
      <Card id="card" border="light" style={{ width: '18rem', boxShadow: '1px 2px 2px 0px grey',  }}>
        <Card.Header>{nickname}</Card.Header>
        <Card.Body>
          <Card.Text>
            {content}
          </Card.Text>
          <div style={{ float: "right", }}><img src="img/check.png" alt="check"></img>
          <img src="img/delete.png" alt="delete"></img></div>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default BorderExample;