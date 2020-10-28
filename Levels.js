class Levels{
    constructor(id, hints, password) {
        this.id = id;
        this.password = password;
        this.hints = hints;
    }
    display(){
        i = this.id;
        let str = "";
        str += `
        <div id="${i}" class="canvas-container" style="visibility: hidden">
<!--        <img class="imgPannelBot" src="Img/General/password_panel.png" alt="">-->
<!--        <img class="imgPannelTop" src="Img/General/top_panel.png" alt="">-->
        <img class="imgButtonSubmit" onclick="submit(i)" src="Img/General/icon_submit.png" >
        <input id="input${i}" type="text" placeholder="Enter the password">
        <p class="deniedText" id="denied-text${i}" style="visibility: hidden" >ACCESS DENIED</p>
        <p class="levelText" id="level-text${i}" >LEVEL</p>`
        switch (i){
            case 1 :
            case 2 :
                str += `<img  id="img-level${i}" class="imgLevel" src="Img/Level${i}.png" height="322" width="533"/>`;
                break;
            case 3 :
                str += `<img  id="img-level${i}" class="imgLevel" src="Img/Level${i}.png" height="322" width="533"/>`;
                str += `<img id="hint-button${i}"class="imgButtonHint" onclick="showHint()" src="Img/General/icon_next.png">`
                break;
            case 4 :
                str += `<img  id="img-level${i}" class="imgLevel" src="Img/Level${i}.png" />`;
                str += `<img id="hint-button${i}" class="imgButtonHint" onclick="showHint()" src="Img/General/icon_next.png">`
                break;
            case 5 :
                for(let j = 1; j < 15; j++){
                    str += `<img ondrag="" id="img-level${i}-${j}" class="imgLevel" src="Img/Level${i}-${j}.png" />`
                }
                break;
        }
        str += "</div>";
        document.getElementById("display-Level").innerHTML = str;
        changeLevelText();

    }
    setHints(hints){
        this.hints = hints;
    }
    setPassword(password){
        this.password = password;
    }
    setId(id){
        this.id = id;
}
}
let i;
let level0 = new Levels();
let level1 = new Levels();
let level2 = new Levels();
let level3 = new Levels();
let level4 = new Levels();
let level5 = new Levels();
level1.setId(1);
level2.setId(2);
level3.setId(3);
level4.setId(4);
level5.setId(5);
level0.setPassword();
level1.setPassword("kabul");
level2.setPassword("solomon");
level3.setPassword("evilcat");
level4.setPassword("acup");
level5.setPassword("hut");
level3.setHints(["Img/Level3.png", "Img/Level3-1.png"])
level4.setHints(["Img/Level4.png", "Img/Level4-1.png"])
let levels = [level0, level1, level2, level3, level4, level5];
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
        console.log(levels[id + 1]);
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
    let length = levels[i].hints.length;
    for(let j = 0; j < length; j++){
        if(levelImg.src.substring(28,levelImg.src.length) == levels[i].hints[j]){
            buttonHint.style.transform = "rotate(180deg)";
            levelImg.src = levels[i].hints[j + 1];
            break;
        }
        if(levelImg.src.substring(28,levelImg.src.length) == levels[i].hints[length - 1]){
            levelImg.src = levels[i].hints[0];
            buttonHint.style.transform = "rotate(0deg)";
            break;
        }
    }
}