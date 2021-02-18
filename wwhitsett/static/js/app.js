const pastInfo = document.querySelector("#past-info");
const modal = document.querySelector("#inner-modal");

// load some results after DOM
window.addEventListener("DOMContentLoaded", () => {
    // add listener to info bubble
    pastInfo.addEventListener("click", () => {
        // drawModal();
        const closeModalBtn = document.querySelector(".modal-close")
        modal.style.display = "block";
        closeModalBtn.addEventListener("click", () => {
            modal.style.display = "none";
        })
    })
});
