function showMenu() {
  const menuContainer = document.getElementById("menu-container");
  // Verifica se o estilo left é igual a 0 ou 0px
  if (menuContainer.style.left === "0" || menuContainer.style.left === "0px") {
    menuContainer.style.left = "-100%"; // Oculta o menu
  } else {
    menuContainer.style.left = "0"; // Exibe o menu
  }
}
