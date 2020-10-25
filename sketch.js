//Create variables here
var dog, dog1, happyDog, database, foodS, foodStock;

var meal = 0;
function preload(){
  //load images here
  
  dog1 = loadImage("dogImg.png")
  dog2 = loadImage("dogImg1.png");
}


function setup() {
  database = firebase.database();
  console.log(database);

  createCanvas(500, 500);
  
//creating sprites

  dog = createSprite(250,300);
  dog.addImage(dog1)
  dog.scale=0.2;

  foodStockRef = database.ref('Food');
  foodStockRef.on("value",readStock);
  textSize(20);
}


function draw() {
background(rgb(46,139,87));

//giving a condition thay if the up key is pressed the image should change 

if(keyWentDown(UP_ARROW)){
  meal = meal+1;
  dog.addImage(dog2);
}
 if(keyWentUp(UP_ARROW)){
   dog.addImage(dog1);
 }

  //add styles here
textSize(15);
fill("white");
text("Imaportant Note:Press Up_Arrow key to feed the Milk and food to the dog.",5,50);
text("Food ate by Dog:"+meal,20,100);
text("name of you dog: Your choice",200,100);
drawSprites();
}

//function to read values from DB
function readStock(data){
  foodS = data.val();

}

//function to write values in DB
function writeStock(x){

  if (x<=0){
    x=0;
  } else{
    x=x+1;
  }

  database.ref('/').update({
    food:x
  })
} 