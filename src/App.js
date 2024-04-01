import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './component/ContactForm';
import './App.css';
import ContactList from './component/ContactList';

//1. 왼쪽에는 연락처 등록하는 폼이, 오른쪽에는 연락처 리스트와 search 창이있다.
//2. 리스트에 유저 이름과 전화번호를 추가할 수 있다.
//3. 리스트에 아이템이 몇개 있는지 보인다.
//4. 사용자가 유저를 이름검색으로 찾을 수 있다.

function App() {
  return (
    <Container>
      <h1 className="title"> 주소록</h1>
      <Container>
        <Row>
          <Col>
          <ContactForm/>
          </Col>
          <Col>
          <ContactList/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
