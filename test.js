let d = new Date();
document.getElementById("date").innerHTML = d;
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
    document.documentElement.style.setProperty('--display', 'block');
    setInterval(function(){document.getElementById("wait").innerHTML += '.';}, 300);
    setTimeout(function(){
        location.reload();
        document.documentElement.style.setProperty('--display', 'none');
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
        setTimeout(function(){document.body.style.backgroundImage = char[index].bg;}, 300);
        for(var i = 0; i < 4; i++){
            if(i != index) {document.getElementsByTagName("input")[i].checked = false;}
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
const selector = document.querySelector('.custom-sort');
const select = selector.children[1]; //exclude children 0 which is the div arrow
select.value = localStorage.getItem('select-value');
if(select.value == ''){select.value = 0;} //set value to 0 if empty localStorage
var click_count = 0;
selector.addEventListener('mousedown', e => {
    e.preventDefault();
    click_count++;
    const select = selector.children[1]; //exclude children 0 which is the div arrow
    const dropDown = document.createElement('ul');
    dropDown.className = 'sort-option';
    var i = 0;
    function CreateOption(){
        setTimeout(function(){
        const option = [...select.children][i];
        const dropDownOption = document.createElement('li');
        dropDownOption.textContent = option.textContent;
        dropDownOption.addEventListener('mousedown', e => {
            e.stopPropagation();
            if (option.value == 0) {Personality();}
            else if (option.value == 1) {Appearance();}
            else if (option.value == 2) {Voice();}
            select.value = option.value;
            localStorage.setItem('select-value', option.value);
            dropDown.remove();
        })
        dropDown.appendChild(dropDownOption);
        dropDownOption.classList.remove("open-option");
        void dropDownOption.offsetWidth; //trigger reflow
        dropDownOption.classList.add("open-option");
        i++;
        if(i < 3){CreateOption();}
        }, 50);
    }
    CreateOption();
    selector.appendChild(dropDown);
    document.addEventListener('click', e => {
        if((click_count % 2 == 0) || !selector.contains(e.target)){
            if(document.getElementsByClassName("arrow")[0].classList.contains("rotate-arrow-down") == false){
                document.getElementsByClassName("arrow")[0].classList.remove("rotate-arrow-up");
                void document.getElementsByClassName("arrow")[0].offsetWidth; //trigger reflow
                document.getElementsByClassName("arrow")[0].classList.add("rotate-arrow-down");
                click_count++;
            }
            dropDown.remove();
        }
    })
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
