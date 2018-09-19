if (document.querySelector(".add-data")) {
  const buttons = document.querySelectorAll(".add-data");
  const nameInput = document.querySelector("#service-name");
  const priceInput = document.querySelector("#service-price");

  buttons.forEach(btn => {
    btn.addEventListener("click", event => {
      let name = event.target.getAttribute("data-name");
      let price = event.target.getAttribute("data-price");

      nameInput.value = name;
      priceInput.value = price;
    });
  });
}
