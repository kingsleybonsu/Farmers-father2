//  const hamburger = document.getElementById("hamburger");
//   const navLinks = document.getElementById("nav-links");

//   hamburger.addEventListener("click", () => {
//     navLinks.classList.toggle("active");
//   });

/*//////massaging box/*/
const feedbackForm = document.getElementById("contact-Us");

feedbackForm.addEventListener("submit", function(e){

  e.preventDefault();

  const email = document.getElementById("email").value;

  const message = document.getElementById("massage").value;

  // SAVE FEEDBACK

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

  alert("Thank you for your feedback ❤️");

  feedbackForm.reset();

});