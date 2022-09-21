var randomNumber1 =(Math.floor(Math.random()*6)+1);
var randomImage = "images/"+"dice"+randomNumber1+".png";
var number1 =document.querySelectorAll("img")[0];
number1.setAttribute("src",randomImage);

var randomNumber2 =(Math.floor(Math.random()*6)+1);
var randomImage1="images/"+"dice"+randomNumber2+".png";
var number2= document.querySelectorAll("img")[1];
number2.setAttribute("src",randomImage1);


if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 won!"
}
else if (randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 2 won!"
}
else{
  document.querySelector("h1").innerHTML="Match is Tie"
}
