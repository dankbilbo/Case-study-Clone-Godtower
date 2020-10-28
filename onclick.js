function submit(id) {
    let passwordEnter = document.getElementById("input" + id)
    let level = document.getElementById(id);
    if (passwordEnter.value == levels[id].password) {
        level.style.visibility = "hidden";
        console.log(levels[id + 1]);
        levels[id + 1].display();
        document.getElementById(id + 1).style.visibility = "visible";

    } else {
        showDeniedText();
        setTimeout(hideDeniedText, 4000);
    }
}
function showDeniedText(){
    document.getElementById("denied-text" + i).style.visibility = "visible";
}
function hideDeniedText(){
    document.getElementById("denied-text" + i).style.visibility = "hidden";
}
function LevelText(){
    let levelText = document.getElementById("level-text" + i);
    if(Math.round(Date.now() / 1000) % 2 == 1){
        levelText = "LEVEL";
    }else{
        levelText = i;
    }
}