console.log("Hi");

let img = document.querySelector("img");
let prev = document.querySelector("#go-to-previous");
let next = document.querySelector("#go-to-next");

let i = 0;
next.addEventListener("click", function () {
  img.setAttribute("src", `https://picsum.photos/id/${i++}/500/300`);
  console.log(img.getAttribute("src"));
});
prev.addEventListener("click", function () {
  img.setAttribute("src", `https://picsum.photos/id/${i--}/500/300`);
  console.log(img.getAttribute("src"));
});
