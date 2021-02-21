import get from "./utils/getElement.js";

// load some results after DOM
window.addEventListener("DOMContentLoaded", () => {
    // add listener to info bubble and study list
    loadModal("past");
    loadModal("study");
});


const loadModal = (element) => {
    // elements unique to modal: name--study/past; btn; actual modal
    const elementLink = get(`#${element}-info`);
    const modalDisplay = get(`#${element}-modal`);
    const modalCloseBtn = get(`.${element}-close`);
    // add listener for modal display
    elementLink.addEventListener("click", () => {
        modalDisplay.style.display = "block";
    });
    // add listener for specific modal close
    modalCloseBtn.addEventListener("click", () => {
        modalDisplay.style.display = "none";
    })
}