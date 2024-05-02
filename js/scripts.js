var heads = ["<img src='images/head-cat.png'>", "<img src='images/head-dog.png'>"
, "<img src='images/head-bunny.png'>", "<img src='images/head-bear.png'>",
"<img src='images/head-deer.png'>", "<img src='images/head-sheep.png'>"]

var bodies = ["<img src='images/body-cat.png'>", "<img src='images/body-dog.png'>"
, "<img src='images/body-bunny.png'>", "<img src='images/body-bear.png'>",
"<img src='images/body-deer.png'>", "<img src='images/body-sheep.png'>"]

var feets = ["<img src='images/feet-cat.png'>", "<img src='images/feet-dog.png'>"
, "<img src='images/feet-bunny.png'>", "<img src='images/feet-bear.png'>",
"<img src='images/feet-deer.png'>", "<img src='images/feet-sheep.png'>"]

//$("body").css("background-color", heads[randomNum]);

//$(document).on("click", change)

$(".top").html("<img src='images/head-cat.png'>")
$(".middle").html("<img src='images/body-cat.png'>")
$(".bottom").html("<img src='images/feet-cat.png'>")


$(".top").on("click", changeTop)

$(".middle").on("click", changeMid)

$(".bottom").on("click", changeBot)



$(document).on("keydown", function(e) {

    console.log(e.key);
    if (e.key == '1'){
        changeAll();

    }

})


$(document).on("keydown", function(a) {

    console.log(a.key);
    if (a.key == '2'){
        changeBackground();

    }

})

var counterTop = 0;
var counterMid = 0;
var counterBot = 0;

function changeTop(){
    
    $(".top").html(heads[counterTop]);
    counterTop++;

    if (counterTop >= heads.length) {
        counterTop = 0;
    }

}

function changeMid(){

    $(".middle").html(bodies[counterMid]);
    counterMid++;
    
    if (counterMid >= bodies.length) {
        counterMid = 0;
    }
}

function changeBot(){

    $(".bottom").html(feets[counterBot]);
    counterBot++;
    
    if (counterBot >= feets.length) {
        counterBot = 0;
    }

}



function changeAll() {
    var randomNumh = Math.floor(Math.random() * heads.length);
   
    $(".top").html(heads[randomNumh]);
    
    var randomNumM = Math.floor(Math.random() * bodies.length);
    $(".middle").html(bodies[randomNumM]);

    var randomNumb = Math.floor(Math.random() * feets.length);
    $(".bottom").html(feets[randomNumb]);

}

var counter = 0;

function changeBackground(){
   

    if (counter == 0) {
        $(".part").css("background-color", "pink");
        counter++
    }

    else if (counter == 1) {
        $(".part").css("background-color", "skyblue");
        counter++
    }

    else if (counter == 2) {
        $(".top").css("background-color", "#c65c93");
        $(".middle").css("background-color", "#E56B6F");
        $(".bottom").css("background-color", "#eaca8b");
        counter++
    }

    else if (counter == 3) {
        $(".top").css("background-color", "#0d1b2a");
        $(".middle").css("background-color", "#1b263b");
        $(".bottom").css("background-color", "#415a77");
        counter++
    }

    else if (counter == 4) {
        $(".part").css("background-color", "#252323");
        counter++
    }

    else {
        $(".part").css("background-color", "whitesmoke");
        counter = 0;

    }



}