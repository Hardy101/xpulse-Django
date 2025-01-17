// Elements
const Elements = {
  title: document.getElementById("postTypetitle"),
  buttons: {
    queue: document.getElementById("queuebtn"),
    calendar: document.getElementById("calendarbtn"),
    drafts: document.getElementById("draftsbtn"),
  },
  tabs: {
    queue: document.getElementById("queue"),
    calendar: document.getElementById("calendar"),
    drafts: document.getElementById("drafts"),
  },
  postTypeDivs: document.querySelectorAll(".post-type"),
  changeTabBtn: document.querySelectorAll(".changetab"),
};

// Utility Functions
const updateTextContent = (element, content) => {
  if (element) element.textContent = content;
};

const hideElements = (elements) => {
  elements.forEach((element) => element.classList.add("hidden"));
};

const updateActiveButton = (activeBtn, title) => {
  Elements.changeTabBtn.forEach((btn) =>
    btn.classList.remove("border-b-2", "border-gray-bold", "text-black")
  );

  if (activeBtn.textContent.trim() === title) {
    activeBtn.classList.add("border-b-2", "border-gray-bold", "text-black");
  }
};

// Main Function
const changeActiveTab = (tabName) => {
  const { title, buttons, tabs } = Elements;

  updateTextContent(title, tabName);
  hideElements(Elements.postTypeDivs);
  tabs[tabName.toLowerCase()].classList.remove("hidden");
  updateActiveButton(buttons[tabName.toLowerCase()], tabName);
};

// Event Listeners
Object.entries(Elements.buttons).forEach(([tabName, button]) => {
  button.addEventListener("click", () =>
    changeActiveTab(tabName.charAt(0).toUpperCase() + tabName.slice(1))
  );
});

const getDaysInMonth = (month, year = new Date().getFullYear()) => {
  // Adjust for 0-based month index (1-12 to 0-11)
  return new Date(year, month, 0).getDate();
};