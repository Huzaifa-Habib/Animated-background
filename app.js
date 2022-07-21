
var colors=["red","green","blue","black"]
var body=document.getElementById("body");
function time () {

    var random=colors[Math.floor(Math.random()*3)]
    body.style.background=random
    setTimeout(time,1000)

}

time()



var spaceW;
var spaceH;
var picture;

var picture1
var picture2;
var picture3;
var picture4;
var picture5;
var picture6;
var picture7;


function init(){
  
    picture=document.getElementById("image")
    picture.style.transform=  


    spaceH =screen.height -picture.height;
    spaceW =screen.width -picture.width;

    picture1=document.getElementById("image2")
    spaceH =screen.height -picture1.height;
    spaceW =screen.width -picture1.width;

    picture2=document.getElementById("image3")
    spaceH =screen.height -picture2.height;
    spaceW =screen.width -picture2.width;

    picture3=document.getElementById("image4")
    spaceH =screen.height -picture3.height;
    spaceW =screen.width -picture3.width;

    picture4=document.getElementById("image5")
    spaceH =screen.height -picture3.height;
    spaceW =screen.width -picture3.width;

    picture5=document.getElementById("image6")
    spaceH =screen.height -picture3.height;
    spaceW =screen.width -picture3.width;

    picture6=document.getElementById("image7")
    spaceH =screen.height -picture3.height;
    spaceW =screen.width -picture3.width;

    picture7=document.getElementById("image8")
    spaceH =screen.height -picture3.height;
    spaceW =screen.width -picture3.width;




    setInterval(moveIt,300);

}

function moveIt(){
  picture.style.top = Math.round(Math.random() * spaceH)+"px";
  picture.style.left = Math.round(Math.random() * spaceW)+"px";

  picture1.style.top = Math.round(Math.random() * spaceH)+"px";
  picture1.style.left = Math.round(Math.random() * spaceW)+"px";

  picture2.style.top = Math.round(Math.random() * spaceH)+"px";
  picture2.style.left = Math.round(Math.random() * spaceW)+"px";

  picture3.style.top = Math.round(Math.random() * spaceH)+"px";
  picture3.style.left = Math.round(Math.random() * spaceW)+"px";

  picture4.style.top = Math.round(Math.random() * spaceH)+"px";
  picture4.style.left = Math.round(Math.random() * spaceW)+"px";

  picture5.style.top = Math.round(Math.random() * spaceH)+"px";
  picture5.style.left = Math.round(Math.random() * spaceW)+"px";

  picture6.style.top = Math.round(Math.random() * spaceH)+"px";
  picture6.style.left = Math.round(Math.random() * spaceW)+"px";

  picture7.style.top = Math.round(Math.random() * spaceH)+"px";
  picture7.style.left = Math.round(Math.random() * spaceW)+"px";
  
  
  



}



