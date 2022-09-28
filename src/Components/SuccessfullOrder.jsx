import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const SuccessfullOrder = () => {
  const [addressinfo, setAddressInfo] = useState([]);

  const selector = useSelector((state) => {
    return {
      addressDetails: state.address,
      selectedcart: state.carts
    }
  })
  const { selectedcart, addressDetails } = selector;

  useEffect(() => {
    setAddressInfo(addressDetails)
  }, []);


  return (
    <div className='SuccessfullOrder'>
      <h1 className="order">Order Product</h1>
      {selectedcart.map((data, index) => {
        return (
          <div className='secondOrderContainer' key={index}>
            <div className='order-img'>
              <img src={data.image} alt="" style={{ width: "150px", height: "100px" }}></img>
            </div>
            <h3>Product Name: {data.title}</h3>
            <h3>Product Price: {data.price}</h3>
            <h3>Product Quantity: {data.quantity}</h3>

          </div>
        )
      })}
      {addressinfo.map((item, index) => {
        return (
          <>
            <div className='OrderContainer' key={index}>
              <h1>Address Details...</h1>
              <h2>User Name: {item.userName}</h2>
              <h2>Address: {item.fullAddress}</h2>
              <h2>Phone: {item.phone}</h2>
              <h2>PinCode: {item.pincode}</h2>
              <h2>City: {item.city}</h2>
              <h2>Country: {item.country}</h2>
            </div>
          </>
        )
      })}
      <div>
        <Button variant="primary" title="Cancel Order">Cancel Order</Button>
      </div>
    </div>
  );
}

export default SuccessfullOrder;
