import gastronomiaPlate from "./images/gastronomia-plate.png";
import {textCreator, imageCreator} from "./tools.js";

function homeContent() {
    const content = document.createElement('div');
    let contentFragment = textCreator("p", "At GastronoMía, we believe that food is more than just sustenance; it's an experience. Our chefs craft each dish with passion and precision, using the freshest ingredients to create flavors that linger long after your meal.");
    content.appendChild(contentFragment);
    contentFragment = imageCreator(gastronomiaPlate, "An elegantly plated gourmet meal featuring a perfectly seared steak accompanied by vibrant green asparagus, cherry tomatoes, and roasted baby carrots. The dish is artistically arranged on a rustic wooden table, enhanced with a delicate sauce drizzle. The cozy restaurant ambiance in the background is characterized by warm, soft lighting and subtle wooden textures, creating a welcoming dining atmosphere");
    content.appendChild(contentFragment);
    return content;
}

export {homeContent};