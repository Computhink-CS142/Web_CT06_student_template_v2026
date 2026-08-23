// write your codes here
let objsize, objX, objY, objSpeed;




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
        
}