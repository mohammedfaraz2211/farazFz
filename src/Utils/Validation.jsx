//SignUp Validation & Login Validation
function FnameValidate(Fname) {
  if (Fname.length < 3 || Fname === "") {
    return {
      massage: "INSERT FIRST NAME!",
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
      massage: "INSERT LAST NAME!",
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
      massage: "INSERT EMAIL ID!",
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
      massage: "INSERT PASSWORD!",
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
