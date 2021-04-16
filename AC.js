mg= "";
status= "";
object= [];

function preload(){
    img= loadImage("AC.jpg");
}

function setup(){
    canvas= createCanvas(640, 420);
    canvas.position(320, 130);
    objectDetector= ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML= "Status: Dectecting Objects";
}

function draw(){
    image(img, 0, 0, 640, 420);
    if(status != ""){
        for(i=0; i<object.length; i++){
            document.getElementById("status").innerHTML= "Status: Objects Detected";

            fill('#FF0000');
            percent= floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
            noFill();
            stroke('#FF0000');
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}

function modelLoaded(){
    console.log("Model Loaded!");
    status= true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
 if(error){
     console.error(error);
 }

else{
    console.log(results);
    object= results;
}
}



function backtohome(){
    window.location= "index.html";
}