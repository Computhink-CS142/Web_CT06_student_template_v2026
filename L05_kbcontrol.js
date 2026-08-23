// write your codes here
let objsize, objSpeed;
let objX = 200;
let objY = 200;



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
        Reflect()
    }
}