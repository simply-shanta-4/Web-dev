function toggleMenu() {
  const nav = document.querySelector("nav ul");
  nav.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  nav.addEventListener("click", (e) => {
    if (e.target.textContent === "☰") {
      toggleMenu();
    }
  });
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

function filterProjects(category) {
  const projects = document.querySelectorAll("#projects article");
  projects.forEach(project => {
    if (category === "all" || project.dataset.category === category) {
      project.style.display = "flex";
    } else {
      project.style.display = "none";
    }
  });
}

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll("#projects img");
images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    const imgClone = document.createElement("img");
    imgClone.src = img.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(imgClone);
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

const form = document.querySelector("#contact form");

form