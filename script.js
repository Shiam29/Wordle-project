const keyboard = document.querySelector(".keyboard");
const squares = document.querySelectorAll(".square")
let currentSquare = 0 

keyboard.addEventListener("click", (event) => {
    if(event.target.classList.contains("key")) {
        squares[currentSquare].textContent = event.target.textContent;
        currentSquare = (currentSquare + 1)
    }
})

