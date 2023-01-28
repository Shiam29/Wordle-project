const keyboard = document.querySelector(".keyboard");
const squares = document.querySelectorAll(".square");
const keys = document.querySelectorAll(".key");
const correctWords = ["S", "U", "P", "E", "R"];
let currentSquare = 0;
let currentRow = 0;

keyboard.addEventListener("click", (event) => {
  if (event.target.classList.contains("key")) {
    if (event.target.textContent === "ENTER") {
      let isCorrect = true;
      for (let i = 0; i < squares.length; i++) {
        if (i >= currentRow * 5 && i < currentRow * 5 + 5) {
          if (squares[i].textContent === correctWords[i - currentRow * 5]) {
            squares[i].style.backgroundColor = "green";
          } else if (correctWords.includes(squares[i].textContent)) {
            squares[i].style.backgroundColor = "yellow";
          } else {
            squares[i].style.backgroundColor = "grey";
          }
        }
      }
      currentRow++;
      currentSquare = 0;
      for (let i = currentRow * 5; i < currentRow * 5 + 5; i++) {
        squares[i].textContent = "";
      }
    } else if (event.target.textContent === "DELETE") {
      if (currentSquare > 0) {
        squares[currentRow * 5 + currentSquare - 1].textContent = "";
        currentSquare = currentSquare - 1;
      }
    } else if (currentSquare < 5) {
      squares[currentRow * 5 + currentSquare].textContent =
        event.target.textContent;
      currentSquare = currentSquare + 1;
    }
  }
});
