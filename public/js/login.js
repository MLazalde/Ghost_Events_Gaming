const { response } = require("express");

//LOGIN FORM
const loginFormHandler = async (event) => {
  event.preventDefault();
  
  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  
  if (username && email && password) {
    //http://localhost:3001/api/user
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);

    // if (response.ok) {
    //   document.location.replace("/");
    // } else {
    //   alert("Failed to log in.");
    // }
  }
};

//SIGNUP FORM
//need to connect to handlebars
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    console.log(response);
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector("#login")
  .addEventListener("submit", loginFormHandler);

//need to connect to handlebars
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
