const increaseButton = document.querySelector(".increase");
const decreaseButton = document.querySelector(".decrease");
const resetButton = document.querySelector(".reset");
const number = document.querySelector(".number");
let count = parseInt(number.textContent);
function increaseNum() {
    count++;
    number.textContent = count;
}
function decreaseNum(){
    count--;
    number.textContent = count;
}
function resetNum(){
    count = 0;
    number.textContent = count;
}
increaseButton.addEventListener("click", increaseNum);
decreaseButton.addEventListener("click",decreaseNum);
resetButton.addEventListener("click",resetNum);
