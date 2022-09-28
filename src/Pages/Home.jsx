import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import { AiTwotoneStar } from 'react-icons/ai'

import '../Style.css'
import Button from 'react-bootstrap/Button';
import { Carousel } from 'react-bootstrap';

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

  const handelAddToCart = (item) => {
    dispatch({
      type: "AddToCart",
      payload: {
        product: item
      }
    })
  }

  return (
    <div className='main_card_components'>
      <div>
        <Carousel className='main-Carousel'>
          <Carousel.Item interval={1500}>
            <img
              className='Carousel'
              src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/aa1677186f1bab31.jpg?q=50"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className='Carousel'
              src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/b59be45f9244bab8.jpg?q=50"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className='Carousel'
              src="https://trak.in/wp-content/uploads/2018/07/Flipkart-Big-Shopping-Days-.jpg"
              alt="Third slide"
            />
          </Carousel.Item >
          <Carousel.Item interval={1500}>
            <img
              className='Carousel'
              src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/1408e7a0d97cd036.jpg?q=50"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className='Carousel'
              src="https://rukminim1.flixcart.com/flap/1688/280/image/32598b2c6b817bde.jpg?q=50"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      {filteredProducts?.length === 0 ? (<h2 style={{ color: "red", textAlign: 'center' }}>no products available</h2>) : (filteredProducts?.map((item, index) => {
        return (
          <div key={item.id} className='productCard'>
            <div className='img-div'>
              <img src={item.image} alt='product-img' className='productImage'></img>
            </div>
            <div className='Details-div'>
              <h5>{item.title}</h5>
              <h3>${item.price}</h3>
              <h3>{item.rating.count} units sold</h3>
              <h4><AiTwotoneStar></AiTwotoneStar>{(item.rating.rate)}</h4>
            </div>
            <Button variant="primary" onClick={() => handelAddToCart(item)}>Add To Cart</Button>
          </div>
        );
      })
      )}
    </div >
  )
}


