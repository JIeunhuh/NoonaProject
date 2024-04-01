// 5. phone book 만들기  
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import { ContactForm } from './component/ContactForm';
import { ContactList } from './component/ContactList';

// 1. 왼쪽에는 연락처 등록하는 폼, 오른쪽에는 연락처 리스트와 검색창
// 2. 리스트에 유저이름과 전화번호 추가가능
// 3. 리스트 아이템갯수 확인가능
// 4. 사용자가 검색으로 유저 찾기 가능
const App = () => {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>전화번호부</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList /></Col>
        </Row>
      </Container>
    </div>
  )
};
export default App;