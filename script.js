const keyboard = document.querySelector(".keyboard");
const squares = document.querySelectorAll(".square")
const keys = document.querySelectorAll(".key")
let currentSquare = 0 

keyboard.addEventListener("click", (event) => {
    if(event.target.classList.contains("key")) {
        if (event.target.textContent === "ENTER") {
            isWinner()
        }
        if (event.target.textContent === "DELETE") {
            if(currentSquare > 0){
                squares[currentSquare - 1].textContent = " "
                currentSquare = (currentSquare - 1)
              }
        }
        else if(currentSquare < 5) {
            squares[currentSquare].textContent = event.target.textContent;
            currentSquare = (currentSquare + 1)
        }
    }
})

function isWinner() {
alert ("you have clicked")
}