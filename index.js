document.addEventListener("DOMContentLoaded", function() {
  changeText()
});

function changeText(){
  let element = document.getElementById("text")
  element.innerHTML = "This is really cool!"
}
