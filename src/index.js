import "./pages/index.css";
import {initialCards} from "./scripts/cards";
import {fillCard, deleteCard, likeCard} from "./components/card";
import {openAndHandleModalElement, closeModal} from "./components/modal";
// Кнопки
const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");

// Изменение профиля
const modalEditElement = document.querySelector(".popup_type_edit");
const editFormElement = document.querySelector('[name="edit-profile"]'); 
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const nameInput = editFormElement.querySelector(".popup__input_type_name"); 
const jobInput = editFormElement.querySelector(".popup__input_type_description");
// Добавление карточки
const modalAddCard = document.querySelector(".popup_type_new-card");
const addFormElement = document.querySelector('[name="new-place"]');
const linkImageInput = addFormElement.querySelector(".popup__input_type_url");
const namePlaceInput = addFormElement.querySelector(".popup__input_type_card-name");
// Место для карточек на странице
const places = document.querySelector(".places__list");

// Обработчики событий
function handleFormSubmit(evt) {
  evt.preventDefault(); 
  
  const name = nameInput.value;
  const job = jobInput.value;

  profileTitle.textContent = name;
  profileDescription.textContent = job;
  closeModal(evt.target.closest(".popup"));
}

function handleAddFormSubmit(evt) {
  evt.preventDefault(); 

  let newCardInfo = {};

  newCardInfo.name = namePlaceInput.value;
  newCardInfo.link = linkImageInput.value;
  places.prepend(fillCard(newCardInfo, deleteCard, likeCard, openImg));
  closeModal(evt.target.closest(".popup"));
  addFormElement.reset();
}

function openImg(name,link) {
  let popupImg = document.querySelector(".popup_type_image");
  popupImg.querySelector(".popup__image").setAttribute("src", link);
  popupImg.querySelector(".popup__image").setAttribute("alt", name);
  popupImg.querySelector(".popup__caption").textContent = name;
  openAndHandleModalElement(popupImg);
}

// Добавление прослушивателей событий

addFormElement.addEventListener("submit", handleAddFormSubmit);

editFormElement.addEventListener("submit", handleFormSubmit);

addCardButton.addEventListener("click", () =>{
openAndHandleModalElement(modalAddCard);
});

editProfileButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openAndHandleModalElement(modalEditElement);
});

// Вывести карточки на страницу
initialCards.forEach((item) => {
  const card = fillCard(item, deleteCard, likeCard, openImg);
  places.append(card);
});
