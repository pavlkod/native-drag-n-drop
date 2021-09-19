const $item = document.querySelector(".item");

const dragstartHandler = e => {
  const { target } = e;
  target.classList.add("hold");
  setTimeout(() => {
    target.hidden = true;
  }, 0);
};
const dragendHandler = e => {
  const { target } = e;
  target.classList.remove("hold");
  setTimeout(() => {
    target.hidden = false;
  }, 0);
};

$item.addEventListener("dragstart", dragstartHandler);
$item.addEventListener("dragend", dragendHandler);

const placeholders = document.querySelectorAll(".placeholder");

const dragoverHandler = e => {
  e.preventDefault();
};

const dragenterHandler = e => {
  const { target } = e;
  target.classList.add("hovered");
};

const dragleaveHandler = e => {
  const { target } = e;
  target.classList.remove("hovered");
};

const dragdropHandler = e => {
  const { target } = e;
  target.classList.remove("hovered");
  target.append($item);
};

placeholders.forEach(node => {
  node.addEventListener("dragover", dragoverHandler);
  node.addEventListener("dragenter", dragenterHandler);
  node.addEventListener("dragleave", dragleaveHandler);
  node.addEventListener("drop", dragdropHandler);
});
