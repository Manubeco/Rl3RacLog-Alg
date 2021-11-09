const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x=100;
let y=100;

function DrawBall(x, y, r){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.fillStyle = "red";  
    ctx.fill();
}

canvas.addEventListener('keydown', function(e){
   if(e.keyCode === 37){ 
       x--;
   }
   if(e.keyCode === 38){ 
       y--;
   }
   if(e.keyCode === 39){ 
        x++;
    }
    if(e.keyCode === 40){ 
        y++;
    }

    })
    
DrawBall(x, y, 60); 
