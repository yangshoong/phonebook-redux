import React, { useState } from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const SearchBox = () => {
  const [keyword, setKeyword] = useState(""); 
  const dispatch = useDispatch();

  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };

  return (
    <Container>
      <div className="search-box">
        연락처 검색
      </div>
      <div className="search">
        검색
      </div>
      <Form onSubmit={searchByName} className="search-form">
        <Row>
          <Col lg={10}>
            <Form.Control
              type="text"
              placeholder="이름을 입력해주세요"
              onChange={(event) => setKeyword(event.target.value)}
            />
          </Col>
          <Col lg={2}>
            <Button type="submit">찾기</Button>
          </Col>
        </Row>
      </Form>
    </Container>
    
  );
};

export default SearchBox;
