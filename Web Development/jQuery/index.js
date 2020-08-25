// $("h1").css("color", "red");


// $ is same for querySelector and querySelectorAll

$("h1").addClass("big-title");

// $("h1").removeClass("big-title");


$("h1").text("bye");
$("button").html("<em>Hey</em>");

$("a").attr("href", "https://www.yahoo.com");

//event listener
$("h1").click(function(){

});


// for (var i = 0; i<5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function (){
//     document.querySelector("h1").style.color = "purple";
//   });
// }

//same as above using jQuery
// $("button").click(function(){
//   $("h1").css("color", "purple");
// });


//changes text to whatever key we press
$(document).keypress(function(event) {
  $("h1").text(event.key);
});

//can use .on for eventListener as well
$("h1").on("mouseover", function(){
  $("h1").css("color", "purple");
});


//can chain all the animation methods

//hide, show, fadeOut, fadeIn, fadeToggle, slideUp, slideDown, slideToggle
// $("button").click(function(){
//   $("h1").toggle();
// });

// .animate has to be used with an property with numeric value, not something like color for example
// use number or if use percent - ex. "20%"
$("button").click(function(){
  $("h1").animate({opacity: .05});
});
