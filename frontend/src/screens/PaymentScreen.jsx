import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps';
import FormContainer from '../components/FormContainer';

const PaymentScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const navigate = useNavigate();

  if (!shippingAddress) {
    navigate.push('/shipping');
  }

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/placeorder');
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>BILLING DETAIL</h1>
      <Form onSubmit={submitHandler}>
        <Row>
          <Col md={12}>
            <span>
                <i className='fab fa-cc-visa font mx-2'></i>
                <i className='fab fa-cc-mastercard mx-2'></i>
                <i className="fab fa-cc-paypal mx-2"></i>
            </span>
          </Col>
          <Col md={12}>
            <Form.Group controlId='cardNumber'>
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter card number'
                required
              />
            </Form.Group>
          </Col>

          <Col md={12}>
            <Form.Group controlId='cardHolderName'>
              <Form.Label>Card Holder Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter card holder name'
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId='expiryDate'>
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter expiry date'
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId='cvc'>
              <Form.Label>CVC</Form.Label>
              <Form.Control type='number' placeholder='Enter CVC' required />
            </Form.Group>
          </Col>
          <Col md={12}>
            <Button type='submit' variant='primary'>
              Continue
            </Button>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
