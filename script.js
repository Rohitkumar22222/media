function lightmodebutton(){
    document.getElementById('pagebody').style.backgroundColor =  "#ffffff";
    document.getElementById('pagebody').style.color =  "#000000";
    document.getElementById('currentapperance').innerHTML = "currentapperance: Light";
}
function darkmodebutton(){
    document.getElementById('pagebody').style.backgroundColor =  "#000000";
    document.getElementById('pagebody').style.color =  "#ffffff";
    document.getElementById('currentapperance').innerHTML = "currentapperance: Dark";
}
function defaultmodebutton(){
    document.getElementById('pagebody').style.backgroundColor =  "#00FFFF";
    document.getElementById('pagebody').style.color =  "#000000";
    document.getElementById('currentapperance').innerHTML = "currentapperance: Default";
}
