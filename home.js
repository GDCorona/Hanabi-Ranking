/*individual section (unique by pages)*/
/*delay link*/
function delay (URL) {
  document.getElementById("loadscreen").style.display = "block";
  setInterval(function(){document.getElementById("wait").innerHTML += '.';}, 300);
  setTimeout(function() { window.location = URL; document.getElementById("loadscreen").style.display = "none";}, 1000);
}
/*shared section (for every pages)*/
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
      localStorage.setItem('background', -1);
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
      localStorage.setItem('background', -1);
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
      localStorage.setItem('background', -1);
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
/*secret*/
var currentbg = -1;
var currentSounds = -1;
var check = true;
var body = document.getElementsByTagName("body")[0];
var secretsounds = document.getElementById("secretSounds");
var bg = 
[
    "url('https://i.pinimg.com/originals/52/a2/62/52a262d0944bcf487bf6c323c7c64c67.jpg')",
    "url('https://i.pinimg.com/originals/28/61/fe/2861fe7c95b8124208fecdf63f818572.jpg')",
    "url('https://i.pinimg.com/originals/5f/32/73/5f32731ab2f9e18ce9509913c05eac4b.jpg')",
    "url('https://i.pinimg.com/originals/bb/37/a6/bb37a6037cce5fc895a8450914a07458.jpg')",
    "url('https://i.pinimg.com/originals/b3/a7/99/b3a79923cb5dc7add78054d5d005801a.jpg')",
    "url('https://i.pinimg.com/originals/26/59/93/2659934c11ee4ca9305de593b8c1e401.jpg')",
    "url('https://i.pinimg.com/originals/e9/54/d1/e954d16d765536dd99186667953a5f66.jpg')",
    "url('https://i.pinimg.com/originals/5b/c8/ae/5bc8aeb83131e38bbab8ba96fc4959d8.jpg')",
    "url('https://i.pinimg.com/originals/7c/26/c8/7c26c8d4fe0b8b6f4ce595a55768488f.jpg')",
    "url('https://i.pinimg.com/originals/40/6b/5d/406b5d7bcae6ebdfacd5ce20d7c3a823.jpg')"
];
var sounds = 
[
    "https://feeds.soundcloud.com/stream/1493606947-corona-689894639-kaguya-noise-2.mp3",
    "https://feeds.soundcloud.com/stream/1493606929-corona-689894639-chika-noise-2.mp3",
    "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
    "https://feeds.soundcloud.com/stream/1493606914-corona-689894639-rikka-noise-2.mp3",
    "https://feeds.soundcloud.com/stream/1602173829-corona-689894639-jibril-voice.mp3"
];
var background = parseInt(localStorage.getItem('background'));
if(background == -1) {body.style.backgroundImage = "none";}
else{body.style.backgroundImage = bg[background];}
function runSecret(){
    if(check) {
        check = false;
        randombg(); 
        randomSounds(); 
        setTimeout(function(){check = true;}, 3000);
    }
    else {alert("Too fast!");}
}
function randombg(){
    var random = Math.floor(Math.random() * 10);
    if(currentbg == random){randombg();}
    else{
        currentbg = random;
        body.style.backgroundImage = bg[currentbg];
        localStorage.setItem('background', currentbg);
    }
}
function randomSounds(){
    var random = Math.floor(Math.random() * 5);
    if(currentSounds == random){randomSounds();}
    else{
        currentSounds = random;
        secretsounds.src = sounds[currentSounds];
        secretsounds.play();
    }
}
