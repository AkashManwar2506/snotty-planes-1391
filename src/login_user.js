let email = document.querySelector("#email");
  let password = document.querySelector("#password");

  let sign_in_btn = document.querySelector("#sign_in_btn");
  sign_in_btn.addEventListener("click", loginFunc);

  // fetching users data

  let globalData = [];

  fetch("https://63c9569d320a0c4c95466357.mockapi.io/fashionline/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      globalData = data;
      console.log(data);
    });

  //login function
  function loginFunc() {
    event.preventDefault();
    let validUser = false;
    let user;

    globalData.forEach((item) => {
      if (
        email.value.toUpperCase() == item.email.toUpperCase() &&
        password.value == item.password
      ) {
        validUser = true;
        user = item.first_name;

        return;
      }
    });

    if (validUser == false) {
      alert("Enter correct credentials");
    } else {
      alert(`${user} you are logged in successfully`);
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("loggedInUser", `${user}`);

      window.location.href = "./index.html";
    }
  }