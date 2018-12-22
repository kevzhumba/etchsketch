function generateBoard(size) {
  const board = document.querySelector("#drawingboard");
  for (i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    let width = 640 / size + "px";
    board.style.gridTemplateColumns = "repeat(auto-fill, " + width + ")";
    div.classList.toggle("grid");
    div.style.borderLeft = "1px solid black";
    div.style.borderTop = "1px solid black";
    if (i % size == size - 1) {
      div.style.borderRight = "1px solid black";
    }
    if (size * size - i <= size) {
      div.style.borderBottom = "1px solid black";
    }
    div.style.display = "inline";
    board.appendChild(div);
  }
}


function buttonListen() {
  let size = prompt("How big of a board? Enter a number between 16 and 128");
  if (size > 128 || size < 16) {
    alert("Not a valid size!")
  }
  let board = document.querySelector("#drawingboard");
  while (board.hasChildNodes()) {
    board.removeChild(board.lastChild);
  }
  generateBoard(size);
}

const button = document.querySelector("Button");
button.addEventListener("click", (e) => buttonListen());
generateBoard(16);

const grid = Array.from(document.querySelectorAll(".grid"));
for (i = 0; i < grid.length; i++) {
  (grid[i]).addEventListener("mouseenter", function (e) {
    e.target.style.backgroundColor = "black";
  })
}


