const scrollDown = document.querySelector(".ScrollDown");
const bigBlockText = document.querySelector(".bigBlock_text");
const bigBlockRedLine = document.querySelector(".bigBlock_redLine");
const img = document.getElementById("img");
const ScrollUp = document.querySelector(".ScrollUp");
const blockTwo = document.getElementById('blockTwo');

window.addEventListener("scroll", increaseFirstText);

function increaseFirstText() {
  if (window.scrollY <= 250) {
    scrollDown.style.fontSize = `${30 + window.scrollY / 3.5}px`;
  }
}

window.addEventListener("scroll", transformToRight);

function transformToRight() {
  if (window.scrollY <= 450) {
    bigBlockText.style.left = `${window.scrollY / 2}px`;
    bigBlockRedLine.style.left = `${window.scrollY / 2}px`;
    bigBlockRedLine.style.width = `${window.scrollY}px`;
    img.style.right = `${window.scrollY / 2}px`;
  }
}

window.onscroll = function () {
  if (window.scrollY > 800 && window.scrollY < 1200) {
    ScrollUp.style.fontSize = `${74 - (window.scrollY - 800) / 12}px`;
  }
};

scrollDown.addEventListener('click', () => {
  blockTwo.scrollIntoView({behavior: 'smooth'})
})

ScrollUp.addEventListener('click', () => {
  window.scroll ({
    top: 0,
    behavior: 'smooth',
  })
})