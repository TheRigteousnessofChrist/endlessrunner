var chicken = document.getElementById('chicken');
var obstacle = document.getElementById('obstacle');
var counter = 0;

function jump(){
    if(chicken.classList != "animate"){
        chicken.classList.add("animate");
        }
        setTimeout(function()){
        chicken.classList.add("animate");
        counter++;
    }, 500);
}

var lose = setInverval(function(){
    var chickenTop =
    parseInt(window.getComptedStyle(chicken).
    getPropertyValue("top"));
    var blockLeft = 
    parseInt(window).getComputedStyle(obstacle).
    getPropertyValue("left"));
    if(blockLeft<20 && blockleft>0 && chickenTop>=130){
        obstacle.style.animate = "none";
        obstacle.style.display = "none";
        alert("SCORE:"+ counter);
        counter = 0;
    }
}, 10);
