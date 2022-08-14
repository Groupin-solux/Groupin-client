import Table from 'react-bootstrap/Table';
import './Board.css';

function StripedRowExample() {
  return (
    <Table striped>
      <thead>
        <tr>
          <th className='font'>글번호</th>
          <th className='font'>제목</th>
          <th className='font'>작성일</th>
          <th className='font'>댓글수</th>
          <th className='font'>조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='font'>1</td>
          <td className='font'>Mark</td>
          <td className='font'>2022.07.22</td>
          <td className='font'>12</td>
          <td className='font'>999</td>
        </tr>
        <tr>
          <td className='font'>2</td>
          <td className='font'>Jacob</td>
          <td className='font'>2022.07.22</td>
          <td className='font'>22</td>
          <td className='font'>999</td>
        </tr>
        <tr>
          <td className='font'>3</td>
          <td className='font'>Peter</td>
          <td className='font'>2022.07.22</td>
          <td className='font'>13</td>
          <td className='font'>999</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default StripedRowExample;