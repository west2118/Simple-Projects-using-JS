const birthDay = document.querySelector(".birth");
const endDay = document.querySelector(".end");

const calculate = document.querySelector(".calculate");

const years = document.querySelector(".years");
const months = document.querySelector(".months");
const days = document.querySelector(".days");

function calcAge() {
  let [yr, month, day] = birthDay.value.split("-").map(Number);
  let [yr2, month2, day2] = endDay.value.split("-").map(Number);

  let dayResult, monthResult, yearResult;

  yearResult = yr2 - yr;

  if (day2 < day) {
    month2--;
    const prevMonthDays = new Date(yr2, month2, 0).getDate();
    dayResult = prevMonthDays + day2 - day;
    console.log(prevMonthDays, day2, day);
  } else {
    dayResult = day2 - day;
  }

  if (month2 < month) {
    yearResult--;
    monthResult = 12 + (month2 - month);
  } else {
    monthResult = month2 - month;
  }

  if (dayResult < 0 || monthResult < 0 || yearResult < 0) {
    alert("Please Provide Correct Date!");
  } else {
    days.innerHTML = dayResult;
    months.innerHTML = monthResult;
    years.innerHTML = yearResult;
  }
}

calculate.addEventListener("click", calcAge);
