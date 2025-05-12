// 1 - отримай body елемент і виведи його в консоль;

const container = document.querySelector(".container");
console.log(container);

// 2 - отримай елемент id="title" і виведи його в консоль;

const title = document.querySelector("#title");
console.log(title);

// 3 - отримай елемент class="list" і виведи його в консоль;

const list = document.querySelector(".list");
console.log(list);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;

const topic = document.querySelectorAll("[data-topic]");
console.log(topic);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

const firstElement = document.querySelector("[data-topic]"); 
console.log(firstElement); 
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

const elements = document.querySelectorAll("[data-topic]"); 
const lastElement = elements[elements.length - 1]; 
console.log(lastElement); 

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;

const titleNext = document.querySelector('#title'); 
const nextElement = title.nextElementSibling; 
console.log(nextElement); // 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

let completedHeading = document.querySelector('.completed');
console.log(completedHeading);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список









console.log(window.localStorage);
console.log(localStorage);
