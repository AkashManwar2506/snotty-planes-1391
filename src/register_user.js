let first_name = document.querySelector("#first_name");
let last_name = document.querySelector("#last_name");
let dob = document.querySelector("#dob");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let create_account_btn = document.querySelector("#create_account_btn");
create_account_btn.addEventListener("click", registerFunc);

// fetching users data

let globalData = [];

fetch("https://63c9569d320a0c4c95466357.mockapi.io/fashionline/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // globalData=data;
    console.log(data);
  });

// registering user
function registerFunc() {
  event.preventDefault();

  let error = "";
  if (!first_name.value) {
    error += "Enter a name \n";
  }
  if (!last_name.value) {
    error += "Enter a last name \n";
  }
  if (!dob.value) {
    error += "Enter a date of birth \n";
  }
  if (!email.value) {
    error += "Enter an email \n";
  }
  if (!password.value) {
    error += "Enter a password \n";
  }

  if (error) {
    alert(error);
  } else {
    //checking if email already exists
    let userExists = false;

    globalData.forEach((el) => {
      if (el.email.toUpperCase() == email.value.toUpperCase()) {
        alert(
          `User with${email.value} already exists! \nLogin or Reset the password`
        );
        userExists = true;
        return;
      }
    });

    //registering user if user doesn't exist
    if (!userExists) {
      let userObj = {
        first_name: first_name.value,
        last_name: last_name.value,
        dob: dob.value,
        email: email.value,
        password: password.value,
        registeredOn: new Date(),
        orders: [],
      };

      postFunction(userObj);

      alert("Account created successfully");
      window.location.href = "./login_user.html";
    }
  }
}

//   post request function
function postFunction(userObj) {
  fetch("https://63c9569d320a0c4c95466357.mockapi.io/fashionline/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObj),
  });
}
