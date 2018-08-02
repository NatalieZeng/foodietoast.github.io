window.onload = function(){

  document.getElementById("theImage").onclick = function(){
    changeImage();
}


  var i = 0;
function changeImage(){
  var list = ["hs.jpg", "hs1.jpg", "hs2.jpg", "hs3.jpg"];
  i++;
  if(i > 3){
    i = 0;
  }
    var newImg = list[i];
    document.getElementById("theImage").src = newImg;
}
}
