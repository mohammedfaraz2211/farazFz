import React from 'react';

import { useState } from 'react';
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
    // e.preventDefault();
    dispatch({
      type: "add_Product",
      payload: {object}
    })
    console.log(category, id, image, price, title, rate)
  }

  return (
    <div>
      <li>
        <label>Category</label>
        <input type="text" placeholder='Category' value={category} onChange={(e) => {
          UpdateInputValue(e, setCategory)
        }}></input>
      </li>
      <li>
        <label>Id</label>
        <input type="number" placeholder='Insert ID' value={id} onChange={(e) => {
          UpdateInputValue(e, setId)
        }}></input>
      </li>
      <li>
        <label>Image</label>
        <input type="text" placeholder='Insert Img URL' value={image} onChange={(e) => {
          UpdateInputValue(e, setImage)
        }}></input>
      </li>
      <li>
        <label>Price</label>
        <input type="number" placeholder='Insert Price' value={price} onChange={(e) => {
          UpdateInputValue(e, setPrice)
        }}></input>
      </li>
      <li>
        <label>Rating</label>
        <input type="text" placeholder='Give Rating' value={rate} onChange={(e) => {
          UpdateInputValue(e, setRate)
        }}></input>
      </li>
      <li>
        <label>Title</label>
        <input type="text" placeholder='Insert Title' value={title} onChange={(e) => {
          UpdateInputValue(e, setTitle)
        }}></input>
      </li>
      <li>
        <button onClick={(e) => handelAddNewProduct(e)}>Add Products</button>
      </li>
    </div>
  );
}

export default NewAddproducts;
