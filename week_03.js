function baseFunction(){

var list = ["Charlie", "Gator", "Stone", "Tango", "Water"];
var file = "";
var i;

for(i = 0; i < list.length; i++) {
    file += list[i] + "<br>";
}


document.getElementById("info").innerHTML = file;

}


function menuFunction(){

    var list = ["<li>Fish", "<li>Cereal", "<li>Rice", "<li>Juice", "<li>Salad"];
    var file = "";
    var i;
    
    for(i = 0; i < list.length; i++) {
        file += list[i] + "<br>";
    }
    
    
    document.getElementById("menu").innerHTML = file;
    
    }



function cardId() {

    var Id = {name: "Name: Kevin", age: "Age: " + 24, status: "Status: Senior"};

    for (var item in Id) {
        alert(Id[item]);
    }

}


function food() {

    let food = ["sushi", "salad", "juice"];
    var b

    for (b of food) {
         
         document.getElementById("forin").innerHTML = b;
    }
    
    
}


function number() {
    
    
    var myBankBalance = 0;
    var msg = "";
    
    while (myBankBalance <= 10) {
        msg = msg + "My bank balance is $" + myBankBalance + " " + "after 1 month" + "<br>";
        myBankBalance ++;
      }
			
    
    document.getElementById("result").innerHTML = msg;
}



function numberfor() {
    var c = 0;
    var text ="";

    do {

        text += "<br>We learn to count! " + c;
  c++; 
    }
    while (c <10);
    document.getElementById("resultfor").innerHTML = text;
    
    
}

/* Windchill Factor ********/

function compute () {

    var tempF = parseFloat(document.getElementById('tempinputbox').value);
    var speed = parseFloat(document.getElementById('windinputbox').value);
    var factor = windChill(tempF, speed);
    
    document.getElementById('outputdiv').innerHTML ='Your answer is:' + ' ' + factor;
    
    }
    
    
    function windChill(tempF, speed) {
    
     return 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16)
                    + 0.4275 * tempF *  Math.pow(speed, 0.16);
    
    }

/**************************************** */

    function randomarray() {

        
        var array = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
        document.getElementById('outputrand').innerHTML = array;
    }


    function rain(){

        a = document.getElementById('rain').value;

        if (a == "yes" || a == "Yes") {
            document.getElementById('output1').innerHTML = "You are crazy! (0 points)";
        }

        else if (a == "no" || a == "No") {
            document.getElementById('output1').innerHTML = "You are not crazy. (10 points)";
   
        }

        else {document.getElementById('output1').innerHTML = "Please type (yes or no) as described."; }

    }

    function salad() {
        b = document.getElementById('salad').value;

        if (b == "yes") {
            document.getElementById('output2').innerHTML = "Why? What type of salad do you like? (0 points)";
        }

        else if (b == "no" || b == "No") {
            document.getElementById('output2').innerHTML = "Nice choice. (10 points)";
   
        }

        else {document.getElementById('output2').innerHTML = "Please type (yes or no) as described."; }

    }

    function pet() {
        c = document.getElementById('pet').value;

        if (c == "yes") {
            document.getElementById('output3').innerHTML = "Take care of it! (20 points)";
        }

        else if (c == "no" || c == "No") {
            document.getElementById('output3').innerHTML = "I hope you buy one! (10 points)";
   
        }

        else {document.getElementById('output3').innerHTML = "Please type (yes or no) as described."; }

    }