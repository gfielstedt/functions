/*Variable color original*/

let originalColor = "white";

/* función cambiar color div*/

function changeColor(color) {
  let key = document.getElementById("key");
  key.style.backgroundColor = color;
}

/* función crea nuevo div*/

function createDiv(color) {
  let newDiv = document.createElement("div");
  newDiv.style.width = "200px";
  newDiv.style.height = "200px";
  newDiv.style.backgroundColor = color;
  newDiv.style.border = "1px solid black";
  document.body.appendChild(newDiv);
}

/*eventos y condiciones*/

document.addEventListener("keydown", function (event) {
  if (event.key == "A") {
    originalColor = "pink";
    changeColor(originalColor);
  } else if (event.key == "S") {
    originalColor = "orange";
    changeColor(originalColor);
  } else if (event.key == "D") {
    originalColor = "lightblue";
    changeColor(originalColor);
  } else if (event.key == "Q") {
    createDiv("purple");
  } else if (event.key == "W") {
    createDiv("gray");
  } else if (event.key == "E") {
    createDiv("brown");
  }
});

