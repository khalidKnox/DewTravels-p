const arrows = document.querySelectorAll(".arrow");
const carLists = document.querySelectorAll(".car-list");

arrows.forEach((arrow, i) => {
  const itemNumber = carLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      carLists[i].style.transform = `translateX(${
        carLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      carLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.car-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

function toggleMenu() {
  const menu = document.querySelector('.hidden-menu');
  const currentTop = menu.style.top;

  if (currentTop === '0px') {
    // Hide the menu
    menu.style.top = '-100%';
  } else {
    // Show the menu
    menu.style.top = '0';
  }
}