/*individual section (unique by pages)*/
//variables
const char = [
    {
        personality: 1,
        appearance: 4,
        voice: 4,
        name: "Nishimiya Shouko",
        anime: "Koe no katachi",
        avt: [
            "url('https://i.pinimg.com/originals/81/c1/c6/81c1c6eaf82af8c8be2e2b27d9370ac2.jpg')",
            "url('https://i.pinimg.com/originals/2b/bc/5e/2bbc5e714ca5291b8c6959a90d4385d9.jpg')",
            "url('https://i.pinimg.com/originals/b0/72/47/b072476c24c76403a6a5fab373e2b1da.jpg')",
            "url('https://i.pinimg.com/originals/90/ea/83/90ea832d6107d0729ad5565e5db0a70c.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/69/d8/75/69d8754cdbf6263c8fbbcc53bb086cf7.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606938-corona-689894639-kaguya-noise-1.mp3",
        info: document.getElementsByTagName("p")[0].innerHTML
    },
    {
        personality: 2,
        appearance: 1,
        voice: 3,
        name: "Kurobane Yusa",
        anime: "Charlotte",
        avt: [
            "url('https://i.pinimg.com/originals/1e/de/7d/1ede7d1a1d3c754892acb8c973a44858.jpg')",
            "url('https://i.pinimg.com/originals/b3/7f/43/b37f43dccdd6aaf7a0f338984fda679c.jpg')",
            "url('https://i.pinimg.com/originals/1b/3a/1e/1b3a1e13e1f3c380134b2232399fd0db.jpg')",
            "url('https://i.pinimg.com/originals/d6/b3/5e/d6b35eea6a63a56c4fd2774f042cceb8.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/e3/f1/b0/e3f1b05ad0f82c6b048e6a58b27b5d2a.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        info: document.getElementsByTagName("p")[1].innerHTML
    },
    {
        personality: 3,
        appearance: 2,
        voice: 1,
        name: "Shiina Mashiro",
        anime: "Sakurasou no Pet na Kanojo",
        avt: [
            "url('https://i.pinimg.com/originals/7c/e3/c8/7ce3c89c6530b9b61b9deec77a39a2f5.jpg')",
            "url('https://i.pinimg.com/originals/aa/b1/76/aab17609d0152435602d8163c49205fd.jpg')",
            "url('https://i.pinimg.com/originals/3f/6b/db/3f6bdba68792ebe2e4aac00e5fe7e70b.jpg')",
            "url('https://i.pinimg.com/originals/3e/ad/63/3ead636da3c80a59bb3de91d94b6d96d.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/14/68/eb/1468ebc64153539d362c61f9f9cbb92a.jpg')",
        audio: "https://feeds.soundcloud.com/stream/1493606932-corona-689894639-chika-noise-3.mp3",
        info: document.getElementsByTagName("p")[2].innerHTML
    },
    {
        personality: 4,
        appearance: 3,
        voice: 2,
        name: "Illyasviel von Einzbern",
        anime: "Fate/Stay Night",
        avt: [
            "url('https://i.pinimg.com/originals/1b/36/8c/1b368c4a5da71c8637cef2e161fdab60.jpg')",
            "url('https://i.pinimg.com/originals/a4/17/17/a41717e430f20a2cdfa05896f99d8906.jpg')",
            "url('https://i.pinimg.com/originals/dc/c0/98/dcc0984a5f2f2cb15218317e1ea652cc.jpg')",
            "url('https://i.pinimg.com/originals/40/5a/af/405aafa6115504126fdcdbd58822bc8b.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/91/92/36/919236b1772a23bd465836898b2e5840.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606911-corona-689894639-rikka-noise-1.mp3",
        info: document.getElementsByTagName("p")[3].innerHTML
    }
    
]
var arr = [
    new Int16Array(30), //0: personality
    new Int16Array(30), //1: appearance
    new Int16Array(30)  //2: voice
];
var type = 0; 
//load current status
var currentType = localStorage.getItem('type');
var currentAvts = JSON.parse(localStorage.getItem('arr'));
arr = currentAvts;
if(currentType == 0){type = 0; char.sort(function(a, b){return (a.personality - b.personality)});}
else if (currentType == 1){type = 1; char.sort(function(a, b){return (a.appearance - b.appearance)});}
else if (currentType == 2){type = 2; char.sort(function(a, b){return (a.voice - b.voice)});}
for (var i = 0; i < char.length; i++){
    document.getElementsByTagName("h3")[i].innerHTML = char[i].name;
    document.getElementsByTagName("h4")[i].innerHTML = char[i].anime;
    document.getElementsByClassName("avt")[i].style.backgroundImage = char[i].avt[arr[type][i]];
    document.getElementsByClassName("switch-circle")[i].style.backgroundImage = char[i].avt[arr[type][i]];
    document.getElementsByTagName("p")[i].innerHTML = char[i].info;
}
//sort type
function Personality(){type = 0; localStorage.setItem('type', type); Sort();}
function Appearance(){type = 1; localStorage.setItem('type', type); Sort();}
function Voice(){type = 2; localStorage.setItem('type', type); Sort();}
function Sort(){
    document.getElementById("loadscreen").style.display = "block";
    setInterval(function(){document.getElementById("wait").innerHTML += '.';}, 300);
    setTimeout(function(){
        location.reload();
        document.getElementById("loadscreen").style.display = "none";
        if(type == 0){char.sort(function(a, b){return (a.personality - b.personality)});}
        else if (type == 1){char.sort(function(a, b){return (a.appearance - b.appearance)});}
        else if (type == 2){char.sort(function(a, b){return (a.voice - b.voice)});}
        for (var i = 0; i < char.length; i++){
            document.getElementsByTagName("h3")[i].innerHTML = char[i].name;
            document.getElementsByTagName("h4")[i].innerHTML = char[i].anime;
            document.getElementsByClassName("avt")[i].style.backgroundImage = char[i].avt[arr[type][i]];
            document.getElementsByClassName("switch-circle")[i].style.backgroundImage = char[i].avt[arr[type][i]];
            document.getElementsByTagName("p")[i].innerHTML = char[i].info;
        }
    }, 1000);
}
//change bg
function changeBG(index){
    var check = document.getElementsByTagName("input")[index].checked;
    if(check == true){
        document.getElementsByTagName("audio")[0].src = char[index].audio;
        document.getElementsByTagName("audio")[0].play();
        setTimeout(function(){document.body.style.backgroundImage = char[index].bg;}, 300);
        for(var i = 0; i < char.length; i++){
            if(i != index) {document.getElementsByTagName("input")[i].checked = false;} //turn off other switches
        }
    }
    else {setTimeout(function(){document.body.style.backgroundImage = 'none';}, 300);} 
}
//change avt
function changeAvt(index){
    document.getElementsByClassName("avt")[index].classList.remove("changeavt");
    void document.getElementsByClassName("avt")[index].offsetWidth; //trigger reflow
    document.getElementsByClassName("avt")[index].classList.add("changeavt");
    if(arr[type][index] == 3) {arr[type][index] = -1;}
    arr[type][index]++;
    setTimeout(function(){
    document.getElementsByClassName("avt")[index].style.backgroundImage = char[index].avt[arr[type][index]];
    document.getElementsByClassName("switch-circle")[index].style.backgroundImage = char[index].avt[arr[type][index]];
    }, 900);
    //update avt array
    arr[0][char[index].personality - 1] = arr[type][index];
    arr[1][char[index].appearance - 1] = arr[type][index];
    arr[2][char[index].voice - 1] = arr[type][index];
    localStorage.setItem('arr', JSON.stringify(arr));
}
//sort option
const sort_selector = document.querySelector('.custom-sort');
const sort_select = sort_selector.children[1]; //exclude children 0 which is the div arrow
sort_select.value = localStorage.getItem('sort-select-value');
if(sort_select.value == ''){sort_select.value = 0;} //set value to 0 if empty localStorage
var sort_click_count = 0;
sort_selector.addEventListener('mousedown', e => {
    e.preventDefault();
    sort_click_count++;
    const sort_select = sort_selector.children[1]; //exclude children 0 which is the div arrow
    const dropDown = document.createElement('ul');
    dropDown.className = 'dropdown-option';
    var i = 0;
    function CreateOption(){
        setTimeout(function(){
        const option = [...sort_select.children][i];
        const dropDownOption = document.createElement('li');
        dropDownOption.textContent = option.textContent;
        dropDownOption.addEventListener('mousedown', e => {
            e.stopPropagation();
            if (option.value == 0) {Personality();}
            else if (option.value == 1) {Appearance();}
            else if (option.value == 2) {Voice();}
            sort_select.value = option.value;
            localStorage.setItem('sort-select-value', option.value);
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
    sort_selector.appendChild(dropDown);
    //close dropdown when clicking outside
    document.addEventListener('click', e => {
        if((sort_click_count % 2 == 0) || !sort_selector.contains(e.target)){
            if(document.getElementsByClassName("arrow")[1].classList.contains("rotate-arrow-down") == false){
                document.getElementsByClassName("arrow")[1].classList.remove("rotate-arrow-up");
                void document.getElementsByClassName("arrow")[1].offsetWidth; //trigger reflow
                document.getElementsByClassName("arrow")[1].classList.add("rotate-arrow-down");
                sort_click_count++;
            }
            dropDown.remove();
        }
    })
    //arrow animation
    if(document.getElementsByClassName("arrow")[1].classList.contains("rotate-arrow-up") == false){
        document.getElementsByClassName("arrow")[1].classList.remove("rotate-arrow-down");
        void document.getElementsByClassName("arrow")[1].offsetWidth; //trigger reflow
        document.getElementsByClassName("arrow")[1].classList.add("rotate-arrow-up");
    }
    else if (document.getElementsByClassName("arrow")[1].classList.contains("rotate-arrow-down") == false){
        document.getElementsByClassName("arrow")[1].classList.remove("rotate-arrow-up");
        void document.getElementsByClassName("arrow")[1].offsetWidth; //trigger reflow
        document.getElementsByClassName("arrow")[1].classList.add("rotate-arrow-down");
    }
})

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
    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
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
var loadBG = parseInt(localStorage.getItem("bg"));
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
    document.documentElement.style.setProperty('--hovercolor', 'rgb(238, 241, 243)');
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
    }
    else if (value == 1){
        document.getElementsByTagName("body")[0].style.backgroundImage = "none";
        document.documentElement.style.setProperty('--cherryblossom', 'none');
        document.documentElement.style.setProperty('--color1', 'black');
        document.documentElement.style.setProperty('--color2', 'white');
        document.documentElement.style.setProperty('--color3', 'rgb(30, 62, 75)');
        document.documentElement.style.setProperty('--color4', 'rgba(135, 167, 172, 0.925)');
        document.documentElement.style.setProperty('--switchcolor', '#8d8d8d');
        document.documentElement.style.setProperty('--hovercolor', 'rgb(238, 241, 243)');
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
    }
    if (document.getElementsByClassName("arrow")[0].classList.contains("rotate-arrow-down") == false){
        document.getElementsByClassName("arrow")[0].classList.remove("rotate-arrow-up");
        void document.getElementsByClassName("arrow")[0].offsetWidth; //trigger reflow
        document.getElementsByClassName("arrow")[0].classList.add("rotate-arrow-down");
    }
    localStorage.setItem("bg", value);
    Theme_click_count++;
    for(var i = 0; i < char.length; i++){document.getElementsByTagName("input")[i].checked = false;} //turn off switches
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
