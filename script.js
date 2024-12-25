document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.querySelector(".carousel-container");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");
    const dots = document.querySelectorAll(".carousel-indicators .dot");

    let currentIndex = 0;
    const totalItems = carouselItems.length;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;

        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
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

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });
    });
});
