'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
console.log(modal);
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Changed--1
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////////
/////////////////////////////////////////////////
// Selecting-Elements
////////////////////////////////////////////////////
// console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSelector = document.querySelectorAll('section');
console.log(allSelector);

document.getElementById('button');

const allbuttons = document.getElementsByTagName('button');
console.log(allbuttons);

console.log(document.getElementsByClassName('btn'));

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//Creating Element ....
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'Hi i am chandu';
message.innerHTML =
  'We used Cookiee  for improving personality and functionality. <button class="btn btn--close-cookie"> Got it </button>';
// header.prepend(message);
header.append(message);

// Actually this message object will apperas at one place if we want at twice then we have to use cloneNode() as below...
// header.prepend(message.cloneNode(true));
header.before(message);
header.after(message);
// console.log(message);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// Deleting Element
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // New-method to delete
    // message.remove();

    //  Other method:
    message.parentElement.removeChild(message);
  });
