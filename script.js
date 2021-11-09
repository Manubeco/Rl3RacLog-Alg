const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function DrawBall(x, y, r){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.fillStyle = "red";  
    ctx.fill();
}

canvas.addEventListener('keydown', function(e){
    if(e.keydode === 37){ 
        console.log("LEFT");
        }
    })
    
DrawBall(100, 100, 60);

// Eu sou um bolinho de arroz
// De ARROZ!! 
// hehe!

//Ficar o resto do dia com isso na cabeça haha
