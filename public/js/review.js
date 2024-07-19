// const emailjs = require("emailjs");

const checkoutButton = document.querySelector("#checkout-button");
const addToCartBtn = document.getElementById("addToCartBtn");

// const totalEl = document.querySelector(".total-price");

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

// click to add to cart
addToCartBtn.addEventListener("click", async () => {
  try {
    const response = await fetch(
      `http://localhost:3001/api/user/cart/add/:id`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ req.session.id }), // Replace 'your_product_id_here' with the actual product ID
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data.message); 
    } else {
      throw new Error("Failed to add product to cart");
    }
  } catch (error) {
    console.error(error);
  }
});

//keeps getting an error saying that totalEl can not be null
document.addEventListener("DOMContentLoaded", function () {
  const totalEl = document.querySelector(".total-price");
  const totalCost = cardArr.length > 0 ? cardArr.length : 0;
  if (totalCost > 0) {
    totalEl.innerHTML = `Total: $${totalCost * 10}.00`;
  } else {
    totalEl.innerHTML = "Total: $0.00";
  }
});

console.log(cardArr);

emailjs.init({
  publicKey: "mTWxTuJ1Hp8JygFMN",
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
