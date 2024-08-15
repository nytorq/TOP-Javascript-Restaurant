import "./styles.css";
import { homeContent } from "./home.js";
import { aboutContent } from "./about.js";
import { contactContent } from "./contact.js";
console.log('index.js has been loaded.');

const mainContentArea = document.getElementById('main');
const navButtons = document.querySelectorAll('button');

const pageContentFunctions = {
    home: homeContent,
    about: aboutContent,
    contact: contactContent
};


function linkFunctionality(event) {
    mainContentArea.innerHTML = '';
    let page = event.target.dataset.page;
    mainContentArea.appendChild(pageContentFunctions[page]());
    // mainContentArea.appendChild(aboutContent());
};

for (let i = 0 ; i < navButtons.length ; i++) {
    navButtons[i].addEventListener('click', linkFunctionality);
}

mainContentArea.appendChild(homeContent());