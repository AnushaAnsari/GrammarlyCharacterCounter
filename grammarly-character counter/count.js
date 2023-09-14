/*const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter()

function updateCounter() {
  totalCounterEl.innerText = textareaEl.value.length;
  remainingCounterEl.innerText =
    textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}
*/

const textAreaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");


textAreaEl.addEventListener("keyup",() => {
    updateCounter()
});

updateCounter()

function updateCounter(){
    totalCounterEl.innerText = textAreaEl.value.length;
    remainingCounterEl.innerText = textAreaEl.getAttribute("maxLength") - textAreaEl.value.length;
}
