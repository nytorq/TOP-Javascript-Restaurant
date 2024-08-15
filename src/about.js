import gastronomiaInterior from "./images/gastronomia-Interior.png";
import {textCreator, imageCreator} from "./tools.js";

function aboutContent() {
    const content = document.createElement('div');
    let contentFragment = imageCreator(gastronomiaInterior, "An inviting image of the restaurant's interior, showcasing a cozy, modern dining area with warm lighting, wooden furniture, and elegant table settings");
    content.appendChild(contentFragment);
    contentFragment = textCreator("h2", "About us");
    content.appendChild(contentFragment);
    contentFragment = textCreator("p", "Founded in 2023, GastronoMía has quickly become a cornerstone of fine dining in your city. Our mission is simple: to bring people together through the joy of good food. From our farm-to-table ingredients to our expertly curated wine list, we strive to offer an unforgettable dining experience.");
    content.appendChild(contentFragment);
    contentFragment = textCreator("h2", "Our philosophy");
    content.appendChild(contentFragment);
    contentFragment = textCreator("p", "We believe in sustainability, quality, and the power of a great meal. Our team is dedicated to providing an atmosphere where guests can relax, enjoy, and make memories with every visit.");
    content.appendChild(contentFragment);
    return content;
}


export {aboutContent};