let email = document.querySelector("#email");
  let continue_btn = document.querySelector("#continue_btn");
  continue_btn.addEventListener("click", resetFunc);

  let otp_div = document.querySelector("#otp_div");

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

  function resetFunc() {
    let emailExists = false;
    let user_email;
    let user;
    let password;

    //generating random otp

    let min = 1000;
    let max = 9999;
    let random_otp = Math.ceil(min + (max - min) * Math.random());

    globalData.forEach((item) => {
      if (item.email.toUpperCase() == email.value.toUpperCase()) {
        emailExists = true;
        user_email = item.email.toUpperCase();
        user = item.first_name.toUpperCase();
        password = item.password;
        return;
      }
    });

    if (!emailExists) {
      alert(
        `"${email.value.toUpperCase()}"" is not registered with FASHIONLINE.com`
      );
      location.reload();
    } else {
      setTimeout(() => {
        otp_div.innerHTML = `<h4>Dear ${user}, your verification code to recover password is "${random_otp}"</h4>`;
        otp_div.style.display = "block";
      }, 1500);

      setTimeout(() => {
        let enteredOtp = prompt(
          `A verification code has been sent to "${user_email}"`,
          "Enter the verification code here"
        );

        setTimeout(() => {
          if (enteredOtp == random_otp) {
            otp_div.innerHTML = `<h4>Dear ${user}, your password is "${password}"</h4>`;
          }
        }, 1100);
      }, 3000);

      setTimeout(() => {
        otp_div.style.display = "none";
      }, 40000);
    }
  }