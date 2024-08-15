console.log('contact.js has been loaded.')
import gastronomiaExterior from "./images/gastronomia-exterior.png";

function contactContent() {
    // const gastroIntroString = "At GastronoMía, we believe that food is more than just sustenance; it's an experience. Our chefs craft each dish with passion and precision, using the freshest ingredients to create flavors that linger long after your meal.";
    // const gastronomiaPlateAltText = "An elegantly plated gourmet meal featuring a perfectly seared steak accompanied by vibrant green asparagus, cherry tomatoes, and roasted baby carrots. The dish is artistically arranged on a rustic wooden table, enhanced with a delicate sauce drizzle. The cozy restaurant ambiance in the background is characterized by warm, soft lighting and subtle wooden textures, creating a welcoming dining atmosphere."
    // const gastroIntro = document.createElement('p');
    // gastroIntro.innerText = gastroIntroString;
    const heroImage = document.createElement('img');
    heroImage.src = gastronomiaExterior;
    // heroImage.alt = gastronomiaPlateAltText;
    const content = document.createElement('div');
    // content.appendChild(gastroIntro);
    content.appendChild(heroImage);
    return content;
}


export {contactContent};