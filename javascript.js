const container = document.querySelector(".container");
const body = document.querySelector("body");
const rec = container.getBoundingClientRect();
const dot = document.querySelector(".dot");
const dotDimension = dot.getBoundingClientRect();
const enemy = document.querySelector(".enemy");
let mouseX =200;
let mouseY = 200;
let dotX = 200;
let dotY = 200;
let dotHeight = dotDimension["height"];
let dotWidth = dotDimension["width"];
let velocity = 0.08;

// Add event listener to track mouse movement
body.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    })
    
// Function to update the position of the dot based on mouse movement
function FollowCursor(){
    dotX += (mouseX - dotX) * velocity;
    dotY += (mouseY - dotY) * velocity;
    CheckDotBorder();
    dot.style.left = dotX + -dotWidth/2 + "px";
    dot.style.top = dotY + -dotHeight/2 + "px";
    requestAnimationFrame(FollowCursor);
}
// Function to check if the dot is within the container boundaries
function CheckDotBorder(){
    if(dotX - dotWidth/2 < rec["x"]){
        dotX = rec["x"] + dotWidth/2;
    }
    if(dotY - dotHeight/2 < rec["y"]){
        dotY = rec["y"] + dotHeight/2;
    }

    if(dotX + dotWidth/2 > rec["right"]){
        dotX = rec["right"] - dotWidth/2;
    }
    if(dotY + dotHeight/2 > rec["bottom"]){
        dotY = rec["bottom"] - dotHeight/2;
    }
}
FollowCursor();
console.log(dot.style.width);



