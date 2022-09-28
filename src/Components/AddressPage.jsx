import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UpdateInputValue } from '../Utils/Genral';

const AddressPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [lgShow, setLgShow] = useState(false);
  const [userName, setUserName] = useState("")
  const [fullAddress, setFullAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [pincode, setUSerName] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")


  const AddressObject = {
    userName,
    fullAddress,
    phone,
    pincode,
    city,
    country,
  }


  const handelorder = () => {
    dispatch({
      type: "AddressDetails",
      payload: {
        addressDetails: AddressObject
      }
    })
    navigate("/SuccessfullOrder")
  }
  return (
    <>
      <Form className="main_signup">
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="User Name" className="inpute_element" value={userName} onChange={(e) => {
            UpdateInputValue(e, setUserName)
          }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Full Address</Form.Label>
          <Form.Control type="text" placeholder="Full Address" className="inpute_element" value={fullAddress} onChange={(e) => {
            UpdateInputValue(e, setFullAddress)
          }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Phone" className="inpute_element" value={phone} onChange={(e) => {
            UpdateInputValue(e, setPhone)
          }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Pin Code</Form.Label>
          <Form.Control type="text" placeholder="Pincode" className="inpute_element" value={pincode} onChange={(e) => {
            UpdateInputValue(e, setUSerName)
          }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" className="inpute_element" value={city} onChange={(e) => {
            UpdateInputValue(e, setCity)
          }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" placeholder="country" className="inpute_element" value={country} onChange={(e) => {
            UpdateInputValue(e, setCountry)
          }} />
        </Form.Group>

        <Button onClick={() => setLgShow(true)}>Confirm Order</Button>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg" className='Modal'>
              Congratulation Your Order is Successful...!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button variant="primary" type="submit" className="Style_NavBar" onClick={handelorder}>
              Show Order Product
            </Button>
          </Modal.Body>
        </Modal>
      </Form>
    </>
  );
}

export default AddressPage;
