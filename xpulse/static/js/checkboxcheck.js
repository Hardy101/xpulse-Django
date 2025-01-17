const checkbox = document.getElementById("schedule");
const scheduleDiv = document.getElementById("schedulediv");

const toggleScheduleDiv = () => {
  scheduleDiv.classList.toggle("hidden");
};

checkbox.addEventListener("change", function () {
  checkbox.checked ? toggleScheduleDiv() : toggleScheduleDiv();
});
