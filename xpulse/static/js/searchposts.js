const postTitles = document.querySelectorAll(".posttitle");
const searchpost = document.querySelector("#searchpost");

const createTitleArray = () => {
  let titlesArray = [];
  for (let i = 0; i < postTitles.length; i++) {
    titlesArray.push(postTitles[i].textContent);
  }
  return titlesArray;
};

const findAllSearchResults = (searchWord, titleArray) => {
  const matchingIndices = [];
  titleArray.forEach((word, index) => {
    if (word.includes(searchWord)) {
      matchingIndices.push({ index, title: word });
    }
  });
  return matchingIndices;
};

const renderResults = (results) => {
  const postList = document.getElementById("postlist"); // Get the <ul> element
  postList.innerHTML = ""; // Clear existing list items

  if (results.length > 0) {
    results.forEach((result) => {
      const { index, title } = result;

      // Create a new <li> element
      const li = document.createElement("li");
      li.classList.add(
        "grid",
        "grid-cols-7",
        "px-4",
        "py-5",
        "hover:bg-gray-faded"
      );

      // Add the content to the <li> (adjust these spans as needed)
      li.innerHTML = `
        <span class="posttitle">${title}</span>
        <span>1270</span>
        <span>50</span>
        <span>489</span>
        <span>23.4%</span>
        <span class="poppins-bold text-right md:text-left">Pulse</span>
        <span>12/01/2024</span>
      `;

      // Append the new <li> to the <ul> (postlist)
      postList.appendChild(li);
    });
  } else {
    // No results found, display a message (optional)
    const noResultsMessage = document.createElement("li");
    noResultsMessage.classList.add("px-4", "py-5", "hover:bg-gray-faded");
    noResultsMessage.textContent = "No posts found.";
    postList.appendChild(noResultsMessage);
  }
};

let postTitlesArray = createTitleArray();

searchpost.addEventListener("input", (event) => {
  const searchWord = event.target.value;
  const searchResults = findAllSearchResults(searchWord, postTitlesArray);
  console.log(searchResults);
  renderResults(searchResults);
});
