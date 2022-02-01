const template = document.querySelector("template")
const container = document.querySelector(".Container");
const Arrows = document.querySelector(".Arrows");
const fragment = document.createDocumentFragment();

const ArrSlider = [{
    img: `/images/desktop-image-hero-1.jpg`,
    title: "Discover innovative ways to decorate",
    description: `We provide unmatched quality, comfort, and style for property owners across the country. 
    Our experts combine form and function in bringing your vision to life. Create a room in your 
    own style with our collection and make your property a reflection of you and what you love.`,
    shop: "Shop now"
}, {
    img: `/images/desktop-image-hero-2.jpg`,
    title: "We are available all across the globe",
    description: `
    With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.
    `,
    shop: "Shop now"
}, {
    img: `/images/desktop-image-hero-3.jpg`,
    title: "  Manufactured with the best materials",
    description: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`,
    shop: "Shop now"
}]




const Slider = (indice) => {
    container.textContent = "";
    const clone = template.content.cloneNode(true);
    clone.querySelector(".CardImg img").src = ArrSlider[indice].img;
    clone.querySelector(".content h3").textContent = ArrSlider[indice].title;
    clone.querySelector(".content p").textContent = ArrSlider[indice].description;
    clone.appendChild(fragment);
    container.appendChild(clone)
}

let indice = 0;
container.addEventListener("click", (e) => {
    if (e.target.classList.value === "FlechaIzquierda") {
        console.log(indice)
        indice--;
        if (indice === -1) {
            indice = 2
        }
        Slider(indice)
    } else if (e.target.classList.value === "FlechaDerecha") {
        console.log(indice)
        indice++;
        if (indice === 3) {
            indice = 0
        }
        Slider(indice)
    }
})

Slider(0);