const pic = document.querySelector(".pic");
const igTag = document.querySelector(".ig-tag");
const icons = document.querySelector(".fa-grip-lines-vertical");
const titleClick = document.querySelector(".title");

pic.addEventListener("mouseover", function () {
  igTag.style.opacity = 1;
});

titleClick.addEventListener("mouseover", function () {
  icons.style.opacity = 1;
});
