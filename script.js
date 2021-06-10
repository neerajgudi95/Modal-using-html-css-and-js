const openModalBtn = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-modal");

openModalBtn.addEventListener("click", () => {
  modal.style.opacity = 1;
});
closeModalBtn.addEventListener("click", () => {
  modal.style.opacity = 0;
});
