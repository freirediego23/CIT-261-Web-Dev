function color () {

    document.getElementById("blue").style.color = "blue";
    document.getElementById("blue").style.fontFamily = "Roboto";
    document.getElementById("blue").style.fontWeight = "bold";
}



function change () {

document.getElementById("par").style.color = "black";
document.getElementById("par").style.fontWeight = "bold";
document.getElementById("par").style.transition = "color 2s";
}

function yellow1 (){
document.getElementById("block1").style.backgroundColor = "yellow";
}

function yellow2(){
document.getElementById("block2").style.backgroundColor = "yellow";
}

function yellow3(){
document.getElementById("block3").style.backgroundColor = "yellow";
}

function blue1 (){
    document.getElementById("block1").style.backgroundColor = "blue";
    }

function blue2(){
    document.getElementById("block2").style.backgroundColor = "blue";
}

function blue3() {
    document.getElementById("block3").style.backgroundColor = "blue";
}

function red1 (){
     document.getElementById("block1").style.backgroundColor = "red";
        }
        
function red2 () {
    document.getElementById("block2").style.backgroundColor = "red";
}        

function red3 () {
    document.getElementById("block3").style.backgroundColor = "red";
}



/*Increase square size */

function grow () {

    document.getElementById("block4").style.height = "300px";
    document.getElementById("block4").style.width = "300px";
    document.getElementById("block4").style.transition = "2s";
}

function restart () {
    document.getElementById("block4").style.height = "200px";
    document.getElementById("block4").style.width = "200px";
    document.getElementById("block4").style.transition = "2s";
    
}


/*Move Object */

function move () {

    var elem = document.getElementById("block5");
    var position = 0;
    var animate = setInterval(animate, 4);
    
    function animate() {
        if (position == 600) {
          clearInterval(animate);
        } else {
            position++; 
          elem.style.left = position + 'px'; 
        }
      }
}


/*Conditional Statements */

function cloud() {
    b = document.getElementById('cloudip').value;

    if (b == "red" || b == "Red") {
        document.getElementById('cloudoutput').innerHTML = "That is Correct!";
        document.getElementById('block6').style.backgroundColor = "red";
        
    }

    else if (b == "blue" || b == "Blue") {
        document.getElementById('cloudoutput').innerHTML = "That is Correct!";
        document.getElementById('block6').style.backgroundColor = "blue";
    }

    else if (b == "green" || b == "Green") {
        document.getElementById('cloudoutput').innerHTML = "That is Correct!";
        document.getElementById('block6').style.backgroundColor = "green";
    }

    else if (b == "red" || b == "Red") {
        document.getElementById('cloudoutput').innerHTML = "That is Correct!";
        document.getElementById('block6').style.backgroundColor = "red";
    }

    else if (b == "yellow" || b == "Yellow") {
        document.getElementById('cloudoutput').innerHTML = "That is Correct!";
        document.getElementById('block6').style.backgroundColor = "yellow";
    }

    else if (b == "black" || b == "Black") {
        document.getElementById('cloudoutput').innerHTML = "That is Correct!";
        document.getElementById('block6').style.backgroundColor = "black";
    }

    else if (b == "orange" || b == "Orange") {
        document.getElementById('cloudoutput').innerHTML = "That is Correct!";
        document.getElementById('block6').style.backgroundColor = "orange";
    }

    else if (b == "white" || b == "White") {
        document.getElementById('cloudoutput').innerHTML = "That is Correct!";
        document.getElementById('block6').style.backgroundColor = "white";
    }

    else if (b == "purple" || b == "Purple") {
        document.getElementById('cloudoutput').innerHTML = "That is Correct!";
        document.getElementById('block6').style.backgroundColor = "purple";
    }

    else {document.getElementById('cloudoutput').innerHTML = "I didn't know that color, sorry!"; }

}


/*Change object size */

function changesize() {

    var input = parseFloat(document.getElementById('sizevalue').value);

    if ( input > 0) {
        document.getElementById('block7').style.height = input + 'px';
        document.getElementById('block7').style.width = input + 'px';
        document.getElementById('block7').style.transition = '2s';
    }

}



/*CSS animation */


function trigger () {

    document.getElementById('block8').style.animationName = 'move';
    document.getElementById('block8').style.animationDuration = '5s';
    document.getElementById('block8').style.animationFillMode = 'forwards';
    
    

}

function reset2 () {

    document.getElementById('block8').style.animationName = 'restart';
    document.getElementById('block8').style.animationDuration = '5s';
    document.getElementById('block8').style.animationFillMode = 'forwards';
}


function transform() {
    document.getElementById('block9').style.animationName = 'transfr';
    document.getElementById('block9').style.animationDuration = '5s';
    document.getElementById('block9').style.animationFillMode = 'forwards';
    document.getElementById('block9').style.transition = '4s';

      document.getElementById('block9').style.transform = 'rotate(50deg)';
    // document.getElementById('block9').style.transform = 'rotateY(80deg)';
    //  document.getElementById('block9').style.transform = 'scale(2,0.5)';
    

}


function transform2() {

    // document.getElementById('block10').style.transform = 'rotateX(360deg)';
    document.getElementById('block10').style.transform = 'rotateX(360deg)' + 'rotateY(360deg)';
    document.getElementById('block10').style.transition = '4s';


}
