const checkoutButton = document.querySelector("#checkout-button");

const totalEl = document.querySelector(".total-price");

const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);
console.log("hello world");

const cardArr = [...document.querySelectorAll(".product-card")].map((item) => {
  return {
    itemName: item.innerHTML,
  };
});

const totalCost = cardArr.length;

totalEl.innerHTML = `Total: $${totalCost * 10}.00`;

console.log(cardArr);

emailjs.init({
  publicKey: "mTWxTuJ1Hp8JygFMN",
  // Do not allow headless browsers
  // blockHeadless: true,
  // blockList: {
  //   // Block the suspended emails
  //   list: ["foo@emailjs.com", "bar@emailjs.com"],
  //   // The variable contains the email address
  //   watchVariable: "userEmail",
  // },
  // limitRate: {
  //   // Set the limit rate for the application
  //   id: "app",
  //   // Allow 1 request per 10s
  //   throttle: 10000,
  // },
});

const sendEmail = () => {
  const emailParams = {
    email: checkoutButton.dataset.userEmail,
    cart: cardArr,
  };

  emailjs.send("service_nlj3c3q", "template_0poi4fc", emailParams);
  console.log("email sent!");
};

checkoutButton.addEventListener("click", sendEmail);

console.log(checkoutButton.dataset.userEmail);
