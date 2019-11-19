function drawing () {


    var canvas = document.getElementById("canvas1");
    var ctx = canvas.getContext("2d");
    
    

    // Circle
    ctx.fillStyle = "black";
     ctx.beginPath();
     ctx.arc(150,130,80,0,Math.PI*2,true);
     ctx.fill();

     // Square
     ctx.fillStyle = "yellow";
     ctx.fillRect(300,60,150,150);
     
    // Rectangle
    ctx.fillStyle = "blue";
    ctx.fillRect(60,260,200,100);


     // Triangle
    ctx.beginPath();
    ctx.moveTo(300, 250);
    ctx.lineTo(300, 450);
    ctx.lineTo(500, 450);
    ctx.closePath();
    
    // the outline
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#666666';
    ctx.stroke();
    
    // the fill color
    ctx.fillStyle = "green";
    ctx.fill();



    // Pokeball


    var canvas2 = document.getElementById("canvas2");
    var ctx2 = canvas2.getContext("2d");

    ctx2.fillStyle ="black";
    ctx2.beginPath();
    ctx2.arc(195,130,100,0,Math.PI*2,true);
    ctx2.fill();

    ctx2.fillStyle = "white";
    ctx2.beginPath();
    ctx2.arc(195,135,50,20,Math.PI*2,true);
    ctx2.fillRect(90,120,210,20);
    ctx2.fill();


    ctx2.fillStyle = "black";
	ctx2.beginPath();
	ctx2.arc(195,135,25,0,Math.PI*2,true);
	ctx2.fill();

    
    //Circle 2

    var canvas3 = document.getElementById("canvas3");
    var ctx3 = canvas3.getContext("2d");

    ctx3.fillStyle ="red";
    ctx3.beginPath();
    ctx3.arc(195,130,100,0,Math.PI*2,true);
    ctx3.fill();

}

