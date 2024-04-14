function setup(){
canvas=createCanvas(300,300);
canvas.center();
background("yellow");
background("white"); canvas.mouseReleased(classifyCanvas); synth = window.speechSynthesis;}



function draw(){
strokeWeight(15);
stroke(0);
if(mouseIsPresed){
line(pmouseX,pmouseY,mouseX,mouseY);
}
}