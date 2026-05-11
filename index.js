//  const hamburger = document.getElementById("hamburger");
//   const navLinks = document.getElementById("nav-links");

//   hamburger.addEventListener("click", () => {
//     navLinks.classList.toggle("active");
//   });

/*//////massaging box/*/
/* FEEDBACK FORM */

const feedbackForm =
document.getElementById("contact-Us");

feedbackForm.addEventListener("submit", function(e){

  e.preventDefault();

  const email =
  document.getElementById("email").value;

  const message =
  document.getElementById("massage").value;

  const feedbacks =
  JSON.parse(localStorage.getItem("feedbacks")) || [];

  feedbacks.push({
    email,
    message,
    date: new Date().toLocaleString()
  });

  localStorage.setItem(
    "feedbacks",
    JSON.stringify(feedbacks)
  );

  alert("Thank you for your feedback");

  feedbackForm.reset();

});


/* SIDEBAR */

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");


menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});


closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});


overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});