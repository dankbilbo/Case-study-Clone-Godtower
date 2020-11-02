function LevelText(){
    let levelText = document.getElementById("level-text" + i);
    if(Math.round(Date.now() / 1000) % 2 == 1){
        levelText.innerHTML = "LEVEL";
    }else{
        levelText.innerHTML = i;
    }
}
function submit(id) {
    let passwordEnter = document.getElementById("input" + id);
    let level = document.getElementById(id);
    if (passwordEnter.value == levels[id].password) {
        level.style.visibility = "hidden";
        localStorage.setItem("levels", JSON.stringify(levels[id + 1]));
        levels[id + 1].display();
        document.getElementById(id + 1).style.visibility = "visible";

    } else {
        showDeniedText();
        setTimeout(hideDeniedText, 3000);
    }
}
function showDeniedText(){
    document.getElementById("denied-text" + i).style.visibility = "visible";
}
function hideDeniedText(){
    document.getElementById("denied-text" + i).style.visibility = "hidden";
}
function changeLevelText(){
    setInterval(LevelText, 100);
}
function showHint(){
    let levelImg = document.getElementById("img-level" + i);
    let buttonHint = document.getElementById("hint-button" + i);
    // var length = levelImg.src.length;
    let length = levels[i].hints.length;
    for(let j = 0; j < levels[i].hints.length; j++){
        if(levelImg.src.substring(levelImg.src.length - 14,levelImg.src.length) == levels[i].hints[j]){
            buttonHint.style.transform = "rotate(180deg)";
            levelImg.src = levels[i].hints[j + 1];
            break;
        }
        if(levelImg.src.substring(levelImg.src.length - 16,levelImg.src.length) == levels[i].hints[length - 1]){
            levelImg.src = levels[i].hints[0];
            buttonHint.style.transform = "rotate(0deg)";
            break;
        }
    }
}
function zoomImage(img){
    img.style.height = "75px";
    img.style.width = "75px";
}
function normalImage(img){
    img.style.height = "50px";
    img.style.width = "50px";
}