function dom1() {

    var child = document.createElement("b");
    child.innerText = "Object created!";
    document.getElementById('container1').appendChild(child);

}

function dom2() {

    var choco = document.createElement("div");
    choco.setAttribute("id", "chocolate");
    document.getElementById('container2').appendChild(choco);

}

function dom3() {

    var word = document.createElement("li");
    word.innerText = "This is a list!";
    document.getElementById('container3').appendChild(word);

}

function dom4() {

    var object = document.getElementById('listobject');
    object.removeChild(object.childNodes[1]);
}

function remove() {
    var remove = document.getElementById('chocolate');

    //var remove2 = document.getElementById('chocolate2');


    return remove.parentNode.removeChild(remove);
     // remove2.nextElementSibling.remove(remove2);
    


}

function remove2() {
    var remove2 = document.getElementById('chocolate2');
   //return remove2.nextElementSibling.remove(remove2);
   remove2.remove();

}

function insert() {
    var choco1 = document.getElementById('chocolate').lastChild;

    var choco2 = document.createElement("div");
    choco2.setAttribute("id", "chocolate2");
    document.getElementById('container2').appendChild(choco2);

    choco2.insertBefore(choco1, choco2);

}

