function load() {

    document.getElementById('welcome').innerHTML = "Welcome to the page!";
    document.getElementById('welcome').style.fontFamily = "Roboto";
    document.getElementById('welcome').style.fontWeight = "bold";
    document.getElementById('welcome').style.transition = "3s";
   

}


function activate() {

    document.getElementById('output1').innerHTML = "Hello! How are you?"
    document.getElementById('output1').style.fontSize = "26px";
    document.getElementById('output1').style.fontWeight = "bold";
    document.getElementById('output1').style.transition = "3s";


}


function hover() {
    document.getElementById('output2').style.backgroundColor ="green";
    document.getElementById('output2').style.border = "4px solid black";
    document.getElementById('output2').style.height = "350px";
    document.getElementById('output2').style.width = "350px";
    document.getElementById('output2').style.transform = "rotateY(180deg)";
    document.getElementById('output2').style.transition = "3s";
}


function reset() {
    document.getElementById('output2').style.width = "200px";
    document.getElementById('output2').style.height = "200px";
    document.getElementById('output2').style.backgroundColor = "yellow";
    document.getElementById('output2').style.transform = "rotateY(-180deg)";
    document.getElementById('output2').style.border = "2px solid black";

}


function screen() {

    document.getElementById('screen').style.backgroundColor = "green";
}

function screenend() {

    document.getElementById('screen').style.backgroundColor = "red";
}


function keyboard() {
    document.getElementById('keybor').style.backgroundColor = "green";
}


function keytest() {


    document.getElementById('test').style.transform = "scale(0.7)";
    document.getElementById('test').style.border = "2px solid black";
    document.getElementById('test').style.borderRadius = "50%";
    document.getElementById('test').style.backgroundColor = "red";
    document.getElementById('test').style.transition = "3s";
}