/*variables*/

const divB = document.getElementById("blue");
const divR = document.getElementById("red");
const divG = document.getElementById("green");
const divY = document.getElementById("yellow");

/*funciones*/

function paintBlack(element) {
  element.style.backgroundColor = "black";
}

/*eventos*/

divB.addEventListener("click", function () {
  paintBlack(divB);
});

divR.addEventListener("click", function () {
  paintBlack(divR);
});

divG.addEventListener("click", function () {
  paintBlack(divG);
});

divY.addEventListener("click", function () {
  paintBlack(divY);
});
