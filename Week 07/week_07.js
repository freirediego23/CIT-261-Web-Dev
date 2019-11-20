function jsonrecipe() {

    var string = '{"food":"Ceviche", "recipe":"Fish, Tomato, Cucumber"}';

    var info = JSON.parse(string);

    document.getElementById('output1').innerHTML = "Favorite food:" + " " + info.food + "<br>" + "<br>" + "What's the recipe?" + " " + info.recipe;


}


function string() {

    var string= '{"City":"Portoviejo" , "Description":"One of the best touristical destinations for the people", "Population": "1 million"}'

    var info = JSON.parse(string);

    document.getElementById('output2').innerHTML = "My city " + info.City + " " + " is" + " " + info.Description + "<br>"
    + " and it's population is" + " " + info.Population;

}

// function jsonfile () {

//     var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     var myObj = JSON.parse(this.responseText);
//     document.getElementById("output3").innerHTML = myObj.City;
//   }
// };
// xmlhttp.open("GET", "json_string.txt", true);
// xmlhttp.send();

// }

function jsonfile() {
  var xhttp;
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("output3").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "json_string.txt", true);
  xhttp.send();
}


function jsonstring() {

  var words = ["House", "Rock", "Car", "String"]; 
  var info = JSON.stringify(words);

  document.getElementById('output4').innerHTML = info;

}

function jsonstring2() {

  var school = ["School", "notes", "pencil", "papers", "question"]; 
  var info = JSON.stringify(school);

  document.getElementById('output5').innerHTML = info;

}