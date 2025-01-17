const clearDatesBtn = document.getElementById("clearDatesBtn");

clearDatesBtn.addEventListener("click", () => {
  document.querySelectorAll("input[type='date']").forEach((input) => {
    input.value = "";
  });
});
