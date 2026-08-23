// write your codes here
let objsize, objSpeed;
let objX = 200;
let objY = 200;
let shapeColor = "black"


function setup(){
    createCanvas(600,300);
    background(220)
}
function draw(){
    if(keycode === 37){
        objX -= objSpeed
    }
    if(keycode === 39){
        objX += objSpeed
    }
    if(keycode === 38){
        objY += objSpeed
    }
    if(keycode === 40){
        objY -= objSpeed}
    if(key === 'r' || key === 'R'){
        rect(objX,objY,50,50)
    }
    if(key === e || key === E){
        circle(objX,objY,50)}
    if(key === 'b' || key === 'B'){
        shapeColour = color(0,0,255)
    }
    if(key === 'g' || key === 'G'){
        shapeColour = color(0,255,0)
    }
    if(key === 'y' || key === 'Y'){
        shapeColour
    }
}