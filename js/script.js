navbarLinks = document.getElementById("navbarLinks");
togglebutton = document.getElementById("toggle-button");
section = document.querySelector("section");

function toggleNavbar() {
  if (navbarLinks.classList.contains("active")) {
    navbarLinks.classList.remove("active");
    section.style.marginTop = "130px";
  } else {
    navbarLinks.classList.add("active");
    section.style.marginTop = "0";
  }
}

togglebutton.onclick = toggleNavbar;
