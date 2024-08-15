import "./styles.css";
import { homeContent } from "./home.js";
import { aboutContent } from "./about.js";
import { contactContent } from "./contact.js";

const mainContentArea = document.getElementById('main');
const navButtons = document.querySelectorAll('button');
console.log(navButtons)
const pageContentFunctions = {
    home: homeContent,
    about: aboutContent,
    contact: contactContent
};


function linkFunctionality(event) {
    mainContentArea.innerHTML = '';
    let page = event.target.dataset.page;
    mainContentArea.appendChild(pageContentFunctions[page]());
    navButtons.forEach(button => button.classList.remove('active'));
    switch (page) {
        case 'home':
            navButtons[0].classList.add('active');
            break;
        case 'about':
            navButtons[1].classList.add('active');
            break;
        case 'contact':
            navButtons[2].classList.add('active');
            break;
    }
};

for (let i = 0 ; i < navButtons.length ; i++) {
    navButtons[i].addEventListener('click', linkFunctionality);
}

mainContentArea.appendChild(homeContent());