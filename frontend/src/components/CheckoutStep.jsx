import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CheckoutStep = ({step1, step2, step3, step4}) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <Link to="/login">
            Sign In
          </Link>
        ) : <Nav.Link disabled>Sign In</Nav.Link>}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <Link to="/login/shipping">
            Shipping
          </Link>
        ) : <Nav.Link disabled>Shipping</Nav.Link>}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <Link to="/payment">
            Payment
          </Link>
        ) : <Nav.Linkink disabled>Payment</Nav.Linkink>}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <Link to="/placeorder">
            Place Order
          </Link>
        ) : <Nav.Link disabled>Place Order</Nav.Link>}
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutStep
