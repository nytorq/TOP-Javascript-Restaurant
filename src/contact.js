import gastronomiaExterior from "./images/gastronomia-exterior.png";
import {textCreator, imageCreator} from "./tools.js";

function contactContent() {
    const content = document.createElement('div');
    let contentFragment = imageCreator(gastronomiaExterior, "A sleek, minimalist image of the restaurant's exterior with a well-designed entrance, showing the restaurant's name and logo prominently");
    content.appendChild(contentFragment);
    contentFragment = textCreator("h2", "Contact us");
    content.appendChild(contentFragment);
    contentFragment = textCreator("p", "123 Flavor Street, Foodie City, FC 45678");
    content.appendChild(contentFragment);
    contentFragment = textCreator("p", "(123) 456-7890");
    content.appendChild(contentFragment);
    contentFragment = textCreator("p", "We recommend making a reservation to ensure a table at your preferred time. Call us or use our online reservation system.");
    content.appendChild(contentFragment);
    return content;
}


export {contactContent};