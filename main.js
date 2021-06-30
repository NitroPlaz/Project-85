canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

Car_width = 150;
Car_height = 80;

background_image = "race track bg.jpg";
Car_image = "car1.jpg";

Car_x = 10;
Car_y = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    Car_imgTag = new Image();
    Car_imgTag.onload = uploadCar;
    Car_imgTag.src = Car_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar() {
    ctx.drawImage(Car_imgTag, Car_x, Car_y, Car_width, Car_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38') {
        up();
        console.log("up");
    }
    if(keyPressed == '40') {
        down();
        console.log("down");
    }
    if(keyPressed == '37') {
        left();
        console.log("left");
    }
    if(keyPressed == '39') {
        right();
        console.log("right");
    }
}

function up() { 
    if(Car_y >=0) { 
        Car_y = Car_y - 10;
        console.log("When up arrow is pressed, x = " + Car_x + " | y = " +Car_y); 
        uploadBackground(); 
        uploadCar(); 
    } 
} 
function down() { 
    if(Car_y <=900) { 
        Car_y =Car_y+ 10; 
        console.log("When down arrow is pressed, x = " + Car_x + " | y = " +Car_y); 
        uploadBackground(); 
        uploadCar(); 
    } 
} 
function left() { 
    if(Car_x >= 0) { 
        Car_x =Car_x - 10; console.log("When left arrow is pressed, x = " + Car_x + " | y = " +Car_y); 
        uploadBackground(); 
        uploadCar(); 
    } 
} 
function right() { 
    if(Car_x <= 900) { 
        Car_x =Car_x + 10; console.log("When right arrow is pressed, x = " + Car_x + " | y = " +Car_y); 
        uploadBackground(); 
        uploadCar(); 
    } 
}

if(Car_x > 700) {
    console.log("car won")
    document.getElementById('game_status').innerHTML = "Car Won!!"
}