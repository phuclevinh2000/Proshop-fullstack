import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      {/* Make center */}
      <Container> 
        <Row>
          <Col className='text-center py-3'>Copywight &copy; Phuclevinh2000</Col> {/* py-3 means padding y axis*/}
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
