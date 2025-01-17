const filterBtn = document.getElementById("filterbtn");
const filterDiv = document.getElementById("filterdiv");

const toggleFilterDiv = () => {
  filterDiv.classList.toggle("hidden");
};

filterBtn.addEventListener("click", toggleFilterDiv);
