let d = new Date();
document.getElementById("date").innerHTML = d;
const char = [
{
    difficuly: 1,
    design: 3,
    name: "MELTDOWN",
    pic: 'https://i.pinimg.com/564x/4c/68/9f/4c689f71305855c7527db1855d34d0d7.jpg'
},
{
    difficuly: 2,
    design: 1,
    name: "Novalis",
    pic: 'https://i.pinimg.com/564x/ca/39/bc/ca39bcd7ef762d3778d478398eb4d883.jpg'
},
{
    difficuly: 3,
    design: 2,
    name: "Marathon",
    pic: 'https://i.pinimg.com/564x/77/62/54/7762543a460335d4e9c61c75f6d1ca07.jpg'
}
]
const names = [];
const pics = []
const storedNames = JSON.parse(localStorage.getItem('names'));
const storedPics = JSON.parse(localStorage.getItem('pics'));
for (var i = storedNames.length - 3; i < storedNames.length; i++){
    document.getElementsByTagName("p")[i + 3 - storedNames.length].innerHTML = storedNames[i];
    document.getElementsByTagName("img")[i + 3 - storedNames.length].src = storedPics[i];
    document.getElementsByTagName("h3")[0].innerHTML += storedNames[i] + '<br>';
}

function SortByDif(){
    char.sort(function(a, b){return (a.difficuly - b.difficuly)});
    for (var i = 0; i < 3; i++){
        document.getElementsByTagName("p")[i].innerHTML = char[i].name;
        names.push(char[i].name);
        document.getElementsByTagName("img")[i].src = char[i].pic;
        pics.push(char[i].pic);
    }
    localStorage.setItem('names', JSON.stringify(names));
    localStorage.setItem('pics', JSON.stringify(pics));
}
function SortByDes(){
    char.sort(function(a, b){return (a.design - b.design)});
    for (var i = 0; i < 3; i++){
        document.getElementsByTagName("p")[i].innerHTML = char[i].name;
        names.push(char[i].name);
        document.getElementsByTagName("img")[i].src = char[i].pic;
        pics.push(char[i].pic);
    }
    localStorage.setItem('names', JSON.stringify(names));
    localStorage.setItem('pics', JSON.stringify(pics));
}
