function myFunction() {
    var moreText = document.getElementsByClassName("after-read-more"); //get elements in target class
    var footer = document.getElementById("footer");

    var elem = document.getElementById("myBtn");
    if (elem.value=="Read more &#x2192" || elem.value=="Read more \u2192" ){
        elem.value = "Read less " + "\u2192";
        for (var i = 0; i < moreText.length; i++) {
            moreText[i].style.display = "inline";
            footer.style.display = "flex";
        }
    } 
    else{
        elem.value = "Read more " + "\u2192";
        for (var i = 0; i < moreText.length; i++) {
            moreText[i].style.display="none";
            footer.style.display = "none";
        }
    } 

}