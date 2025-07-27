/*individual section (unique by pages)*/
import { waifuList, waifu_honorable } from './waifudata.js';
function createWaifuElement(waifu, index, { isHonorable = false } = {}) {
  const li = document.createElement('li');
  li.classList.add(index % 2 === 0 ? 'left' : 'right');
  // Name and anime
  const h3 = document.createElement('h3');
  const h4 = document.createElement('h4');
  const div = document.createElement('div');
  // Avatar button
  const btn = document.createElement('button');
  btn.className = 'avt';
  btn.setAttribute('data-index', index);
  // VA and description
  const p = document.createElement('p');
  // Info link
  const a = document.createElement('a');
  a.className = 'info';
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.innerHTML = `More info <img class="link">`;
  div.appendChild(btn);
  div.appendChild(p);
  div.appendChild(a);
  // Switch
  const label = document.createElement('label');
  label.className = 'switch';
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.className = isHonorable ? 'bg-switch-honorable' : 'bg-switch';
  input.setAttribute('data-index', index);
  const slider = document.createElement('span');
  slider.className = 'slider';
  const switchCircle = document.createElement('span');
  switchCircle.className = 'switch-circle';
  label.appendChild(input);
  label.appendChild(slider);
  label.appendChild(switchCircle);
  // Assemble li
  li.appendChild(h3);
  li.appendChild(h4);
  li.appendChild(div);
  li.appendChild(label);
  return li;
}
function renderWaifuList(data, containerSelector, { isHonorable = false } = {}) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  container.innerHTML = ''; // Clear existing content
  data.forEach((waifu, index) => {
    const li = createWaifuElement(waifu, index, { isHonorable });
    container.appendChild(li);
  });
  // Event delegation for avatar buttons
  container.addEventListener('click', function(e) {
    if (e.target.classList.contains('avt')) {
      const idx = e.target.getAttribute('data-index');
      if (isHonorable) {
        Nah(idx); // Or your own handler for honorable mentions
      } else {
        changeAvt(Number(idx));
      }
    }
  });
  // Event delegation for background switches
  container.addEventListener('change', function(e) {
    if (e.target.classList.contains(isHonorable ? 'bg-switch-honorable' : 'bg-switch')) {
      const idx = e.target.getAttribute('data-index');
      if (isHonorable) {
        changeBG(Number(idx), true);
      } else {
        changeBG(Number(idx), false);
      }
    }
  });
}
renderWaifuList(waifuList, '.waifulist', { isHonorable: false });
renderWaifuList(waifu_honorable, '.honorable', { isHonorable: true });
//apply animation when scrolling
function setupObservers() {
  const left_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("leftMove", entry.isIntersecting);
    });
  }, { threshold: 0 });
  document.querySelectorAll(".left").forEach(el => left_observer.observe(el));
  const right_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("rightMove", entry.isIntersecting);
    });
  }, { threshold: 0 });
  document.querySelectorAll(".right").forEach(el => right_observer.observe(el));
}
setupObservers();
//declare variables
const sortKeys = ['personality', 'appearance', 'voice'];
const charLen = waifuList.length;
let arr = JSON.parse(localStorage.getItem('arr')) || [new Int16Array(30), new Int16Array(30), new Int16Array(30)];
let type = Number(localStorage.getItem('type')) || 0;
const sortChar = () => waifuList.sort((a, b) => a[sortKeys[type]] - b[sortKeys[type]]);
const h3s = document.querySelectorAll('h3');
const h4s = document.querySelectorAll('h4');
const avts = document.querySelectorAll('.avt');
const switches = document.querySelectorAll('.switch-circle');
const infos = document.querySelectorAll('.info');
const ps = document.querySelectorAll('p');
const inputs = document.querySelectorAll('input');
const audioElem = document.querySelector('audio');
const loadscreen = document.getElementById('loadscreen');
const waitElem = document.getElementById('wait');
function updateDOM() {
    sortChar();
    waifuList.forEach((c, i) => {
        h3s[i].innerHTML = c.name;
        h4s[i].innerHTML = c.anime;
        avts[i].style.backgroundImage = switches[i].style.backgroundImage = c.avt[arr[type][i]];
        ps[i].innerHTML = c.info[type];
        infos[i].href = c.link;
    });
    // Honorable mentions
    waifu_honorable.forEach((c, i) => {
        h3s[charLen + i].innerHTML = c.name;
        h4s[charLen + i].innerHTML = c.anime;
        avts[charLen + i].style.backgroundImage = switches[charLen + i].style.backgroundImage = c.avt;
        ps[charLen + i].innerHTML = c.info;
        infos[charLen + i].href = c.link;
    });

}
updateDOM();
//set sort type
function setType(t) {
    type = t;
    localStorage.setItem('type', type);
    sortAndReload();
}
const Personality = () => setType(0);
const Appearance = () => setType(1);
const Voice = () => setType(2);
function sortAndReload() {
    loadscreen.style.display = "block";
    waitElem.innerHTML = "Please wait"; 
    let dots = 0;
    const interval = setInterval(() => { waitElem.innerHTML += '.'; dots++; }, 300);
    setTimeout(() => {
        clearInterval(interval);
        location.reload();
    }, 1000);
}
//change background
function changeBG (index, isHonorable = false) {
  const list = isHonorable ? waifu_honorable : waifuList;
  const offset = isHonorable ? charLen : 0;
  const fullIndex = offset + index;
  if (inputs[fullIndex].checked) {
      if (!isHonorable) {
          audioElem.src = list[index].audio;
          audioElem.play();
      }
      setTimeout(() => {document.body.style.backgroundImage = list[index].bg;}, 300);
      inputs.forEach((inp, i) => {if (i !== fullIndex) inp.checked = false;});
  } 
  else {
      setTimeout(() => document.body.style.backgroundImage = 'none', 300);
  }
}
//change waifu avt
window.changeAvt = (index) => {
    avts[index].classList.remove("changeavt");
    void avts[index].offsetWidth;
    avts[index].classList.add("changeavt");
    arr[type][index] = (arr[type][index] + 1) % 4;
    setTimeout(() => {
        avts[index].style.backgroundImage = switches[index].style.backgroundImage = waifuList[index].avt[arr[type][index]];
    }, 900);
    // Sync all sort types
    arr[0][waifuList[index].personality - 1] = arr[1][waifuList[index].appearance - 1] = arr[2][waifuList[index].voice - 1] = arr[type][index];
    localStorage.setItem('arr', JSON.stringify(arr));
}
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
    menuIcon: '../Photos/listLight.png',
    linkIcon: '../Photos/linkLight.png'
},
{
    cherryblossom: 'none',
    color1: 'black',
    color2: 'white',
    color3: 'rgb(30, 62, 75)',
    color4: 'rgba(135, 167, 172, 0.925)',
    switchcolor: '#8d8d8d',
    hovercolor: 'rgb(220, 221, 243)',
    menuIcon: '../Photos/listDark.png',
    linkIcon: '../Photos/linkDark.png'
},
{
    cherryblossom: 'block',
    color1: 'rgba(250, 206, 246, 0.829)',
    color2: 'rgb(223, 14, 129)',
    color3: 'rgba(238, 172, 239, 1)',
    color4: 'rgba(255, 232, 253, 0.8)',
    switchcolor: '#fccbf5',
    hovercolor: 'rgb(185, 71, 185)',
    menuIcon: '../Photos/listSakura.png',
    linkIcon: '../Photos/linkSakura.png'
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
    document.querySelectorAll(".link").forEach(img => {img.src = theme.linkIcon;});
}
let loadBG = parseInt(localStorage.getItem("bg"));
if (isNaN(loadBG) || loadBG < 0 || loadBG > 2) loadBG = 0; // default to 0 if invalid
applyTheme(themes[loadBG]);
function ChangeTheme(value){
    applyTheme(themes[value]);
    localStorage.setItem("bg", value);
}
//create dropdown option
const theme_selector = document.querySelector('.theme-option');
const theme_select = theme_selector.children[1]; // select element (after arrow div)
const sort_selector = document.querySelector('.custom-sort');
const sort_select = sort_selector.children[1]; // select element (after arrow div)
const arrowElem = document.querySelector('.arrow');
const optionStyles = [
    { color: "white", textShadow: "3px 3px 5px rgba(228, 228, 228, 0.973)" },
    { color: "black", textShadow: "1px 1px 5px rgba(92, 88, 88, 0.973)" },
    { color: "rgb(228, 103, 124)", textShadow: "1px 1px 5px rgba(241, 9, 199, 0.973)" }
];
function setupCustomDropdown(selector, selectElem, arrowElem, onSelect, optionStyles) {
    let dropdownOpen = false;
    let dropDown = null;
    //arrow animation
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
    //close dropdown
    function closeDropdown() {
        if (dropDown) {
        animateArrow(false);
        dropDown.remove();
        dropDown = null;
        dropdownOpen = false;
        document.removeEventListener('click', outsideClickHandler);
        }
    }
    //close dropdown when clicking outside
    function outsideClickHandler(e) {
        if (!selector.contains(e.target)) {
          closeDropdown();
        }
    }
    selector.addEventListener('mousedown', e => {
        e.preventDefault();
        if (dropdownOpen) {
            closeDropdown();
            return;
        }
        dropdownOpen = true;
        dropDown = document.createElement('ul');
        dropDown.className = 'dropdown-option';
        [...selectElem.children].forEach((option, i) => {
        setTimeout(() => {
            const dropDownOption = document.createElement('li');
            dropDownOption.textContent = option.textContent;
            if (optionStyles && optionStyles[i]) {
              Object.assign(dropDownOption.style, optionStyles[i]);
            }
            dropDownOption.addEventListener('mousedown', ev => {
              ev.stopPropagation();
              onSelect(option.value);
              selectElem.value = option.value;
              closeDropdown();
            });
            dropDown.appendChild(dropDownOption);
            dropDownOption.classList.remove("open-option");
            void dropDownOption.offsetWidth;
            dropDownOption.classList.add("open-option");
        }, i * 50);
        });
        selector.appendChild(dropDown);
        animateArrow(true);
        setTimeout(() => document.addEventListener('click', outsideClickHandler), 0);
    });
}
//restore previous theme
const savedThemeValue = localStorage.getItem('Theme-select-value');
if (savedThemeValue !== null) {
    theme_select.value = savedThemeValue;
}
//restore previous sort
const savedSortValue = localStorage.getItem('sort-select-value');
if (savedSortValue !== null) {
    sort_select.value = savedSortValue;
}
//theme dropdown
setupCustomDropdown(
    theme_selector, 
    theme_select, 
    arrowElem, 
    (value) => {
        ChangeTheme(Number(value));
        localStorage.setItem('Theme-select-value', value);
    }, 
    optionStyles
);
//sort dropdown
setupCustomDropdown(
    sort_selector, 
    sort_select, 
    arrowElem, 
    (value) => {
        if (value == 0) Personality();
        else if (value == 1) Appearance();
        else if (value == 2) Voice();
        localStorage.setItem('sort-select-value', value);
    }
)
