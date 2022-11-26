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
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'Hi i am chandu';
// message.innerHTML =
//   'We used Cookiee  for improving personality and functionality. <button class="btn btn--close-cookie"> Got it </button>';
// // header.prepend(message);
// header.append(message);

// // Actually this message object will apperas at one place if we want at twice then we have to use cloneNode() as below...
// // header.prepend(message.cloneNode(true));
// header.before(message);
// header.after(message);
// console.log(message);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// Deleting Element
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     // New-method to delete
//     // message.remove();

//     //  Other method:
//     message.parentElement.removeChild(message);
//   });

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////
//   STYLES---

// message.style.backgroundColor = '#37383d';
// message.style.width = '100%'; // added in the inline style ...

// console.log(message.style.height); // It can not visible
// console.log(message.style.width); // Visiable only inline style..

// // If we want to get the extrenal css attributes/values..

// console.log(getComputedStyle(message).height);
// message.style.height =
//   Number.parseInt(getComputedStyle(message).height) + 40 + 'px';
// console.log(getComputedStyle(message).height);

// set-property
// document.documentElement.style.setProperty('--color-primary', 'orange');
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

//////////////////////////////////////////////////////
///////////////////////////////////////////////
// Implementing Smoothing Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const corrd = section1.getBoundingClientRect();
  console.log(corrd);
  const current = e.target.getBoundingClientRect();
  console.log(current); // positions

  console.log(
    'current_Scrolling (X/Y) : ',
    window.pageXOffset,
    window.pageYOffset
  );
  console.log(
    'height / weight : ',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  //   console.log(corrd.left, window.pageXOffset);
  //   console.log(corrd.top, window.pageYOffset);

  // Scrolling
  //   window.scrollTo(
  //     corrd.left + window.pageXOffset,
  //     corrd.top + window.pageYOffset
  //   );
  // method--2
  //   window.scrollTo({
  //     left: corrd.left + window.pageXOffset,
  //     top: corrd.top + window.pageYOffset,
  //     behavior: 'smooth',
  //   });

  section1.scrollIntoView({ behavior: 'smooth' });
});

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('AddEventListenor : works good...');

//   //   h1.removeEventListener('mouseenter', alertH1);
// };
// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
// // h1.onmouseenter = function (e) {
// //   alert('AddEventListenor : works good.1..');
// // };

// Event Propogation ...
// 1)travelling down(capturing)(top-to bottom)
// 2)travelling up (bubbling)(bottom to top)
// const randInt = (min, max) => Math.floor(Math.random() * max - min + 1 + min);

// const randomColor = () =>
//   `rgb(${randInt(0, 255)},${randInt(0, 255)},${randInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Container :', e.target, e.currentTarget);
//   //   console.log(e.currentTarget == this);

//   //   Stop Propogation ... but not a good idea to stop
//   //   e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// //   console.log('nav_items :', e.target, e.currentTarget);

//   //   e.stopPropagation();
// });
// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('nav :', e.target, e.currentTarget);
//   },
//   true
// );
/////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////////
// event delegation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     // console.log('link');
//     const id = this.getAttribute('href');
//     console.log(id);
//     // console.log(e.target);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // console.log(e.target);
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/////////////////////////////////////////////
// ////////////////////////////////////////////////
// // DOM traversing ...

// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// // going downward child
// // console.log(h1);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'white';
// ////////////////////////
// // going upward parent
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('header').style.backgroundColor = 'red';
// // going Sideways :siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.nextSibling);
// console.log(h1.previousSibling);

// // h1.nextElementSibling.style.color = 'green';
// console.log(h1.parentElement.children);

////////////////////////////////////////////////
///////////////////////////////////////////////////
// tabbed Component. . .
const tabs = document.querySelectorAll('.operations__tab');
// console.log(tabs);
const tab_container = document.querySelector('.operations__tab-container');
const tabs_content = document.querySelectorAll('.operations__content');
console.log(tabs_content);

tab_container.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);
  if (!clicked) return;
  tabs.forEach(function (el) {
    el.classList.remove('operations__tab--active');
  });
  clicked.classList.add('operations__tab--active');
  // const data = clicked.getAttribute('data-tab'));
  // or
  // console.log(clicked.dataset.tab);
  tabs_content.forEach(el =>
    el.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
  // console.log(tabs_content);
});

/////////////////////////////////////////////////////
//////////////////////////////////////////////////

/////////////////////////////////  ///////////////

// Passing Argumnets as Event Handlers
const nav = document.querySelector('.nav');

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// nav.addEventListener('mouseover', function (e) {
//   HandleHover(e, 0.5);
// });
// nav.addEventListener('mouseout', function (e) {
//   HandleHover(e, 1);
// });

////////////////////////////////////////////////////
//////////////////////////////////////////////////
///////Implemeting the sticky navigation ....

// const initialcoords = section1.getBoundingClientRect();
// console.log(initialcoords);
// window.addEventListener('scroll', function (e) {
//   //   console.log(this.scrollY);
//   console.log(scrollY);
//   console.log(this);
//   if (this.window.scrollY >= initialcoords.top) {
//     nav.classList.add('sticky');
//     nav.style.opacity = 0.8;
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

/////////////////////////////////////////////////////
// ///////////////////////////////////////////////
/////////////////////////////////////////////////

// intersection observer API
// const obsCallBack = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: 0.1,
// };

// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(section1);

// implementing the sticknav by intersectionObserver ...
// const header = document.querySelector('.header')
const nav_height = nav.getBoundingClientRect().height;

const sticky_nav = function (entries) {
  //   console.log(entries);
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
    // nav.style.opacity = 0.8;
  } else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(sticky_nav, {
  root: null,
  threshold: 0,
  rootMargin: `-${nav_height}px`,
});
headerObserver.observe(header);

///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

// Reveal Sections ....
const allsection = document.querySelectorAll('.section');
// console.log(allsection);
const reavelsec = function (entries, observer) {
  const [entry] = entries;
  //   console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
  //   entr.classList.remove('section--hidden');
};
const SectionObserver = new IntersectionObserver(reavelsec, {
  root: null,
  threshold: 0.15,
});

allsection.forEach(function (section) {
  SectionObserver.observe(section);
  section.classList.add('section--hidden');
});