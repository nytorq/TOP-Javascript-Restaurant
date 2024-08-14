import "./styles.css";
import { home } from "./home.js";
import { about } from "./about.js";
import { contact } from "./contact.js";
import gastronomiaLogo from "./images/gastronomia-logo.png";
console.log('wassup?');

// const logo = document.querySelector('#logo');
// logo.src = gastronomiaLogo;
const pageContent = document.querySelector('#content');
const testContent = document.createElement('div');
testContent.innerText = 'this is test content';
pageContent.appendChild(testContent);


/* 

Tab switching functionality goes here
You should have event listeners for each button in the header navbar 
that wipes out the current contents of div#content and then runs the correct
 ‘tab module’ to populate it with the new contents again.

 */
