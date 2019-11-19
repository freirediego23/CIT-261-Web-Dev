function start() {

localStorage.setItem("info", "Name: Diego & ID: 235412");

document.getElementById('ID').innerHTML = localStorage.getItem("info");

}


function fruit() {

    var fruit = ["apple", "banano", "grape", "watermelon", "cherry", "strawberry"];

    localStorage.setItem("list", JSON.stringify(fruit));
    
    
    var retrievelist = localStorage.getItem("list");

    var fruits2 = JSON.parse(retrievelist);

    document.getElementById("fruits").innerHTML = fruits2;

    document.getElementById("fruits2").innerHTML = fruits2[4];

}


function object() {

    var location = [ "Portoviejo", "2367235", "222"];
   
    localStorage.setItem("city", JSON.stringify(location));

    var getInfo = localStorage.getItem("city");

     var city2 = JSON.parse(getInfo);

    document.getElementById('objectoutput').innerHTML = "Location:" + " " + city2[0] + "<br>" +
    "Telephone:" + " " + city2[1] + "<br>" + "ID:" + " " + city2[2];

}


function information () {

    var nameinfo = document.getElementById('name').value;
    var ocupationinfo = document.getElementById('ocupation').value;
    var cityinfo = document.getElementById('city').value;

    localStorage.setItem('name', nameinfo);
    localStorage.setItem('ocupation', ocupationinfo);
    localStorage.setItem('city', cityinfo);

    var name = localStorage.getItem('name');
    var ocupation = localStorage.getItem('ocupation');
    var city = localStorage.getItem('city');

    document.getElementById('nameOutput').innerHTML = "Your name is:" + " " + name;
    document.getElementById('ocupationOutput').innerHTML = "Ocupation:" + " " + ocupation;
    document.getElementById('cityOutput').innerHTML = "City:" + " " + city;
}


function object1() {

    var instrument = new Object();
    instrument.name = "Guitar";
    instrument.purpose = "Play some nice music";
    

    localStorage.setItem('firstname', instrument.name);
    localStorage.setItem('lastname', instrument.purpose);

    var instrumentName = localStorage.getItem('firstname');
    var instrumentPurpose = localStorage.getItem('lastname');

    document.getElementById('output1').innerHTML = instrumentName;
    document.getElementById('output2').innerHTML = instrumentPurpose;
}