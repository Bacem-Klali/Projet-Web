document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.querySelector(".carrousel-container");
    const carouselItems = document.querySelectorAll(".carrousel-item");
    const prevButton = document.querySelector(".carrousel-control.precedent");
    const nextButton = document.querySelector(".carrousel-control.suivant");
    const dots = document.querySelectorAll(".carrousel-indicators .point");

    let currentIndex = 0;
    const totalItems = carouselItems.length;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;

        dots.forEach((point, index) => {
            point.classList.toggle("active", index === currentIndex);
        });
    }

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    dots.forEach((point, index) => {
        point.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });
    });
});
