const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg2,bg1,bg3,bg4,bg5,bg6,bg7,bg8,bg9,bg10,bg11,bg12;
var backgroundImg

function preload() {
   
    getBackgroundImg()
    /* create getBackgroundImg( ) here
    bg1 = loadImage("sunrise1.png");
    bg2 = loadImage("sunrise1.png");
    bg3 = loadImage("sunrise1.png");
    bg4 = loadImage("sunrise1.png");
    bg5 = loadImage("sunrise1.png");
    bg6 = loadImage("sunrise1.png");
    bg7 = loadImage("sunrise1.png");
    bg8 = loadImage("sunrise1.png");
    bg9 = loadImage("sunrise1.png");
    bg10 = loadImage("sunrise1.png");
    bg11 = loadImage("sunrise1.png");
    bg12 = loadImage("sunrise1.png");*/
    
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
   if(backgroundImg){
       background(backgroundImg)
   }

    Engine.update(engine);

    // write code to display time in correct format here


}



    async function getBackgroundImg(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
    
        var datetime = responseJSON.datetime;
        var hour = datetime.slice(11,13);
        
        if(hour>=06 && hour<=07){
            bg = "sunrise1.png";
        }
        else if(hour>=07 && hour<=08){
            bg = "sunrise2.png";
        }
        else if(hour>=08 && hour<=09){
            bg = "sunrise3.png";
        }
        else if(hour>=09 && hour<=11){  
            bg = "sunrise4.png";
        }
        else if(hour>=11 && hour<=15){
            bg = "sunrise5.png";
        }
        else if(hour>=15 && hour<=16){
            bg = "sunrise6.png";
        }
        else if(hour>=16 && hour<=17){
            bg = "sunset7";
        }
        else if(hour>=17 && hour<=18){
            bg = "sunset8";  
        }
        else if(hour>=18 && hour<=19){
            bg = "sunset9";
        }
        else if(hour>=19 && hour<=20){
            bg = "sunset10";
        }
        else if(hour>=20 && hour<=21){
            bg = "sunset11";
        }
        else if(hour>=21 && hour<=22){
            bg = "sunset12";
        }
        
        backgroundImg = loadImage(bg)
    

    

}
