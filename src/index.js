import './pages/index.css'; 
import { initialCards } from './scripts/cards';
// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
const places = document.querySelector(".places__list");

// @todo: DOM узлы
const card = cardTemplate.querySelector(".card");

// @todo: Функция создания карточки

function fillCard(cardInfo, deleteCard, likeCard,open) {
  const card_clone = card.cloneNode(true);
  const card_img = card_clone.querySelector(".card__image");
  const card_title = card_clone.querySelector(".card__title");
  const deleteButton = card_clone.querySelector(".card__delete-button");
  const likeButton = card_clone.querySelector(".card__like-button");
 
  


  card_img.setAttribute("src", cardInfo.link);
  card_img.setAttribute("alt", cardInfo.name);

  card_title.textContent = cardInfo.name;

  deleteButton.addEventListener("click", deleteCard);
  likeButton.addEventListener("click", likeCard);
  card_img.addEventListener("click", open);
  

  return card_clone;
}

// @todo: Функция удаления карточки
function deleteCard(evt) {
  const deleteButtonTarget = evt.target;
  deleteButtonTarget.closest(".card").remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(item => {
    const card = fillCard(item, deleteCard,likeCard, open);
    places.append(card);
});

// Модальные окна

function OpenModal(element){
  element.classList.add('popup_is-opened'); 
}

function CloseModal(element){
 
  element.classList.remove('popup_is-opened'); 
  element.removeEventListener('click', null);
}

const profileEditButton = document.querySelector('.profile__edit-button'); 
const modalElement=  document.querySelector('.popup_type_edit');
const addCardButton = document.querySelector('.profile__add-button');
const modalCard = document.querySelector('.popup_type_new-card');




function profileEditButtonCallback(modal)
{
  modal.addEventListener('click',(evt)=>
  {
    if(evt.target.classList.contains('popup__close')|| evt.target.classList.contains('popup'))
    CloseModal(modal);
  })
  document.addEventListener('keydown',(evt)=>{
    if(evt.key === 'Escape')
    CloseModal(modal);
  })
  OpenModal(modal);
}
profileEditButton.addEventListener('click', ()=>profileEditButtonCallback(modalElement));
addCardButton.addEventListener('click', ()=>profileEditButtonCallback(modalCard));


// РАБОТА С ФОРМАМИ

// Находим форму в DOM
const formElement = document.querySelector('[name="edit-profile"]');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = formElement.querySelector('.popup__input_type_name');// Воспользуйтесь инструментом .querySelector()
const jobInput = formElement.querySelector('.popup__input_type_description');// Воспользуйтесь инструментом .querySelector()
nameInput.value= document.querySelector('.profile__title').textContent;
jobInput.value = document.querySelector('.profile__description').textContent;

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    
    const name = nameInput.value;
    const job = jobInput.value;
    // Получите значение полей jobInput и nameInput из свойства value
    document.querySelector('.profile__title').textContent=name;
    document.querySelector('.profile__description').textContent=job;
    // Выберите элементы, куда должны быть вставлены значения полей 
    // Вставьте новые значения с помощью textContent
    CloseModal(evt.target.closest('.popup'));
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

formElement.addEventListener('submit', handleFormSubmit);

// карточки

const addFormElement = document.querySelector('[name="new-place"]');
const namePlaceInput = addFormElement.querySelector('.popup__input_type_card-name');
const linkImageInput = addFormElement.querySelector('.popup__input_type_url');

function handleAddFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                              // Так мы можем определить свою логику отправки.
                                              // О том, как это делать, расскажем позже.

  let newCard = {};
  newCard.name = namePlaceInput.value;
  newCard.link = linkImageInput.value;
  places.prepend(fillCard(newCard, deleteCard, likeCard,open));
  CloseModal(evt.target.closest('.popup'));
  addFormElement.reset();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

addFormElement.addEventListener('submit', handleAddFormSubmit);

// heart
function likeCard(evt){
  evt.target.classList.toggle('card__like-button_is-active');
}
function open(evt){
  let popupimg = document.querySelector('.popup_type_image');
  console.log(evt.target);
  popupimg.querySelector('.popup__image').setAttribute("src", evt.target.src);
  popupimg.querySelector('.popup__image').setAttribute("alt", evt.target.alt);
  popupimg.querySelector('.popup__caption').textContent = evt.target.alt;
  profileEditButtonCallback(popupimg);  
}




