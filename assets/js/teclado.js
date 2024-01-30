/*Variable para guardar color*/

let originalColor = "white";

/* función para  cambiar color del div*/

function changeColor(color) {
  let key = document.getElementById("key");
  key.style.backgroundColor = color;
}

/* función para crear nuevo div */

function createDiv(color) {
  let newDiv = document.createElement("div");
  newDiv.style.width = "200px";
  newDiv.style.height = "200px";
  newDiv.style.backgroundColor = color;
  newDiv.style.border = "1px solid black";
  document.body.appendChild(newDiv);
}

/*eventos / condiciones*/

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    let originalColor = "pink";
    cambiarColor(originalColor);
  } else if (event.key === "s") {
    let originalColor = "orange";
    cambiarColor(originalColor);
  } else if (event.key === "d") {
    let originalColor = "lightblue";
    cambiarColor(originalColor);
  } else if (event.key === "q") {
    createDiv("purple");
  } else if (event.key === "w") {
    createDiv("gray");
  } else if (event.key === "e") {
    createDiv("brown");
  }
});
