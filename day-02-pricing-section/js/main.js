// ===== Theme Toggle =====
const select = document.getElementById("mode");
select.addEventListener("change", () => {
  document.documentElement.setAttribute("data-theme", select.value);
});

// ===== Price Toggle =====
const switchInput = document.getElementById("periodSwitch");
const priceElements = document.querySelectorAll(".price");
const monthlyLabel = document.querySelector(".label.monthly");
const yearlyLabel = document.querySelector(".label.yearly");

function updatePrices() {
  const yearly = switchInput.checked;

  // Toggle label activity
  monthlyLabel.classList.toggle("active", !yearly);
  yearlyLabel.classList.toggle("active", yearly);

  // Fade effect for prices
  priceElements.forEach((p) => {
    p.classList.add("updating");
    setTimeout(() => {
      const month = p.dataset.month;
      const year = p.dataset.year;
      p.textContent = yearly ? `$${year}/yr` : `$${month}/mo`;
      p.classList.remove("updating");
    }, 200);
  });
}

// Initialize and attach listener
updatePrices();
switchInput.addEventListener("change", updatePrices);