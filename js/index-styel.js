var myImages = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.querySelector(".light-box-container");
var close = document.getElementById("close");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var imgesIndex = 0;
for(var i = 0 ; i < myImages.length ; i++){
    myImages[i].addEventListener("click" , showLightBox)
}


function showLightBox (e) {
    lightBoxContainer.style.transform = "scale(1.1)";
    lightBoxContainer.firstElementChild.style.transform = "scale(1.1)";
    var imgeSrc = e.target.src;
    imgesIndex = myImages.indexOf(e.target)
    lightBoxContainer.firstElementChild.style.backgroundImage = "url("+imgeSrc+")";
}

close.addEventListener("click" ,  hideLightBox);
next.addEventListener("click" ,  nextBox);
prev.addEventListener("click" ,  prevBox);

function hideLightBox () {
    lightBoxContainer.style.transform = "scale(0.0)";
}
function nextBox() {
    imgesIndex++;
    if(imgesIndex == myImages.length){
        imgesIndex = 0;
    }
    lightBoxContainer.firstElementChild.style.backgroundImage = "url("+myImages[imgesIndex].src+")";
}
function prevBox() {
    imgesIndex --;
    if(imgesIndex < 0 ) {
        imgesIndex = myImages.length-1; 
    }
    lightBoxContainer.firstElementChild.style.backgroundImage = "url("+myImages[imgesIndex].src+")";
}

document.addEventListener("keydown" ,  function (e) {
    if(e.keyCode == 39)
    {
        nextBox();
    }
    else if (e.keyCode == 37)
    {
        prevBox();
    }
}) 

