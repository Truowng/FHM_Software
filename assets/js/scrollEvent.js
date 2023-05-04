window.addEventListener("scroll", scrollEvent);

const scrollEvent = (el, arr = false) => {
  if (arr) {
    const el = el.document.querySelectorAll(`${el}`);
    el.forEach((item) => {
      let windowHeight = window.innerHeight;
      let itemTop = item[i].getBoundingClientRect().top;
      let scrollPoint = 150;
      if (itemTop < windowHeight - scrollPoint) {
        item[i].classList.add("active");
      }
    });
  } else {
    const el = document.querySelector(`${el}`);
    let windowHeight = window.innerHeight;
    let elTop = el.getBoundingClientRect().top;
    let scrollPoint = 150;
    if (elTop < windowHeight - scrollPoint) {
      el.classList.add("active");
    }
  }
};
