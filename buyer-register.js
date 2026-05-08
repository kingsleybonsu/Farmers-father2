
  const container = document.getElementById("container");
  const switchBtn = document.getElementById("switchBtn");
  const overlayText = document.getElementById("overlayText");

  let isRegister = false;

  switchBtn.addEventListener("click", () => {

    container.classList.toggle("active");

    isRegister = !isRegister;

    if(isRegister){

      switchBtn.innerText = "Login";

      overlayText.innerText =
      "Already have an account? Login and continue browsing produce.";

    }else{

      switchBtn.innerText = "Register";

      overlayText.innerText =
      "New buyer? Register and start connecting directly with farmers.";

    }

  });

  /* REGISTER */

  document.getElementById("registerForm")
  .addEventListener("submit", function(e){

    e.preventDefault();

    const buyer = {
      name: document.getElementById("regName").value,
      phone: document.getElementById("regPhone").value,
      email: document.getElementById("regEmail").value,
      password: document.getElementById("regPassword").value
    };

    localStorage.setItem("buyer", JSON.stringify(buyer));

    alert("Buyer Registration Successful");

    container.classList.remove("active");

  });

  /* LOGIN */

  document.getElementById("loginForm")
  .addEventListener("submit", function(e){

    e.preventDefault();

    const phone = document.getElementById("loginPhone").value;
    const password = document.getElementById("loginPassword").value;

    const savedBuyer =
    JSON.parse(localStorage.getItem("buyer"));

    if(
      savedBuyer &&
      savedBuyer.phone === phone &&
      savedBuyer.password === password
    ){

      localStorage.setItem("buyerLoggedIn", true);

      alert("Buyer Login Successful");

      window.location.href = "browse.html";

    }

    else{
      alert("Invalid Phone or Password");
    }

  });