/*shared section (for every pages)*/
const menu = document.getElementById("menu");
const navbar = menu.querySelector(".navbar");
// Open menu
window.openNav = () => {
  menu.style.display = "block";
  navbar.classList.remove("close-navbar");
  navbar.classList.add("open-navbar");
}
// Close menu
window.closeNav = () => {
  navbar.classList.remove("open-navbar");
  navbar.classList.add("close-navbar");
  setTimeout(() => menu.style.display = "none", 300); // wait for animation
}
// close when clicking outside
document.addEventListener('click', e => {
  if (menu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.replace("open-navbar", "close-navbar");
    setTimeout(() => (menu.style.display = "none"), 300);
  }
})
//jump to top
let mybutton = document.getElementById("jump-to-top");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function backtoTop(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
if (mybutton) {
  mybutton.onclick = backtoTop;
}
//change theme
const themes = [
  {
    cherryblossom: 'none',
    color1: 'white',
    color2: 'black',
    color3: 'rgb(147, 224, 255)',
    color4: 'aliceblue',
    switchcolor: '#cefaf8',
    hovercolor: 'rgb(70, 157, 228)',
    menuIcon: '../Photos/listLight.png'
  },
  {
    cherryblossom: 'none',
    color1: 'black',
    color2: 'white',
    color3: 'rgb(30, 62, 75)',
    color4: 'rgba(135, 167, 172, 0.925)',
    switchcolor: '#8d8d8d',
    hovercolor: 'rgb(220, 221, 243)',
    menuIcon: '../Photos/listDark.png'
  },
  {
    cherryblossom: 'block',
    color1: 'rgba(250, 206, 246, 0.829)',
    color2: 'rgb(223, 14, 129)',
    color3: 'rgba(238, 172, 239, 1)',
    color4: 'rgba(255, 232, 253, 0.8)',
    switchcolor: '#fccbf5',
    hovercolor: 'rgb(185, 71, 185)',
    menuIcon: '../Photos/listSakura.png'
  }
];
function applyTheme(theme) {
  document.documentElement.style.setProperty('--cherryblossom', theme.cherryblossom);
  document.documentElement.style.setProperty('--color1', theme.color1);
  document.documentElement.style.setProperty('--color2', theme.color2);
  document.documentElement.style.setProperty('--color3', theme.color3);
  document.documentElement.style.setProperty('--color4', theme.color4);
  document.documentElement.style.setProperty('--switchcolor', theme.switchcolor);
  document.documentElement.style.setProperty('--hovercolor', theme.hovercolor);
  document.getElementById("menuIcon").src = theme.menuIcon;
}

let loadBG = parseInt(localStorage.getItem("bg"));
if (isNaN(loadBG) || loadBG < 0 || loadBG > 2) loadBG = 0; // default to 0 if invalid
applyTheme(themes[loadBG]);

function ChangeTheme(value){
  applyTheme(themes[value]);
  localStorage.setItem("bg", value);
}
//theme dropdown option
const theme_selector = document.querySelector('.theme-option');
const theme_select = theme_selector.children[1]; // select element (after arrow div)
const arrowElem = document.querySelector('.arrow');
const optionStyles = [
  { color: "white", textShadow: "3px 3px 5px rgba(228, 228, 228, 0.973)" },
  { color: "black", textShadow: "1px 1px 5px rgba(92, 88, 88, 0.973)" },
  { color: "rgb(228, 103, 124)", textShadow: "1px 1px 5px rgba(241, 9, 199, 0.973)" }
];
// Set initial value from localStorage or default to 0
theme_select.value = localStorage.getItem('Theme-select-value') || 0;

let dropdownOpen = false;
let dropDown = null;

function animateArrow(up) {
  if (up) {
    arrowElem.classList.remove("rotate-arrow-down");
    void arrowElem.offsetWidth;
    arrowElem.classList.add("rotate-arrow-up");
  } else {
    arrowElem.classList.remove("rotate-arrow-up");
    void arrowElem.offsetWidth;
    arrowElem.classList.add("rotate-arrow-down");
  }
}

function closeDropdown() {
  if (dropDown) {
    animateArrow(false);
    dropDown.remove();
    dropDown = null;
    dropdownOpen = false;
    document.removeEventListener('click', outsideClickHandler);
  }
}

function outsideClickHandler(e) {
  if (!theme_selector.contains(e.target)) {
    closeDropdown();
  }
}

theme_selector.addEventListener('mousedown', e => {
  e.preventDefault();
  if (dropdownOpen) {
    closeDropdown();
    return;
  }
  dropdownOpen = true;
  dropDown = document.createElement('ul');
  dropDown.className = 'dropdown-option';

  [...theme_select.children].forEach((option, i) => {
    setTimeout(() => {
      const dropDownOption = document.createElement('li');
      dropDownOption.textContent = option.textContent;
      Object.assign(dropDownOption.style, optionStyles[i]);
      dropDownOption.addEventListener('mousedown', ev => {
        ev.stopPropagation();
        ChangeTheme(Number(option.value));
        theme_select.value = option.value;
        localStorage.setItem('Theme-select-value', option.value);
        closeDropdown();
      });
      //dropdown animation
      dropDown.appendChild(dropDownOption);
      dropDownOption.classList.remove("open-option");
      void dropDownOption.offsetWidth;
      dropDownOption.classList.add("open-option");
    }, i * 50);
  });
  //close dropdown when clicking outside
  theme_selector.appendChild(dropDown);
  animateArrow(true);
  setTimeout(() => document.addEventListener('click', outsideClickHandler), 0);
});
