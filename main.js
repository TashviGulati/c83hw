canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="red";

var lastPositionOfX,LastPositionOfY;
widthOfLine=2;
var width=screen.width;
newWidth=screen.width-70;
newHeight=screen.height-300;
if(width<992){
    document.getElementById("mycanvas").width=newWidth;
    document.getElementById("mycanvas").height=newHeight;
    document.body.style.overflow="hidden";
}


canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e)

 {
    console.log("touchStart")
    lastPositionOfX=e.touches[0].clientX-canvas.offsetLeft;
    LastPositionOfY=e.touches[0].clientY-canvas.offsetTop;
 }

canvas.addEventListener("touchmove",mytouchMove);
function mytouchMove(e){
    console.log("touchmove")
    currentPositionOfTouchx=e.touches[0].clientX-canvas.offsetLeft;
    currentPositionOfTouchY=e.touches[0].clientY-canvas.offsetTop; 
   
        ctx.beginPath();
        ctx.strokeStyle=color
        ctx.lineWidth=widthOfLine;
        ctx.moveTo(lastPositionOfX,LastPositionOfY);
        ctx.lineTo(currentPositionOfTouchx,currentPositionOfTouchY);
        ctx.stroke();
    
    lastPositionOfX=currentPositionOfTouchx;
    LastPositionOfY=currentPositionOfTouchY;
}

canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="red";
var mouseEvent="empty";
var lastPositionOfX,LastPositionOfY;
widthOfLine=2;;



canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mouseEvent="mouseDown";
    
    
}

canvas.addEventListener("mouseup",mymouseUp);
function mymouseUp(e){
    mouseEvent="mouseUp";

}

canvas.addEventListener("mouseleave",mymouseLeave);
function mymouseLeave(e){
    mouseEvent="mouseLeave";

}

canvas.addEventListener("mousemove",mymouseMove);
function mymouseMove(e){
    currentPositionOfMouseX=e.clientX-canvas.offsetLeft;
    currentPositionOfMouseY=e.clientY-canvas.offsetTop; 
    if(mouseEvent=="mouseDown")  {
        ctx.beginPath();
        ctx.strokeStyle=color
        ctx.lineWidth=widthOfLine;
        ctx.moveTo(lastPositionOfX,LastPositionOfY);
        ctx.lineTo(currentPositionOfMouseX,currentPositionOfMouseY);
        ctx.stroke();
    }
    lastPositionOfX=currentPositionOfMouseX;
    LastPositionOfY=currentPositionOfMouseY;
}