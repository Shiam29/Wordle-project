const keyboard = document.querySelector(".keyboard");
const squares = document.querySelectorAll(".square")
const keys = document.querySelectorAll(".key")
let currentSquare = 0 
  
keyboard.addEventListener("click", (event) => {
    if(event.target.classList.contains("key")) {
        if(currentSquare < 5) {
            squares[currentSquare].textContent = event.target.textContent;
            currentSquare = (currentSquare + 1)
        }
    }
})

