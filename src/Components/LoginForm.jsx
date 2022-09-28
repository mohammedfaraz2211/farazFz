import { useState } from "react"
import { UpdateInputValue } from '../Utils/Genral'
import { LOCAL_STORAGE_USER_KEY } from '../constant'
import { Link, useNavigate } from "react-router-dom"
import { EmailValidate, PassWordvalidate } from '../Utils/Validation'
import { Button, Form } from "react-bootstrap"

import '../Style.css'

export default function LoginForm(Props) {
  const { setdata } = Props
  const [Email, UpdateEmail] = useState("")
  const [Password, UpdatePassword] = useState("")
  const [EmailError, setEmailError] = useState(null)
  const history = useNavigate()

  function LoginData(e) {
    e.preventDefault();
    const ValidationResultForLloginEmail = EmailValidate(Email)
    const ValidationResultForLloginPassword = PassWordvalidate(Password)

    if (ValidationResultForLloginEmail.result === false) {
      setEmailError(ValidationResultForLloginEmail.massage)
      return;
    } else if (ValidationResultForLloginPassword.result === false) {
      setEmailError(ValidationResultForLloginPassword.massage)
      return;
    }
    const localStorageGetData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY))
    const Result = localStorageGetData.find((data) => data.Email === Email && data.Password === Password)

    if (Result) {
      setdata(Result)
      console.log("Login Successfull!")
      localStorage.setItem("loggInUser", JSON.stringify(Result))
      history('/Home')
    }
  }

  return (
    <div >
      <Form className="main_signup">
        <h1 className="title">Login</h1>
        <p className="Message_show">{EmailError}</p>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="First Name" className="inpute_element" value={Email} onChange={(e) => {
            UpdateInputValue(e, UpdateEmail)
          }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" className="inpute_element" value={Password} onChange={(e) => {
            UpdateInputValue(e, UpdatePassword)
          }} />
        </Form.Group>
        <Button variant="primary" type="submit" className="Style_NavBar" onClick={LoginData}>
          Submit
        </Button>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <label>Create Account </label>
          <Link to="/SignUp">SignUp!</Link>
        </Form.Group>
      </Form>
    </div>
  )
}