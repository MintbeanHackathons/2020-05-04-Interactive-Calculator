const billTotal = document.getElementById("bill-total");
const submitButtom = document.getElementById("submit");
const serviceSlider = document.getElementById("service-quality");
const tipTotal = document.getElementById("tip-total");

submitButtom.addEventListener("click", () => {
  tipTotal.innerText = `Your tip should be: $${(
    ((serviceSlider.value / 4) * 10 + 15) *
    (billTotal.value / 100)
  ).toFixed(2)}`;
});
