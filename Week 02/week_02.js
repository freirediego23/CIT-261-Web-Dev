



var requestURL = "https://api.openweathermap.org/data/2.5/group?id=3652941,3652462,3657509&units=metric&APPID=8f48c3312f63db9d42ab7fcdf5e04a62";
var request = new XMLHttpRequest();
request.open('GET', requestURL, true,);

request.send();

request.onload = function () {

    let data = JSON.parse(request.responseText);
  

    console.log(data);

    displayinfo(data);
}


function displayinfo(newdata){

    
   var img = "https://openweathermap.org/img/wn/" + newdata.list[0].weather[0].icon + ".png";
   var img2 = "https://openweathermap.org/img/wn/" + newdata.list[1].weather[0].icon + ".png";
   var img3 = "https://openweathermap.org/img/wn/" + newdata.list[2].weather[0].icon + ".png";
    
    
   // First City Info 

    document.getElementById("name").innerHTML = newdata.list[0].name;
    document.getElementById("country").innerHTML = newdata.list[0].sys.country;
    document.getElementById("humidity").innerHTML = newdata.list[0].main.humidity;
    document.getElementById("description").innerHTML = newdata.list[0].weather[0].description;
    document.getElementById("temp").innerHTML = newdata.list[0].main.temp;
    document.getElementById("wind").innerHTML = newdata.list[0].wind.deg;
    document.getElementById("wind_speed").innerHTML = newdata.list[0].wind.speed;
   document.getElementById("icon").setAttribute('src', img);
    


   //Second City Info

   document.getElementById("name2").innerHTML = newdata.list[1].name;
    document.getElementById("country2").innerHTML = newdata.list[1].sys.country;
    document.getElementById("humidity2").innerHTML = newdata.list[1].main.humidity;
    document.getElementById("description2").innerHTML = newdata.list[1].weather[0].description;
    document.getElementById("temp2").innerHTML = newdata.list[1].main.temp;
    document.getElementById("wind2").innerHTML = newdata.list[1].wind.deg;
    document.getElementById("wind_speed2").innerHTML = newdata.list[1].wind.speed;
   document.getElementById("icon2").setAttribute('src', img2);


   //Third City Info

   document.getElementById("name3").innerHTML = newdata.list[2].name;
    document.getElementById("country3").innerHTML = newdata.list[2].sys.country;
    document.getElementById("humidity3").innerHTML = newdata.list[2].main.humidity;
    document.getElementById("description3").innerHTML = newdata.list[2].weather[0].description;
    document.getElementById("temp3").innerHTML = newdata.list[2].main.temp;
    document.getElementById("wind3").innerHTML = newdata.list[2].wind.deg;
    document.getElementById("wind_speed3").innerHTML = newdata.list[2].wind.speed;
   document.getElementById("icon3").setAttribute('src', img3);
    
}



