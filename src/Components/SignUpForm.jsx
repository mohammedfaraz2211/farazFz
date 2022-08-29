import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { LOCAL_STORAGE_USER_KEY } from '../constant'
import { UpdateInputValue } from '../Utils/Genral'
import { FnameValidate , LnameValidate, EmailValidate, PassWordvalidate } from '../Utils/Validation'


export function SignUpForm(e) {

  const [Fname, UpdateUserFname] = useState("")
  const [Lname, UpdateUserLname] = useState("")
  const [Email, UpdateUserEmail] = useState("")
  const [Password, UpdateUserPassword] = useState("")
  const [ValidationError, setValidationError] = useState(null);
  let navigate = useNavigate()

  function SubmitedData() {
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
    <div className='SignUp_container'>
      <h2 className="h2">Sign Up</h2>
      <p className="Message_show">{ValidationError}</p>
      <ul className='SignUp_2container'>
        <li className='li_Style'>
          <label>First Name </label><br></br>
          <input type="text" className='input_Style' value={Fname} onChange={(e) => {
            UpdateInputValue(e, UpdateUserFname)
          }}></input>
        </li>
        <li className='li_Style'>
          <label>Last Name </label><br></br>
          <input type="text" className='input_Style' value={Lname} onChange={(e) => {
            UpdateInputValue(e, UpdateUserLname)
          }}></input>
        </li>
        <li className='li_Style'>
          <label>Email Address </label><br></br>
          <input type="text" className='input_Style' value={Email} onChange={(e) => {
            UpdateInputValue(e, UpdateUserEmail)
          }}></input>
        </li>
        <li className='li_Style'>
          <label>Password </label><br></br>
          <input type="Password" className='input_Style' value={Password} onChange={(e) => {
            UpdateInputValue(e, UpdateUserPassword)
          }}></input>
        </li>
        <li className='li_Style'>
          <button className='SignIn_button' onClick={SubmitedData}
          >Sign Up</button>
        </li>
        <li className='LinkTag'>
          <label>Already </label>
          <Link to="/Login">Login!</Link>
        </li>
      </ul>
    </div>
  )
}