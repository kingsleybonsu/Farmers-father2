
  // MAIN ELEMENTS
  const container = document.getElementById("container");
  const switchBtn = document.getElementById("switchBtn");
  const overlayText = document.getElementById("overlayText");

  let isRegister = false;

  // SWITCH LOGIN ↔ REGISTER
  switchBtn.addEventListener("click", () => {

    container.classList.toggle("active");

    isRegister = !isRegister;

    // REGISTER MODE
    if(isRegister){

      switchBtn.innerText = "Login";

      overlayText.innerText =
      "Already have an account? Login and continue managing your produce.";

    }

    // LOGIN MODE
    else{

      switchBtn.innerText = "Register";

      overlayText.innerText =
      "Don't have an account yet? Register as a farmer and start selling produce.";

    }

  });

  // REGISTER FARMER
  document.getElementById("registerForm")
  .addEventListener("submit", function(e){

    e.preventDefault();

    const farmer = {

      name: document.getElementById("regName").value,

      farm: document.getElementById("farmName").value,

      phone: document.getElementById("regPhone").value,

      email: document.getElementById("regEmail").value,

      password: document.getElementById("regPassword").value

    };

    // SAVE FARMER
    localStorage.setItem("farmer", JSON.stringify(farmer));

    alert("Registration Successful ✅");

    // RETURN TO LOGIN
    container.classList.remove("active");

    isRegister = false;

    switchBtn.innerText = "Register";

    overlayText.innerText =
    "Don't have an account yet? Register as a farmer and start selling produce.";

  });

  // LOGIN FARMER
  document.getElementById("loginForm")
  .addEventListener("submit", function(e){

    e.preventDefault();

    const phone =
    document.getElementById("loginPhone").value;

    const password =
    document.getElementById("loginPassword").value;

    // GET SAVED FARMER
    const savedFarmer =
    JSON.parse(localStorage.getItem("farmer"));

    // CHECK LOGIN
    if(

      savedFarmer &&

      savedFarmer.phone === phone &&

      savedFarmer.password === password

    ){

      // SAVE LOGIN STATUS
      localStorage.setItem("farmerLoggedIn", true);

      alert("Login Successful ✅");

      // REDIRECT
      window.location.href = "dashboard.html";

    }

    else{

      alert("Invalid Phone Number or Password ❌");

    }

  });