let canvas = document.getElementById("canvas");
let pen = canvas.getContext("2d");
function begin(){
    document.getElementById("MenuScene").style.visibility = "hidden";
    level1.display();
    document.getElementById(level1.id).style.visibility = "visible";
}
function continueLevel(){
    document.getElementById("MenuScene").style.visibility = "hidden";
    let currentLevel = JSON.parse(localStorage.getItem('levels'));
    let current = new Levels(currentLevel.id);
    current.display();
    document.getElementById(current.id).style.visibility = "visible";
}