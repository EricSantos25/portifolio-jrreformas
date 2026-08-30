function showMenu() {
  const menu = document.getElementById("menu-container");
  const burger = document.getElementById("icon-menuBurger");
  const isOpen = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(isOpen));
}

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu-container");
  const burger = document.getElementById("icon-menuBurger");

  burger.addEventListener("click", showMenu);

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", function (event) {
    if (
      menu.classList.contains("open") &&
      !menu.contains(event.target) &&
      !burger.contains(event.target)
    ) {
      menu.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }
  });
});
