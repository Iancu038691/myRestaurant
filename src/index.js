import './style.css';





const content = document.querySelector('#content');

const header = document.createElement('div');
header.classList.add('header');

const middle = document.createElement('div');
middle.classList.add('middle');

const footer = document.createElement('div');
footer.classList.add('footer');
footer.textContent = "Created by Iancu"

content.appendChild(header);
content.appendChild(middle);
content.appendChild(footer);

const menu = document.createElement('button');
const aboutus = document.createElement('button');
const location = document.createElement('button');

menu.classList.add('menu');
aboutus.classList.add('aboutus');
location.classList.add('location');

menu.textContent = 'Menu';
aboutus.textContent = 'About us';
location.textContent = 'Our location';

header.appendChild(menu);
header.appendChild(aboutus);
header.appendChild(location);






