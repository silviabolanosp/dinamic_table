var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("myBtn1");
var span1 = document.getElementsByClassName("close")[0];
var p1 = document.getElementById("p1")
var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close")[1];
var p2 = document.getElementById("p2")

btn1.onclick = function(){
    modal1.style.display = "block";
    
}
btn2.onclick = function(){
    modal2.style.display = "block";
    
}
span1.onclick = function(){
    modal1.style.display = "none";
}
span2.onclick = function(){
    modal2.style.display = "none";
}