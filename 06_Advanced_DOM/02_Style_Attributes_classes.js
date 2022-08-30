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

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////
//   STYLES---

message.style.backgroundColor = '#37383d';
message.style.width = '100%'; // added in the inline style ...

console.log(message.style.height); // It can not visible
console.log(message.style.width); // Visiable only inline style..

// If we want to get the extrenal css attributes/values..

console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseInt(getComputedStyle(message).height) + 40 + 'px';
console.log(getComputedStyle(message).height);

// set-property
document.documentElement.style.setProperty('--color-primary', 'orange');
// document.documentElement.style.setProperty('--color-primary', 'orange');

///////////////////////////////////////////////////////
////////////////////////////////////////////////////
/////////////////////////////////////////////
//  Attribute

const logo = document.querySelector('.nav__logo   ');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.getAttribute('src'));
logo.alt = 'Beautiful and amazing';
// Non Standard ...
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'bankist');
/////////////////////////////////////////////
const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));
//////////////////////////////////////////////
const link1 = document.querySelector('.nav__link--btn');
console.log(link1.href);
console.log(link1.getAttribute('href'));

// /////////////////////////////
// classes

logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

// Dont use this
logo.className = 'Chandu'; // it will override all classname.....
