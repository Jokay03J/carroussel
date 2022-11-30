import "./style.css";
const imgs = document.getElementById("carroussel").children;
const dotsContainer = document.getElementById("dots");
const dots = dotsContainer.children;
let currentItem = 0;

for (let index = 0; index < imgs.length; index++) {
  if (index === 0) {
    dotsContainer.innerHTML += `
  <div class="dots dots-active"></div>
  `;
  } else {
    dotsContainer.innerHTML += `
    <div class="dots"></div>
    `;
  }
}

setInterval(() => {
  if (currentItem === imgs.length - 1) currentItem = -1;
  for (let index = 0; index < imgs.length; index++) {
    const img = imgs[index];
    img.classList.remove("active");
  }
  for (let index = 0; index < dots.length; index++) {
    const dot = dots[index];
    dot.classList.remove("dots-active");
  }
  currentItem++;
  dots[currentItem].classList.add("dots-active");
  imgs[currentItem].classList.add("active");
}, 3000);
