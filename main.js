timer_count = 0;
timer_check = "";
Sketch_guess = "";
Answerholder = "";
score = "";
array_1=["pen","tooth","tree","apple","banana","bag","cake","drum","chair","donut","shirt","spectacles","flower","smiley","bird","clock","eye","tent","wheel","ice-cream","binoculars","telephone","foot","hand","television","lion","panda","octopus","campfire","helicopter"];
random_no = Math.floor((Math.random()*array_1.length)+1);
Element_of_array = array_1[random_no];
console.log(Element_of_array);
document.getElementById("Sketch2draw").innerHTML = "Sketch to be drawn: " + Element_of_array;

function preload() {

}
function setup() {
   canvas = createCanvas(400,400);
   canvas.center();
   background("white");
}
function draw() {
checksketch();
if(Sketch_guess == Element_of_array) {
    Answerholder = "set";
score = score + 1;
document.getElementById("Score").innerHTML = score;
console.log(score);
}
}
function updateCanvas() {
    background("white");
}
function checksketch() {
 timer_count = timer_count + 1;
 document.getElementById("Timer").innerHTML = "Timer:" + timer_count;
 console.log(timer_count);
 if(timer_count == 500) {
    timer_count = 0;
    timer_check = "completed";
      
 }
 if(timer_check == "completed" || Answerholder == "set") {
    timer_check = "";
    Answerholder = "";
    updateCanvas();
    Element_of_array = array_1[random_no];
    }
 }
