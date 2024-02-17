// Модальные окна

function openModal(element) {
  element.classList.add("popup_is-opened");
}

export function closeModal(element) {
  element.classList.remove("popup_is-opened");
  element.removeEventListener("keydown", typeAnyKey);
  element.removeEventListener("click", clickModalElement);
}

function clickModalElement(evt, modal) {
  if (
    evt.target.classList.contains("popup__close") ||
    evt.target.classList.contains("popup")
  )
    closeModal(modal);
}

function typeAnyKey(evt, modal) {
  if (evt.key === "Escape") closeModal(modal);
}

export function openAndHandleModalElement(modal) {
  modal.addEventListener("click", (evt) => clickModalElement(evt, modal));
  document.addEventListener("keydown", (evt) => typeAnyKey(evt, modal));
  openModal(modal);
}
