const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~|,.?/{}[]-123456789";
console.log(letters.split("").length);

const bannerItemTexts = document.querySelectorAll(
  "#banner .banner-slogan .list .item"
);
const ecosystemTitle = document.querySelector(
  "#ecosystem .ecosystem-title .title"
);
const technologyTitle = document.querySelector(
  "#technology .technology-title .title"
);

const hackerEffect = (el) => {
  let iterations = 0;
  const interval = setInterval(() => {
    el.innerText = el.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return el.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * letters.split("").length)];
      })
      .join("");
    if (iterations >= el.dataset.value.length) {
      clearInterval(interval);
    }
    iterations += 1 / 5;
  }, 30);
};

bannerItemTexts.forEach((bannerItemText) => {
  hackerEffect(bannerItemText);
  bannerItemText.onmouseover = () => {
    hackerEffect(bannerItemText);
  };
});

hackerEffect(ecosystemTitle);
hackerEffect(technologyTitle);
