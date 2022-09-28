import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { RiDeleteBin5Fill } from 'react-icons/ri'


export default function AddToCard(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [getStorecarts, setgetStorecarts] = useState([])
  const [total, setTotal] = useState(0)

  const Selector = useSelector((state) => {
    return {
      cart: state.carts
    }
  })
  const { cart } = Selector;

  useEffect(() => {
    setgetStorecarts(cart)
  }, [cart])

  const totalprice = getStorecarts.reduce((result, product) => result + product.price * product.quantity, 0);

  useEffect(() => {
    setTotal(totalprice)
  }, [totalprice])

  function updateProductQuantity(id, quantity, getStorecarts) {
    const updatedProducts = JSON.parse(JSON.stringify(getStorecarts));
    const indexToUpdate = updatedProducts.findIndex(cartProduct => cartProduct.id === id);
    updatedProducts[indexToUpdate].quantity = quantity > 0 ? quantity : 1;
    return updatedProducts
  }
  const handleDeleteItem = (item) => {
    dispatch({
      type: "RemoveProduct",
      payload: {
        selectedItem: item
      }
    })
  }

  const handleOrder = () => {
    navigate('/AddressPage')
  }

  return (
    <>
      <div className='flex'>
        <div className='main'>
          {getStorecarts?.length === 0 ? (<h2 style={{ color: "red", textAlign: 'center' }}>No Added products available!</h2>) : (getStorecarts?.map((item, index) => {
            return (
              <div key={item.id} className="main-min-1">
                <div>
                  <img src={item.image} className="AddToCard_img" alt="" />
                </div>
                <div className='main-min-2'>
                  <h4>{item.title}</h4><br></br>
                  <h4>₹{item.price}  <span className="Discount_Price">{item.discount} off</span></h4><br></br>
                  <h4 className="Discount_Price">Rate: {item.rating.rate}</h4><br></br>
                  <h4>count: {item.rating.count}</h4><br></br>
                  <div className='main-min-3'>
                    <Button className="p-btn" variant="primary" onClick={() => {
                      const updateProduct = updateProductQuantity(item.id, item.quantity + 1, getStorecarts)
                      dispatch({
                        type: "UpdateCart",
                        payload: {
                          newCart: updateProduct,
                        }
                      })
                    }}>+</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <h2>{item.quantity}</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button className="p-btn" variant="primary" onClick={() => {
                      const updateProduct = updateProductQuantity(item.id, item.quantity - 1, getStorecarts)
                      dispatch({
                        type: "UpdateCart",
                        payload: {
                          newCart: updateProduct,
                        }
                      })
                    }}>-</Button>
                  </div>
                </div>
                <div>
                  <Button variant="primary" onClick={() => handleDeleteItem(item)}><RiDeleteBin5Fill style={{width : "20px",height:"25px"}}></RiDeleteBin5Fill></Button>
                </div>
              </div>
            );
          })
          )}
        </div>
        <div className='main2'>
          <div className='Totalprice-container'>
            <h2>Total price<br></br>
            <br></br>{total}</h2><br></br>
            <Button variant="primary" onClick={handleOrder} className="order-btn" >Place To Order</Button>
          </div>
        </div>
      </div>
    </>
  )
}


