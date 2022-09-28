import '../Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { MdOutlineAddShoppingCart } from 'react-icons/md'
import {BiLogOut} from "react-icons/bi"

import { Link, useNavigate } from 'react-router-dom'
import { LOCAL_STORAGE_LOCKED_IN_KEY } from '../constant';
import { useDispatch } from 'react-redux';
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
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container >
          <Navbar.Brand href="Home" >
            {props.isloggedin ? <Link className="Style_NavBar" to='./Home'>Fz-Mart</Link> : <h1>Fz-Mart</h1>}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to='/login'>{props.isloggedin ? "" : <Button className="Style_NavBar" variant="outline-info">Login</Button>}</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/SignUp'>{props.isloggedin ? "" : <Button className="Style_NavBar" variant="outline-info">SignUp</Button>}</Link>
              </Nav.Link>
              <Nav.Link href="#features" style={{ width: "300px" }}>
                {props.isloggedin ? <Form.Control
                  value={filterSearch}
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={handelsearch}
                /> : ""}
              </Nav.Link>
              <Nav.Link href="#pricing">
                {props.isloggedin ? <Button variant="outline-info" className="Style_NavBar" onClick={handelclick}>Search</Button> : ""}
              </Nav.Link>
              <Nav.Link >
                <Link to='/NewAddproducts' >{props.isloggedin ? <Button variant="primary" className="Style_NavBar">Add New Product</Button> : ""}</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <Link to='/Home' className="Style_NavBar">{props.isloggedin ? props.data.Fname : ""}</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/AddToCard' className="Style_NavBar">{props.isloggedin ? <MdOutlineAddShoppingCart>Add To Cart</MdOutlineAddShoppingCart> : ""}</Link>
              </Nav.Link>
              <Nav.Link eventKey={2} href="login">
                <div onClick={LogOutUser}>{props.isloggedin ? <Button variant="danger" className="Style_NavBar"><BiLogOut style={{height:"20px",width : "30px"}}></BiLogOut></Button> : ""}</div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}