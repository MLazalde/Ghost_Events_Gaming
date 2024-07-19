const buttonArrEl = document.querySelectorAll(".addInventory");

const addInventoryHandler = async (event) => {
  const cardId = event.target.dataset.cardId;
  const response = await fetch(`/api/user/cart/add/${cardId}`, {
    method: "PUT",
  });
  console.log(response);
};

for (let index = 0; index < buttonArrEl.length; index++) {
  const element = buttonArrEl[index];
  element.addEventListener("click", addInventoryHandler);
}
