import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { LOCAL_STORAGE_USER_KEY } from '../constant'
import { UpdateInputValue } from '../Utils/Genral'
import { FnameValidate, LnameValidate, EmailValidate, PassWordvalidate } from '../Utils/Validation'


export function SignUpForm(e) {

  const [Fname, UpdateUserFname] = useState("")
  const [Lname, UpdateUserLname] = useState("")
  const [Email, UpdateUserEmail] = useState("")
  const [Password, UpdateUserPassword] = useState("")
  const [ValidationError, setValidationError] = useState(null);
  let navigate = useNavigate()

  function SubmitedData(e) {
    e.preventDefault();
    const ValidationResultForFname = FnameValidate(Fname)
    const ValidationResultForLname = LnameValidate(Lname)
    const ValidationResultForEmail = EmailValidate(Email)
    const ValidationResultForPass = PassWordvalidate(Password)

    if (ValidationResultForFname.result === false) {
      setValidationError(ValidationResultForFname.massage)
      return;
    } else if (ValidationResultForLname.result === false) {
      setValidationError(ValidationResultForLname.massage)
      return;
    } else if (ValidationResultForEmail.result === false) {
      setValidationError(ValidationResultForEmail.massage)
      return;
    } else if (ValidationResultForPass.result === false) {
      setValidationError(ValidationResultForPass.massage);
      return;
    } else {
      let UserData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY));
      UserData = UserData === null ? [] : UserData;
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify([...UserData, {
        Fname,
        Lname,
        Email,
        Password,
      }]))
      navigate('/Login')
    }
  }
  return (
    <>
      <Form className="main_signup">
        <h1 className="title">Sign Up</h1>
        <p className="Message_show">{ValidationError}</p>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" className="inpute_element" value={Fname} onChange={(e) => {
            UpdateInputValue(e, UpdateUserFname)
          }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" className="inpute_element" value={Lname} onChange={(e) => {
            UpdateInputValue(e, UpdateUserLname)
          }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" className="inpute_element" value={Email} onChange={(e) => {
            UpdateInputValue(e, UpdateUserEmail)
          }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" className="inpute_element" value={Password} onChange={(e) => {
            UpdateInputValue(e, UpdateUserPassword)
          }} />
        </Form.Group>
        <Button variant="primary" type="submit" className="Style_NavBar" onClick={SubmitedData}>
          Submit
        </Button>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <label >Already </label>
          <Link to="/Login">Login!</Link>
        </Form.Group>
      </Form>
    </>
  )
}