// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
const places = document.querySelector(".places__list");

// @todo: DOM узлы
const card = cardTemplate.querySelector(".card");

// @todo: Функция создания карточки

function fillCard(cardInfo, deleteCard) {
  const card_clone = card.cloneNode(true);
  const card_img = card_clone.querySelector(".card__image");
  const card_title = card_clone.querySelector(".card__title");
  const deleteButton = card_clone.querySelector(".card__delete-button");

  card_img.setAttribute("src", cardInfo.link);
  card_img.setAttribute("alt", cardInfo.name);

  card_title.textContent = cardInfo.name;

  deleteButton.addEventListener("click", deleteCard);

  return card_clone;
}

// @todo: Функция удаления карточки
function deleteCard(evt) {
  const deleteButtonTarget = evt.target;
  deleteButtonTarget.closest(".card").remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(item => {
    const card = fillCard(item, deleteCard);
    places.append(card);
});


