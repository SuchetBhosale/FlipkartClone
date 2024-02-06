onLoad()

function onLoad() {
    session();
    imageCarousel();
    carousel();
    topDealImages();
}

// function for repeating session items
function session() {
    let sessions = document.querySelector(".sessions-container")

    let innerHTML = ``;
    items.forEach(items => {
        innerHTML = innerHTML + `
    <div class="sessions">
    <div class="session-image">
    <img src="${items.Image}" alt="${items.label}">
    </div>
    <label class="session-label">${items.label}</label>
    </div>
    `
    })
    sessions.innerHTML = innerHTML;
}

//function for repeating images in second container
function topDealImages(){
    let topDealImages = document.querySelector(".flex")

    let images = ``;
    dealImages.forEach(dealImages=>{
        images = images + `
        <img src="${dealImages.path}" alt="${dealImages.id}">
        `
    })
    topDealImages.innerHTML = images;
}

//function for repeating carousel Images
function imageCarousel() {
    let imageSlider = document.querySelector(".Carousel-item")

    let carouselImageHTML = ``;
    carouselImage.forEach(carouselImage => {
        carouselImageHTML = carouselImageHTML + `
    <img id="${carouselImage.id}" src="${carouselImage.path}" alt="${carouselImage.id}">
    `
    })
    imageSlider.innerHTML = carouselImageHTML;
}

// function to make the carousel funcational

function carousel() {
    let carousel = document.querySelector(".Carousel-item");
    let translate = 0;

    setInterval(() => {
        if (translate >= 0 && translate < 200) {
            translate = translate + 100
        } else {
            translate = 0
        }
        carousel.style.transition = '2s'
        carousel.style.transform = `translateX(${-translate}%)`
    }, 3000)

    right();
    left();
}

function right() {
    let carousel = document.querySelector(".Carousel-item");
    let translate = 0;
    if (translate > 300) {
        translate += 100;
        carousel.style.transition = '1s'
        carousel.style.transform = `translateX(${-translate}%)`
        // console.log(translate)
    }
}

function left() {
    let carousel = document.querySelector(".Carousel-item");
    let translate = 0;
    if (translate > 0) {
        translate = translate - 100;
        carousel.style.transition = '1s'
        carousel.style.transform = `translateX(${-translate}%)`
        console.log(translate)
    }
}



