let canvas = document.getElementById("canvas");
let pen = canvas.getContext("2d");
function begin(){
    document.getElementById("MenuScene").style.visibility = "hidden";
    level1.display();
    document.getElementById(level1.id).style.visibility = "visible";
}