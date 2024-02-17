const cardTemplate = document.querySelector("#card-template").content;
const card = cardTemplate.querySelector(".card");

// Функция создания карточки
export function fillCard(cardInfo, deleteCardFunc, likeCardFunc, openImgFunc) {
  const card_clone = card.cloneNode(true);
  const card_img = card_clone.querySelector(".card__image");
  const card_title = card_clone.querySelector(".card__title");
  const deleteButton = card_clone.querySelector(".card__delete-button");
  const likeButton = card_clone.querySelector(".card__like-button");

  card_img.setAttribute("src", cardInfo.link);
  card_img.setAttribute("alt", cardInfo.name);

  card_title.textContent = cardInfo.name;

  deleteButton.addEventListener("click", ()=>{
    deleteCardFunc(card_clone);
  });
  likeButton.addEventListener("click", likeCardFunc);
  card_img.addEventListener("click", ()=>{
    openImgFunc(cardInfo.name, cardInfo.link);
  });

  return card_clone;
}
// Функция удаления карточки
export function deleteCard(cardElement) {
  cardElement.remove();
}

// Поставить лайк
export function likeCard(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}
