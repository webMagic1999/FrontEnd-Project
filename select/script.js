const bundles = document.querySelectorAll(".bundle");
const totalPriceElement = document.getElementById("price-total");

function toggleBundle(units, price) {
  bundles.forEach((bundle) => {
    bundle.classList.remove("active");
    bundle.querySelector("input[type='radio']").checked = false;
  });

  const selectedBundle = document.querySelector(
    `.bundle[data-units='${units}']`
  );

  if (selectedBundle) {
    selectedBundle.classList.add("active");
    selectedBundle.querySelector("input[type='radio']").checked = true;
  }

  totalPriceElement.textContent = `$${price.toFixed(2)} USD`;
}

// Set the first bundle as default
document.addEventListener("DOMContentLoaded", () => {
  const firstBundle = bundles[0];
  const firstPrice = parseFloat(firstBundle.dataset.units) * 10; // Adjust based on your pricing logic
  toggleBundle(firstBundle.dataset.units, firstPrice);
});
