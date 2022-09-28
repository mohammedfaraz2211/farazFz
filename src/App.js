import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DISPATCH_PRODUCT, LOCAL_STORAGE_LOCKED_IN_KEY } from './constant';
import { FetchAllProduct } from './Apis/Product';
import { useDispatch } from 'react-redux';

import './Style.css'
import NavigationBar from './Components/NavigationBar'
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import NewAddproducts from './Components/NewAddproducts';
import AddToCard from './Components/AddToCard';
import SecondNavBar from './Components/SecondNavBar';
import AddressPage from './Components/AddressPage';
import SuccessfullOrder from './Components/SuccessfullOrder';


function App() {
  const [isloggedin, setloggedin] = useState(false)
  const [data, setdata] = useState({})
  const [productdata, setproductdata] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setloggedin(true)
    } else {
      setloggedin(false)
    }
  }, [data])

  useEffect(() => {
    const getdata = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LOCKED_IN_KEY))
    if (getdata) {
      setdata(getdata)
      setloggedin(true)
    }
  }, []
  )
  useEffect(() => {
    const result = FetchAllProduct();
    result.then((res) => {
      const products = res.data;
      dispatch({
        type: DISPATCH_PRODUCT,
        payload: { products }
      })
    })
  }, [dispatch])

  return (
    <Router>
      <NavigationBar data={data} isloggedin={isloggedin} setdata={setdata} productdata={productdata} />
      <SecondNavBar isloggedin={isloggedin} />
      <Routes>
        <Route exact path='/Home' element={<Home />}></Route>
        <Route exactpath='/Home' element={<Home setproductdata={setproductdata} />}></Route>
        <Route exact path='/Login' element={<Login setdata={setdata} />}></Route>
        <Route exact path='/SignUp' element={<SignUp />}></Route>
        <Route exact path='/NewAddproducts' element={<NewAddproducts />}></Route>
        <Route exact path='/AddToCard' element={<AddToCard />}></Route>
        <Route exact path='/AddressPage' element={<AddressPage />}></Route>
        <Route exact path='/SuccessfullOrder' element={<SuccessfullOrder />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
