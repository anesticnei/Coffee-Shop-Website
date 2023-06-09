const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".nav-links-container");
const navContainer = document.querySelector(".nav-container");
const logoContainer = document.querySelector(".logo-container");
const naviBottomLinks = document.querySelector(".navi-bottom-content");
const hometBtn = document.querySelector("#home");
const projectsBtn = document.querySelector("#projects");
const aboutBtn = document.querySelector("#about");
const contactBtn = document.querySelector("#contact");
const projectSectionBtn = document.getElementById("project-section-btn");
const navLottie = document.querySelector('.nav-lottie');
const navBorder = document.querySelector('.nav-border');
const loader = document.querySelector('#preloader');
const newsContainer = document.querySelector('.newsletter-container');
const newsSubBtn = document.querySelector('.news-close');



if (navToggle !== null) {
  navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", true);
      navToggle.setAttribute("aria-expanded", true);
      navToggle.classList.add("active");
      primaryNav.style.overflow = "hidden";
      logoContainer.style.opacity = "0";
      document.body.style.overflow = "hidden";
      navBorder.style.opacity = "0";
    } else {
      primaryNav.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
      navToggle.classList.remove("active");
      primaryNav.style.overflow = "hidden";
      logoContainer.style.opacity = "1";
      document.body.style.overflow = "scroll";
      navBorder.style.opacity = "1";
    }
  });
}
const cofeBtn = document.querySelector('.coffee-btn');
const cakeBtn = document.querySelector('.cake-btn');
const cofeContainer = document.querySelector('.coffee-container');
const cakeContainer = document.querySelector('.cakes-container');
if (cofeBtn !== null) {
  cofeBtn.addEventListener('click', () =>{
    cofeContainer.setAttribute("data-visible", true);
    cakeContainer.setAttribute("data-visible", false);    
    cofeBtn.classList.remove('deactive-btn');    
    cakeBtn.classList.add('deactive-btn');
  })
}
if (cakeBtn !== null) {
cakeBtn.addEventListener('click', () =>{
  cakeContainer.setAttribute("data-visible", true);
  cofeContainer.setAttribute("data-visible", false);
  cofeBtn.classList.add('deactive-btn');
  cakeBtn.classList.remove('deactive-btn');
})
}
window.addEventListener('load', () =>{
  loader.style.display = "none";
  const popUp = () =>{
    if (newsContainer !== null) {
    newsContainer.style.display = "block"
    }
  }
  setTimeout(popUp, 2000)
})

if (newsSubBtn !== null) {
newsSubBtn.addEventListener('click', () =>{
  if (newsContainer !== null) {
  newsContainer.style.display = "none"
  }
})
}
const navLinksToggle = document.querySelectorAll(".nav-links-toggle");

let query = window.matchMedia("(min-width: 1000px)");
if(query.matches){
if (navLinksToggle !== null) {
  navLinksToggle.forEach(function (listitem) {
    listitem.addEventListener("click", () => {
      if (listitem !== null) {
        listitem.href = "javascript:void(0);";
        const topPosition =
          document.getElementById(listitem.dataset.page).offsetTop;
        if (topPosition !== null) {
          // document.body.style.overflow = "scroll";
          // const topPosition = document.getElementById(listitem.dataset.page);
          window.scrollTo({
            top: topPosition - 80,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    });
  });
}
}
