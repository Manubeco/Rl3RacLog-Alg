const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x=100;
let y=100;
let LEFT, UP, RIGHT, DOWN; 

function DrawBall(x, y, r){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.strokeStyle = "orange";
    ctx.stroke();
    ctx.fillStyle = "red";  
    ctx.fill();
}

canvas.addEventListener('keydown', function(e){
   if(e.keyCode === 37){ 
       LEFT = true;
   }
   if(e.keyCode === 38){ 
       UP = true;
   }
   if(e.keyCode === 39){ 
        RIGHT = true;
    }
    if(e.keyCode === 40){ 
        DOWN = true;
    }
}); 

canvas.addEventListener('keyup', function(e){
    if(e.keyCode === 37){ 
        LEFT = false;
    }
    if(e.keyCode === 38){ 
        UP = false;
    }
    if(e.keyCode === 39){ 
         RIGHT = false;
     }
     if(e.keyCode === 40){ 
         DOWN = false;
     }    
})

function move(){
    if(LEFT){
        x--;
    }
    if(UP){
        y--;
    }
    if(RIGHT){
        x++;
    }
    if(DOWN){
        y++;
    }
}
function movimento() {
    ctx.clearRect(0,0,canvas.clientWidth, canvas.clientHeight);
    move();
    DrawBall(x, y, 60)
    requestAnimationFrame(movimento);
}
requestAnimationFrame(movimento);