//Create variables here
var dog;
var happyDogImg;
var database;
var food;
var foodStock;
var dogImg;
var foodS;


function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
	
  createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250, 300);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  foodStock = database.ref('foods')
  foodStock.on("value" ,readStock)
  
}


function draw() {  

  background(46, 139, 87)

  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS)
    dog.addImage(happyDogImg)
  }

  drawSprites();
  //add styles here
  
  textSize(20);
  fill("black");
  text ("Food Remaining: " + foodS, 150, 450);
  text ("press the up arrow to feed the dog", 100, 420);
  

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
if (x<= 0) {
  x = 0;
} else {
  x = x - 1
}
database.ref('/').update({
  foods:x
})

}


