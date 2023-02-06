window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top-btn").style.display = "block";
    } else {
        document.getElementById("back-to-top-btn").style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}

document.getElementById("back-to-top-btn").addEventListener("click", topFunction);

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("img-slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function batches() {
    document.getElementById("carousel").style.display = "none !important";
    document.getElementById("event").style.display = "none !important";
    document.getElementById("about_us").style.display = "none !important";
    document.getElementById("testimonials").style.display = "none !important";
}

function events() {
    let frame = document.getElementById("iframe");
    frame.style.display = 'block !important';
    frame.src = 'events.html';
}

