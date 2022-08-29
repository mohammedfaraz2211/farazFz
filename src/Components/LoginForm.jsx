import { useState } from "react"
import { UpdateInputValue } from '../Utils/Genral'
import { LOCAL_STORAGE_USER_KEY } from '../constant'
import { Link, useNavigate } from "react-router-dom"
import { EmailValidate , PassWordvalidate } from '../Utils/Validation'

import '../Style.css'

export default function LoginForm(Props) {
  const {setdata} = Props
  const [Email, UpdateEmail] = useState("")
  const [Password, UpdatePassword] = useState("")
  const [EmailError, setEmailError] = useState(null)
  const history = useNavigate()

  function LoginData() {
    const ValidationResultForLloginEmail = EmailValidate(Email)
    const ValidationResultForLloginPassword = PassWordvalidate(Password)

    if(ValidationResultForLloginEmail.result===false){
      setEmailError(ValidationResultForLloginEmail.massage)
      return;
    }else if(ValidationResultForLloginPassword.result === false){
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
    <div className='Login_container'>
      <h2 className='h2'>Login</h2>
      <p className="Message_show">{EmailError}</p>
      <div className='second_container' >
        <li className='li_Style'>
          Email Address <br></br>
          <input type="email" className='input_Style' value={Email} onChange={(e) => {
            UpdateInputValue(e, UpdateEmail)
          }}></input>
        </li>

        <li className='li_Style'>
          Password <br></br>
          <input type="Password" className='input_Style' value={Password} onChange={(e) => {
            UpdateInputValue(e, UpdatePassword)
          }}></input>
        </li>

        <li className='li_Style'>
          <input type="checkbox" ></input>Remember me
        </li>
        <li className='li_Style'>
          <button className='SignIn_button' onClick={LoginData}
          >Submit</button>
        </li>
        <li className='LinkTag'>
          <label>Create Account </label>
          <Link to="/SignUp">SignUp!</Link>
        </li>
      </div>
    </div>
  )
}