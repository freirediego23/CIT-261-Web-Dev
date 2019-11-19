function activate() {
    var location = {country:"Ecuador", city:"Quito", address:"Simon Bolivar theater", zip:"123"};

    document.getElementById("space").innerHTML = "Your location is:" + " - " + location.country + " - " + location.city + " - " + location.address;
}


function objnew () {
    var location = {country:"Ecuador", city:"Quito", address:"Simon Bolivar theater", zip:"123"};


    var update = Object.create(location);

    location.city = "Portoviejo";
    location.telephone = "2367235";
    location.ID = "222";

    

    document.getElementById("outputobj").innerHTML = "Your location is:" + " - " + update.country + " - " + update.city + " - " + 
    "Phone: " + update.telephone + "- " + "ID: " + " " + update.ID;
}


function update() {

    var car = Object.create(Object.prototype,
        {
        name: {
            value: 'Fiesta Car Pro'
            
        },
        maker: {
            value: 'Tank Factory'
            
        },
        date: {
            value: '2019'
        }
    });
    //console.log(car.name)
    document.getElementById('creatOutput').innerHTML = car.name + "<br>" + 
    "Maker is:" + " " + car.maker + "<br>" + "Date:" + " " + car.date;
}


function objecth() {
    var o = {
        a: 2,
        m: function() {
          return this.a + 1;
        }
      };
      
     // console.log(o.m()); // 3
      document.getElementById('inoutput').innerHTML = o.m();
      // When calling o.m in this case, 'this' refers to o
      
      var p = Object.create(o);
      // p is an object that inherits from o
      
      p.a = 4; // creates a property 'a' on p
      //console.log(p.m()); // 5
      document.getElementById('inoutput').innerHTML = p.m();
      // when p.m is called, 'this' refers to p.
      // So when p inherits the function m of o, 
      // 'this.a' means p.a, the property 'a' of p
      
}

function par () {


    var a = {
            b: "My name is: ",
            c: "I live in: ",
    };

    var newObj = Object.create(a);

    newObj.d = "Diego";
    newObj.e = "Portoviejo";

    document.getElementById('paroutput').innerHTML = a.b + newObj.d  + "<br>" + a.c + newObj.e;



}

 function showinfo () {


    var a = {
            b: "The house has been: ",
            c: "The glass was broken by: ",
            d: "Which soccer team is better? ",
            e: "This class is: ",
    };

    var newObj = Object.create(a);

    newObj.f = "SOLD";
    newObj.g = "JUAN";
    newObj.h = "BYU";
    newObj.i = "MY FAVORITE";

    document.getElementById('inoutput').innerHTML = a.b;
    document.getElementById('glass').innerHTML = a.c;
    document.getElementById('soccer').innerHTML = a.d;
    document.getElementById('class').innerHTML = a.e;



    document.getElementById('inoutput2').innerHTML = newObj.f;
    document.getElementById('glass2').innerHTML = newObj.g;
    document.getElementById('soccer2').innerHTML = newObj.h;
    document.getElementById('class2').innerHTML = newObj.i;

    document.getElementById('glass2').style.color = 'black';
    document.getElementById('glass2').style.fontWeight = 'bold';
    document.getElementById('glass2').style.transition = '4s';

    document.getElementById('soccer2').style.color = 'black';
    document.getElementById('soccer2').style.fontWeight = 'bold';
    document.getElementById('soccer2').style.transition = '4s';

    document.getElementById('class2').style.color = 'black';
    document.getElementById('class2').style.fontWeight = 'bold';
    document.getElementById('class2').style.transition = '4s';

    document.getElementById('inoutput2').style.color = 'black';
    document.getElementById('inoutput2').style.fontWeight = 'bold';
    document.getElementById('inoutput2').style.transition = '4s';


}


function entry () {
    var id = {name: "Diego", age:3};
    var info = Object.entries(id);
    document.getElementById('entry').innerHTML = "Output is: " + " " + info;
    
}

function entry2 () {
    var city = {name: "Quito", population:"3 million"};
    var info = Object.keys(city);
    document.getElementById('entry2').innerHTML = "Output is: " + " " + info;
    
}

function entry3 () {
    var cars = {name: "Toyota", number:5};
    var info = Object.values(cars);
    document.getElementById('entry3').innerHTML = "Output is: " + " " + info;
}

function entry4 () {
     var id = {name: "Diego", age:20};
    

    var freeze = Object.freeze(id);
    freeze.name = "Fernando";
    freeze.age = 30;
    document.getElementById('entry4').innerHTML = "Output is: " + " " + freeze + "<br>" + "Same value";
}


//Instantiation ////////////


function instantiation () {

    var fun = function(a, b) {
        var funInstance = {};
        funInstance.a = a;
        funInstance.b = b;
        funInstance.method1 = function() {
          // method code here
          var text = "Method #1 is activated!";
          return text;
        }
        funInstance.method2 = function() {
            var text = "Method #2 is not activated";
            return text;
        }
        
        return funInstance;
      }
      var myFun = fun(1, 2);
      myFun.method1();

      //console.log(myFun.method1());
      document.getElementById('object1').innerHTML = myFun.method1();
}

// Functional shared //////////

function functionshare() {
    
    var animal = function(species, name){
    var obj = {};

    obj.species = species;
    obj.name = name;

    extend(obj, objMethods);

    return obj;

}

var extend = function(obj, methods) {
    for(var key in methods) {
        obj[key] = methods[key];
    }
}

var objMethods = {
    sound: function() {
        var text = "It's making a lot of noise!";
          return text;
    },

    eat: function() {
        var text = "The animal is eating!";
          return text;
    },

    sleep: function() {
        var text = "The animal is now sleeping";
        return text;
    }
}

//implementation
var cat = animal('cat', 'cat');
cat.eat();
cat.sound();
cat.sleep();

document.getElementById('object2').innerHTML = cat.eat() + "<br>" +
cat.sound() + "<br>" + cat.sleep();
}


// Object Prototype ///////////

function prototype() {

    var animal = function(species, name) {

        var obj = Object.create(objMethods);

        obj.species = species;
        obj.name = name;

        return obj;

    }


    var objMethods = {

        sound: function() {

            var text = "barks";
            return text;
        },

        eat: function() {
            var text = "Dog is now eating meat";
            return text;
        }

        

    }

    //implementation //////////

    var dog = animal('dog', 'dog');
    dog.eat();
    dog.sound();


    document.getElementById('object3').innerHTML = dog.sound() + "<br>" +
    dog.eat();

}


// Object Pseudoclass //////////

function pseudo() {

    var car = function(type, name) {

        this.type = type;
        this.name = name;

    }

    car.prototype.start = function() {
        var text = "The car is starting to run!";
          return text;
    },

    car.prototype.end = function() {
        var text = "The car has stopped!";
          return text;
    }


//Implementation ////////
var toyota = new car('run', 'ends');
toyota.start();
toyota.end();

document.getElementById('object4').innerHTML = toyota.start() + "<br>" + toyota.end();



}
