import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react"

// async function Updatehomepageonfetch(updateProducts , seterrormessage){
//   try{
//     const response = await FetchAllProduct();
//     const product = response.data;
//     updateProducts(product)
//     seterrormessage(null)
//   }catch(error){
//     seterrormessage("failed to fetch products from API");
//   }
// }
export default function Home(props) {
  const dispatch = useDispatch()

  // const [filterProduct , setFilterProduct]=useState([])
  // const [result , setresult]=useState([])
  // const {setproductdata} = props;
  // const [products, updateProducts] = useState([])
  // const [errormessage, seterrormessage] = useState(null)
  // setproductdata(products);

  // useEffect(() => {
  // Updatehomepageonfetch(updateProducts , seterrormessage)
  // }, []);

  const Selector = useSelector((state) => {
    return {
      product: state.product,
      searchstoredata: state.filterSearch
    }
  })
  const { product, searchstoredata } = Selector;
  console.log(product)
  
  const [filteredProducts, setFilteredProducst] = useState([])

  useEffect(() => {
    setFilteredProducst(product)
    if (searchstoredata === '') return;
    const filterProducts = filteredProducts.filter((item) => {
      if (item.title.match(searchstoredata)) {
        return true
      }
      return false;
    })
    setFilteredProducst(filterProducts)
  }, [product, searchstoredata])

  // const handeldeatailsproduct = (item) => {
  //   navigate('./productDetails', { state: item })
  // }
  
  const handelAddToCart = (item)=>{
    dispatch({
      type:"AddToCart",
      payload:{
        product: item
      }
    })
  }

  return (
    <div>
      {filteredProducts?.length === 0 ? (<h2 style={{ color: "red", textAlign: 'center' }}>no products available</h2>) : (filteredProducts?.map((item, index) => {
        return (
          <div className="Card_container" key={index}>
            <img src={item?.image} alt=""></img>
            <h3>{item.title}</h3>
            <h4>₹{item.price}  <span className="Discount_Price">{item.discount} off</span></h4>
            <div><span className="Discount_Price">Rate: {item.rating.rate}</span> &nbsp;&nbsp; count: {item.rating.count}</div>
            <button onClick={()=>handelAddToCart(item)}>Add To Cart</button>
          </div>
        );
      })
      )}
    </div>
  )
}