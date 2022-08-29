import { useSelector , useDispatch } from 'react-redux'
import { useEffect, useState } from "react"

export default function AddToCard(props) {
  const dispatch = useDispatch()
  const [getStorecarts, setgetStorecarts] = useState([])

  const Selector = useSelector((state) => {
    return {
      cart: state.carts
    }
  })
  const { cart } = Selector;
  console.log("......",cart)
 
  useEffect(() => {
    setgetStorecarts(cart)
  }, [cart])

  function updateProductQuantity (id, quantity , getStorecarts){
    const updatedProducts = JSON.parse(JSON.stringify(getStorecarts));
    const indexToUpdate = updatedProducts.findIndex(cartProduct => cartProduct.id === id);
    updatedProducts[indexToUpdate].quantity = quantity > 0 ? quantity : 1;
    return updatedProducts
  }

  return (
    <div>
      {getStorecarts?.length === 0 ? (<h2 style={{ color: "red", textAlign: 'center' }}>No Added products available!</h2>) : (getStorecarts?.map((item, index) => {
        return (
          <div className="AddToCard_container" key={item.id}>
            <img src={item.image} className="AddToCard_img" alt="" />
            <div className='AddToCard_container1'>
              <h3>{item.title}</h3>
              <h4>₹{item.price}  <span className="Discount_Price">{item.discount} off</span></h4>
              {/* <div><span className="Discount_Price">Rate: {item.rating.rate}</span> &nbsp;&nbsp; count: {item.rating.count}
              </div> */}
              <h2>Quantity: {item.quantity}</h2>
              <div><button onClick={()=>{
                const updateProduct = updateProductQuantity(item.id , item.quantity + 1, getStorecarts)
                setgetStorecarts(updateProduct)
                dispatch({
                  type : "UpdateCart",
                  payload :{
                    newCart : updateProduct,
                  }
                })
              }}>+</button></div>

              <div><button onClick={()=>{
                const updateProduct = updateProductQuantity(item.id , item.quantity - 1, getStorecarts)
                setgetStorecarts(updateProduct)
                dispatch({
                  type : "UpdateCart",
                  payload :{
                    newCart : updateProduct,
                  }
                })
              }}>-</button></div>
              <button>Place To Order</button>
            </div>
          </div>
        );
      })
      )}
    </div>
  )
}