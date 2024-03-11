export const body = document.body;
export const popUp = document.querySelector(".popUp");
export const addButton = document.querySelector("#add");
export const closeButton = document.querySelector("#closeButton");

export function openPopUp() {
    popUp.classList.add("openPopUp");
    body.classList.add("blur");
}
export function closePopUp() {
    popUp.classList.remove("openPopUp");
    body.classList.remove("blur");
}

addButton.addEventListener("click", openPopUp);
closeButton.addEventListener("click", closePopUp);

