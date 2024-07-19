const signupEl = document.querySelector("#signupBtn");
const loginEl = document.querySelector("#login");
// const { response } = require("express");

//LOGIN FORM
const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log("login form handler");
  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  // console.log(username, email, password);
  // alert("pause");
  if (username && email && password) {
    //http://localhost:3001/api/user
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

//SIGNUP FORM
//need to connect to handlebars
const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log("signupFormHandler");
  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  console.log(username, email, password);
  alert("pause");
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
console.log(signupEl);
if (loginEl) {
  loginEl.addEventListener("click", loginFormHandler);
}
if (signupEl) {
  signupEl.addEventListener("click", signupFormHandler);
}
// .addEventListener("submit", loginFormHandler);

//need to connect to handlebars

// .addEventListener("submit", signupFormHandler);
