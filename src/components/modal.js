// Модальные окна

function OpenModal(element) {
  element.classList.add("popup_is-opened");
}

export function CloseModal(element) {
  element.classList.remove("popup_is-opened");
  element.removeEventListener("keydown", typeAnyKey);
  element.removeEventListener("click", clickModalElement);
}

function clickModalElement(evt, modal) {
  if (
    evt.target.classList.contains("popup__close") ||
    evt.target.classList.contains("popup")
  )
    CloseModal(modal);
}

function typeAnyKey(evt, modal) {
  if (evt.key === "Escape") CloseModal(modal);
}

export function openAndHandleModalElement(modal) {
  modal.addEventListener("click", (evt) => clickModalElement(evt, modal));
  document.addEventListener("keydown", (evt) => typeAnyKey(evt, modal));
  OpenModal(modal);
}
