// Created By Sefoo333 

/*const but = document.getElementById('buts');
const contents = document.getElementById('links');

but.addEventListener('click', function () {
    if (contents.classList.contains('on')) {
        contents.classList.remove('on');

    } else {
        contents.classList.add('on');
    }
});


console.log("hi")
*/

console.log("Created By Sefoo333 & insta: seif.ali223")

// Created By Sefoo333 

const but = document.getElementById('buts');
const content = document.getElementById('links');
const home = document.getElementById('Home');
const bodu = document.getElementById('ao');
const button = document.getElementById('clicker')
const icon = document.getElementById('iconss')

but.addEventListener('click', function () {
    if (content.classList.contains('on')) {
        content.classList.remove('on');
        console.log("d")
        // Created By Sefoo333 
        home.style.position = "fixed"
        bodu.style.overflow = "hidden";
    } else {
        content.classList.add('on');
        console.log("e")
        home.style.position = "absolute"
        bodu.style.overflowY = "scroll";
    }
});


button.addEventListener('click', function () {
    if (bodu.classList.contains('off')) {
        bodu.classList.remove('off')
        bodu.classList.add('onlybackground')
        icon.classList.remove('svg-inline--fa fa-moon')
        icon.classList.add('svg-inline--fa fa-sun')

    } else {
        bodu.classList.remove('onlybackground')
        bodu.classList.add('off')
        icon.classList.add('svg-inline--fa fa-moon')
        icon.classList.remove('svg-inline--fa fa-sun')
    }

})



// Created By Sefoo333 


// scroll

const carousel = document.querySelector(".carousel"),
    firstImg = carousel.querySelectorAll("img")[0],
    arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    });
});

// Created By Sefoo333 

const autoSlide = () => {
    if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 14;
    let valDifference = firstImgWidth - positionDiff;

    if (carousel.scrollLeft > prevScrollLeft) {
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }

    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if (!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);