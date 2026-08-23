let x = 200;
let y = 200;
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
    Image(staticImage,0,0,50,50);
}
function keyPressed(){
    if(keyCode ===32){
        sound
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