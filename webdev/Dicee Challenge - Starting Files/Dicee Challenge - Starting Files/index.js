function bttn(){
var random1=Math.floor(Math.random()*6)+1;
var randomimage="dice"+random1+".png";
var randomimagesource="images/"+randomimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage);
var random2=Math.floor(Math.random()*6)+1;
var randomimage="dice"+random2+".png";
var randomimagesource="images/"+randomimage;
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",randomimage);
if(random1>random2){
    document.querySelector("h1").innerHTML="Player1 wins!!";
}
else if(random1<random2){
    document.querySelector("h1").innerHTML="Player2 wins!!";

}
else
document.querySelector("h1").innerHTML="Draw";
}