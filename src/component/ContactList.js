import React, { useState, useEffect } from 'react'; 
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

const ContactList = () => {
  const { contactList, keyword } = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      let list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword, contactList]);

  return (
    <div>
      <SearchBox />
      <Container>
        <div className="contact-list">
          내 주소록: {filteredList.length}
          {filteredList.map((item, index) => (
            <ContactItem item={item} key={index} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ContactList;
