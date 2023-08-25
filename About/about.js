/*shared section (for every pages)*/
//open menu
function openNav(){
  document.getElementById("menu").style.display = "block";
  document.getElementsByClassName("navbar")[0].classList.remove("close-navbar");
  void document.getElementsByClassName("navbar")[0].offsetWidth; //trigger reflow
  document.getElementsByClassName("navbar")[0].classList.add("open-navbar");
}
//close menu
function closeNav(){
  setTimeout(function() {document.getElementById("menu").style.display = "none";}, 300);
  document.getElementsByClassName("navbar")[0].classList.remove("open-navbar");
  void document.getElementsByClassName("navbar")[0].offsetWidth; //trigger reflow
  document.getElementsByClassName("navbar")[0].classList.add("close-navbar");
}
document.addEventListener('click', e => {
  if(document.querySelector("#menu").contains(e.target) && !document.querySelector(".navbar").contains(e.target)){
      setTimeout(function() {document.getElementById("menu").style.display = "none";}, 300);
      document.getElementsByClassName("navbar")[0].classList.remove("open-navbar");
      void document.getElementsByClassName("navbar")[0].offsetWidth; //trigger reflow
      document.getElementsByClassName("navbar")[0].classList.add("close-navbar");
  }
})
//jump to top
let mybutton = document.getElementById("jump-to-top");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function backtoTop(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//change theme
var loadBG = parseInt(localStorage.getItem("bg")); //load current theme
if (loadBG == null) loadBG = 0;
if(loadBG == 0){
  document.getElementsByTagName("body")[0].style.backgroundImage = "none";
  document.documentElement.style.setProperty('--cherryblossom', 'none');
  document.documentElement.style.setProperty('--color1', 'white');
  document.documentElement.style.setProperty('--color2', 'black');
  document.documentElement.style.setProperty('--color3', 'rgb(147, 224, 255)');
  document.documentElement.style.setProperty('--color4', 'aliceblue');
  document.documentElement.style.setProperty('--switchcolor', '#cefaf8');
  document.documentElement.style.setProperty('--hovercolor', 'rgb(70, 157, 228)');
  document.getElementById("menuIcon").src = "listLight.png";
}
else if (loadBG == 1){
  document.getElementsByTagName("body")[0].style.backgroundImage = "none";
  document.documentElement.style.setProperty('--cherryblossom', 'none');
  document.documentElement.style.setProperty('--color1', 'black');
  document.documentElement.style.setProperty('--color2', 'white');
  document.documentElement.style.setProperty('--color3', 'rgb(30, 62, 75)');
  document.documentElement.style.setProperty('--color4', 'rgba(135, 167, 172, 0.925)');
  document.documentElement.style.setProperty('--switchcolor', '#8d8d8d');
  document.documentElement.style.setProperty('--hovercolor', 'rgb(220, 221, 243)');
  document.getElementById("menuIcon").src = "listDark.png";
}
else if (loadBG == 2){
  document.getElementsByTagName("body")[0].style.backgroundImage = "none";
  document.documentElement.style.setProperty('--cherryblossom', 'block');
  document.documentElement.style.setProperty('--color1', 'rgba(250, 206, 246, 0.829)');
  document.documentElement.style.setProperty('--color2', 'rgb(223, 14, 129)');
  document.documentElement.style.setProperty('--color3', 'rgb(238, 172, 239)');
  document.documentElement.style.setProperty('--color4', 'rgba(255, 232, 253, 0.8)');
  document.documentElement.style.setProperty('--switchcolor', '#fccbf5');
  document.documentElement.style.setProperty('--hovercolor', 'rgb(185, 71, 185)');
  document.getElementById("menuIcon").src = "listSakura.png";
}
var Theme_click_count = 0;
function ChangeTheme(value){
  if(value == 0){
      document.getElementsByTagName("body")[0].style.backgroundImage = "none";
      document.documentElement.style.setProperty('--cherryblossom', 'none');
      document.documentElement.style.setProperty('--color1', 'white');
      document.documentElement.style.setProperty('--color2', 'black');
      document.documentElement.style.setProperty('--color3', 'rgb(147, 224, 255)');
      document.documentElement.style.setProperty('--color4', 'aliceblue');
      document.documentElement.style.setProperty('--switchcolor', '#cefaf8');
      document.documentElement.style.setProperty('--hovercolor', 'rgb(70, 157, 228)');
      document.getElementById("menuIcon").src = "listLight.png";
  }
  else if (value == 1){
      document.getElementsByTagName("body")[0].style.backgroundImage = "none";
      document.documentElement.style.setProperty('--cherryblossom', 'none');
      document.documentElement.style.setProperty('--color1', 'black');
      document.documentElement.style.setProperty('--color2', 'white');
      document.documentElement.style.setProperty('--color3', 'rgb(30, 62, 75)');
      document.documentElement.style.setProperty('--color4', 'rgba(135, 167, 172, 0.925)');
      document.documentElement.style.setProperty('--switchcolor', '#8d8d8d');
      document.documentElement.style.setProperty('--hovercolor', 'rgb(220, 221, 243)');
      document.getElementById("menuIcon").src = "listDark.png";
  }
  else if (value == 2){
      document.getElementsByTagName("body")[0].style.backgroundImage = "none";
      document.documentElement.style.setProperty('--cherryblossom', 'block');
      document.documentElement.style.setProperty('--color1', 'rgba(250, 206, 246, 0.829)');
      document.documentElement.style.setProperty('--color2', 'rgb(223, 14, 129)');
      document.documentElement.style.setProperty('--color3', 'rgba(238, 172, 239, 1)');
      document.documentElement.style.setProperty('--color4', 'rgba(255, 232, 253, 0.8)');
      document.documentElement.style.setProperty('--switchcolor', '#fccbf5');
      document.documentElement.style.setProperty('--hovercolor', 'rgb(185, 71, 185)');
      document.getElementById("menuIcon").src = "listSakura.png";
  }
  if (document.getElementsByClassName("arrow")[0].classList.contains("rotate-arrow-down") == false){
      document.getElementsByClassName("arrow")[0].classList.remove("rotate-arrow-up");
      void document.getElementsByClassName("arrow")[0].offsetWidth; //trigger reflow
      document.getElementsByClassName("arrow")[0].classList.add("rotate-arrow-down");
  }
  localStorage.setItem("bg", value);
  Theme_click_count++;
}
const theme_selector = document.querySelector('.theme-option');
const theme_select = theme_selector.children[1]; //exclude children 0 which is the div arrow
theme_select.value = localStorage.getItem('Theme-select-value');
console.log(theme_select.value);
if(theme_select.value == ''){theme_select.value = 0;} //set value to 0 if empty localStorage
theme_selector.addEventListener('mousedown', e => {
  e.preventDefault();
  Theme_click_count++;
  const theme_select = theme_selector.children[1]; //exclude children 0 which is the div arrow
  const dropDown = document.createElement('ul');
  dropDown.className = 'dropdown-option';
  var i = 0;
  function CreateOption(){
      setTimeout(function(){
      const option = [...theme_select.children][i];
      const dropDownOption = document.createElement('li');
      dropDownOption.textContent = option.textContent;
      if(i == 0){dropDownOption.style.color = "white"; dropDownOption.style.textShadow = "3px 3px 5px rgba(228, 228, 228, 0.973)";}
      else if(i == 1){dropDownOption.style.color = "black"; dropDownOption.style.textShadow = "1px 1px 5px rgba(92, 88, 88, 0.973)";}
      else if(i == 2){dropDownOption.style.color = "rgb(228, 103, 124)"; dropDownOption.style.textShadow = "1px 1px 5px rgba(241, 9, 199, 0.973)";}
      dropDownOption.addEventListener('mousedown', e => {
          e.stopPropagation();
          if (option.value == 0) {ChangeTheme(0);}
          else if (option.value == 1) {ChangeTheme(1);}
          else if (option.value == 2) {ChangeTheme(2);}
          theme_select.value = option.value;
          localStorage.setItem('Theme-select-value', option.value);
          dropDown.remove();
      })
      //dropdown animation
      dropDown.appendChild(dropDownOption);
      dropDownOption.classList.remove("open-option");
      void dropDownOption.offsetWidth; //trigger reflow
      dropDownOption.classList.add("open-option");
      i++;
      if(i < 3){CreateOption();}
      }, 50);
  }
  CreateOption();
  theme_selector.appendChild(dropDown);
  //close dropdown when clicking outside
  document.addEventListener('click', e => {
      if((Theme_click_count % 2 == 0) || !theme_selector.contains(e.target)){
          if(document.getElementsByClassName("arrow")[0].classList.contains("rotate-arrow-down") == false){
              document.getElementsByClassName("arrow")[0].classList.remove("rotate-arrow-up");
              void document.getElementsByClassName("arrow")[0].offsetWidth; //trigger reflow
              document.getElementsByClassName("arrow")[0].classList.add("rotate-arrow-down");
              Theme_click_count++;
          }
          dropDown.remove();
      }
  })
  //arrow animation
  if(document.getElementsByClassName("arrow")[0].classList.contains("rotate-arrow-up") == false){
      document.getElementsByClassName("arrow")[0].classList.remove("rotate-arrow-down");
      void document.getElementsByClassName("arrow")[0].offsetWidth; //trigger reflow
      document.getElementsByClassName("arrow")[0].classList.add("rotate-arrow-up");
  }
  else if (document.getElementsByClassName("arrow")[0].classList.contains("rotate-arrow-down") == false){
      document.getElementsByClassName("arrow")[0].classList.remove("rotate-arrow-up");
      void document.getElementsByClassName("arrow")[0].offsetWidth; //trigger reflow
      document.getElementsByClassName("arrow")[0].classList.add("rotate-arrow-down");
  }
})
