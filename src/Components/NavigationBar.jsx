import '../Style.css'
// import NewAddproducts from '../Components/NewAddproducts';
// import AddToCard from '../Components/AddToCard'

import { Link, useNavigate } from 'react-router-dom'
import { LOCAL_STORAGE_LOCKED_IN_KEY } from '../constant';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export default function NavigationBar(props) {
  const [filterSearch, setFilterSearch] = useState("");
  const { setdata } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function LogOutUser() {
    localStorage.setItem(LOCAL_STORAGE_LOCKED_IN_KEY, JSON.stringify({}));
    setdata({})
    navigate('./Login')
  }

  const handelsearch = (e) => {
    const data = e.target.value;
    setFilterSearch(data);
  }

  const handelclick = (e) => {
    e.preventDefault()
    dispatch({
      type: "filteronclick",
      payload: { filterSearch }
    })
  }

  return (
    <div className="Navigation_bar">
      <div className='Navigation_bar1'>
        {props.isloggedin ? <Link to='./Home'><h2>Fz-Mart</h2></Link> : <h2>Fz-Mart</h2> }
      </div>
      <li className='Navigation_li'>
        {props.isloggedin ? <input type="search" value={filterSearch} placeholder='Search Product' className='search_input' onChange={handelsearch}></input> : ""}
      </li>
      <li className='Navigation_li'>
        {props.isloggedin ? <button className='search-btn' onClick={handelclick}>Search</button> : ""}
      </li>
      <li className='navigation_rightsid'>
        <Link to='/login'><h2>{props.isloggedin ? "" : "Login"}</h2></Link>
      </li>
      <li className='navigation_rightsid'>
        <Link to='/SignUp'><h2>{props.isloggedin ? "" : "SignUp"}</h2></Link>
      </li>
      <li className='navigation_rightsid'>
        <Link to='/use.Email'><h2>{props.isloggedin ? props.data.Fname : ""}</h2></Link>
      </li>
      <li className='navigation_rightsid'>
        <Link to='/NewAddproducts'><h2>{props.isloggedin ? "NewAddproducts" : ""}</h2></Link>
      </li>
      <li className='navigation_rightsid'>
        <div onClick={LogOutUser}><h2>{props.isloggedin ? "LogOut" : ""}</h2></div>
      </li>
      <li className='navigation_rightsid'>
        <Link to='/AddToCard'>{props.isloggedin ? <h2>AddToCart</h2> : ""}</Link>
      </li>
    </div>
  )
}