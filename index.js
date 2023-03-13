// convert today date to input format //

let today = new Date().toISOString().split("T")[0];

startDate.value = today;
startDate.min = today;

// convert tomorrow date //

let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

// convert tomorrow date to input format //
let tomorrowDate = tomorrow.toISOString().split("T")[0];
returnDate.value = tomorrowDate;
returnDate.min = tomorrowDate;

startDate.addEventListener("change", (e) => {
  let day = new Date(e.target.value);

  if (returnDate.value < startDate.value) {
    day.setDate(day.getDate() + 1);
    returnDate.value = day.toISOString().split("T")[0];
  }
});

returnDate.addEventListener("change", (e) => {
  let day = new Date(e.target.value);

  if (returnDate.value < startDate.value) {
    day.setDate(day.getDate() - 1);
    startDate.value = day.toISOString().split("T")[0];
  }
});

// clacl week //

const bookingCalc = () => {
  let diffTime = Math.abs(new Date(returnDate.value) - new Date(startDate.value));
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  totalPrice.textContent = diffDays * nightPrice.textContent;
};

startDate.addEventListener("change", bookingCalc);
returnDate.addEventListener("change", bookingCalc);

bookingCalc();
