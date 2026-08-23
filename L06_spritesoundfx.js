let soundEffect, bgMusic, staticImage;
let staticImageX = 0;
let staticImageY = 350;
let staticSpeed = 3;
function preload(){
    soundEffect = loadSound('assets/pop.mp3');
    bgMusic = loadSound('assets/bossaNova.mp3');
    staticImage = loadImage('assets/pico-a.png');
}

function setup(){
    createCanvas(400,400);
    bgMusic.loop();
}
function draw(){
    background("lightblue");
    if(keyIsDown(LEFT_ARROW)){
        staticImageX -= staticSpeed;
    }
    if(keyIsDown(RIGHT_ARROW)){
        staticImageX += staticSpeed;
    }
    if(keyIsDown(UP_ARROW)){
        staticImageY += staticSpeed;
    }
    i
    image(staticImage,staticImageX,staticImageY,50,50);
}
function keyPressed(){
    if(keyCode ===32){
        soundEffect.play();
    }
}



// function draw(){
//     circle(x,y,50);
//     if(keycode === 38){
//         y-=5
//     }
//     if(keycode===37){
//         x-=5
//     }
//     if(keycode===39){
//         y+=5
//     }
//     if(keycode===40){
//         x+=5
//     }
//     circle(x,y,50)
// }