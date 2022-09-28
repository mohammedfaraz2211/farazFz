import React from 'react';

import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { UpdateInputValue } from '../Utils/Genral';

const NewAddproducts = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")
  const [rate, setRate] = useState("")
  const [title, setTitle] = useState("")

  const object = {
    category,
    id,
    image,
    price,
    title,
    rate,
  }
  const handelAddNewProduct = (e) => {
    e.preventDefault();
    dispatch({
      type: "add_Product",
      payload: { object }
    })
    console.log(category, id, image, price, title, rate)
  }

  return (
    <>
      <Form className="main_signup">
        <h1 className="title">ADD NEW PRODUCT</h1>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" placeholder="Category" className="inpute_element" value={category} onChange={(e) => {
            UpdateInputValue(e, setCategory)
          }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Id</Form.Label>
          <Form.Control type="number" placeholder="Insert Id" className="inpute_element" value={id} onChange={(e) => {
            UpdateInputValue(e, setId)
          }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" placeholder="Image URL" className="inpute_element" value={image} onChange={(e) => {
            UpdateInputValue(e, setImage)
          }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Insert price" className="inpute_element" value={price} onChange={(e) => {
            UpdateInputValue(e, setPrice)
          }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Rate</Form.Label>
          <Form.Control type="number" placeholder="Insert Rate" className="inpute_element" value={rate} onChange={(e) => {
            UpdateInputValue(e, setRate)
          }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Insert Title" className="inpute_element" value={title} onChange={(e) => {
            UpdateInputValue(e, setTitle)
          }} />
        </Form.Group>
        <Button variant="primary" type="submit" className="Style_NavBar" onClick={(e) => handelAddNewProduct(e)}>
          Add Products
        </Button>
      </Form>
    </>
  );
}

export default NewAddproducts;
