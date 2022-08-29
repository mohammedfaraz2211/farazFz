//SignUp Validation & Login Validation
function FnameValidate(Fname) {
  if (Fname.length < 3 || Fname === "") {
    return {
      massage: "Fname must be atleast 3 charechter ",
      result: false
    }
  } else {
    return {
      massage: "SuccessFull",
      result: true
    }
  }
};

function LnameValidate(Lname) {
  if (Lname.length < 3) {
    return {
      massage: "Lname must be atleast 3 charechter ",
      result: false
    }
  } else {
    return {
      massage: "SuccessFull",
      result: true
    }
  }
};

function EmailValidate(Email) {
  if (Email === "" || !Email.includes('@')) {
    return {
      massage: "insert email Id",
      result: false
    }
  } else {
    return {
      massage: "Successfull",
      result: true
    }
  }
}

function PassWordvalidate(Password) {
  if (Password.length < 4 || Password.length > 12) {
    return {
      massage: "Passowrd Too Short",
      result: false
    }
  } else {
    return {
      massage: "SuccessFull",
      result: true
    }
  }
};


export { FnameValidate, LnameValidate, EmailValidate, PassWordvalidate }
