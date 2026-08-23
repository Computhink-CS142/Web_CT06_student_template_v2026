let x = 200;
let y = 200;
function setup(){
    createCanvas(400,400);
    background(220);
}
function preload(){
    soundEffect = loadSound()
}

function draw(){
    circle(x,y,50);
    if(keycode===38){
        y-=5
    }
    if(keycode===37){
        x-=5
    }
    if(keycode===39){
        y+=5
    }
    if(keycode===40){
        x+=5
    }
    circle(x,y,50)
}