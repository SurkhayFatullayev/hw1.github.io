function f1() {
    document.getElementById('cont-ap').style.width='75%';
    var element = document.getElementById("for1");
    
      if (element) {
        var display = element.style.display;
    
        if (display == "none") {
            element.style.display = "block";
            document.getElementById("msc").style.display="none";
        } else {
            element.style.display = "none";
        }
      }
}
function ms() {
  document.getElementById('cont-ap').style.width='75%';
  var element = document.getElementById("msc");
  
    if (element) {
      var display = element.style.display;
  
      if (display == "none") {
          element.style.display = "block";
          document.getElementById("for1").style.display="none";
      } else {
          element.style.display = "none";
      }
    }
}
function nep() {
  location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  var x=1;
}
function red() {
  location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  var x=1;
}
function tel() {
  alert("I would like to keep accounts private");
}
