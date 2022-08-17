import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Division.css';

function BasicExample({text, list1, list2, list3}) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='di'>
        {text}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" className='drop'>{list1}</Dropdown.Item>
        <Dropdown.Item href="#/action-2" className='drop'>{list2}</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className='drop'>{list3}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;