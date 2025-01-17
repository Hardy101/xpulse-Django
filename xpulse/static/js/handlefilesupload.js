function truncate(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}

document
  .getElementById("fileupload")
  .addEventListener("change", handleFileUpload);

function handleFileUpload(event) {
  const fileList = document.getElementById("fileList");
  const files = Array.from(event.target.files);

  files.forEach((file, index) => {
    const listItem = createFileListItem(file, index, files);
    fileList.appendChild(listItem);
  });
}

function createFileListItem(file, index, files) {
  const listItem = document.createElement("li");
  listItem.className = "file-item flex gap-4 px-2 py-2 border-2";

  const fileThumbnail = createThumbnail();
  const fileInfo = createFileInfo(file);
  const removeButton = createRemoveButton(listItem, index, files);

  listItem.appendChild(fileThumbnail);
  listItem.appendChild(fileInfo);
  listItem.appendChild(removeButton);

  return listItem;
}

function createThumbnail() {
  const img = document.createElement("img");
  img.src = "src/img/upload.png"; // Replace with a thumbnail generator if needed
  img.alt = "file thumbnail";
  img.className = "w-10 m-auto";
  return img;
}

function createFileInfo(file) {
  const fileInfo = document.createElement("div");
  fileInfo.className = "flex grow flex-wrap gap-x-3 text-left";
  fileInfo.innerHTML = `
    <span class="w-full poppins-bold text-sm">${truncate(file.name, 10)}</span>
    <span class="text-xs text-gray-bold poppins-medium">${truncate(
      file.type,
      10
    )}</span>
    <span class="text-xs text-gray-bold poppins-medium">${(
      file.size /
      (1024 * 1024)
    ).toFixed(2)} MB</span>
  `;
  return fileInfo;
}

function createRemoveButton(listItem, index, files) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "remove-file";
  button.innerHTML = `<img src="src/img/close.png" alt="remove" class="w-10" />`;

  button.addEventListener("click", () => {
    listItem.remove();
    const updatedFiles = files.filter((_, i) => i !== index);
    console.log("Remaining files:", updatedFiles);
  });

  return button;
}

function truncate(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}
