// For Search Bar Toggle
document.querySelector("#search_toggle").addEventListener("click", () => {
    document.querySelector("#header__nav_bar").classList.toggle("hidden");
    document.querySelector("#header_input").classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", function () {

    // For the radio options
    function activateSelection(groupClass) {
        const labels = document.querySelectorAll(`.${groupClass}`);
        labels.forEach(label => {
            if (label.querySelector("input").checked) {
                label.classList.add("active");
            }else{
                label.classList.remove("active");
            }
        });
        labels.forEach(label => {
            let input = label.querySelector("input");
            input.addEventListener("change", function () {
                labels.forEach(l => l.classList.remove("active"));
                label.classList.add("active");
                updateCartLink();
            });
        });
    };

    function updateCartLink() {
        let selectedFlavor = document.querySelector('input[name="flavor"]:checked')?.value;
        let selectedPurchaseType = document.querySelector('input[name="purchaseType"]:checked')?.value;
    
        if (selectedFlavor && selectedPurchaseType) {
            let cartLink = `https://abhishekmanhar.github.io/Alcami/cart?flavor=${selectedFlavor}&purchaseType=${selectedPurchaseType}`;
            document.getElementById("addToCart").href = cartLink;
        }
    }
    
    document.querySelectorAll('input[name="flavor"], input[name="purchaseType"]').forEach(radio => {
        radio.addEventListener("change", updateCartLink);
    });

    activateSelection("s2_flavors");
    activateSelection("s2_purchase");
    updateCartLink();

    // For the counters
    const counters = document.querySelectorAll(".s6_inner h2");

    function startCounter(counter) {
        let finalValue = parseInt(counter.textContent);
        let currentValue = 0;
        let speed = Math.ceil(finalValue / 50);

        let interval = setInterval(() => {
            currentValue += speed;
            if (currentValue >= finalValue) {
                currentValue = finalValue;
                clearInterval(interval);
            }
            counter.textContent = currentValue + "%";
        }, 50);
    }

    function checkViewport() {
        counters.forEach(counter => {
            const rect = counter.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                if (!counter.classList.contains("animated")) {
                    counter.classList.add("animated");
                    startCounter(counter);
                }
            }
        });
    }
    window.addEventListener("scroll", checkViewport);
    checkViewport();
});

// For section 2 product slider
var mySwiper2  = new Swiper(".mySwiper2", {
    slidesPerView:"auto",
    watchSlidesProgress: true,
    grabCursor:true,
    centeredSlides: false,
    allowTouchMove: false,
});
var mySwiper  = new Swiper(".mySwiper", {
    navigation: {
        nextEl: "#nextBtn",
        prevEl: "#prevBtn",
    },
    pagination: {
        el: ".pagination",
        clickable: true,
    },
    thumbs: {
        swiper: mySwiper2,
    },
    loop: true,
});

// For section 9 testimonial slider
let swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    pagination: {
      el: ".s9_pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#s9NextBtn",
      prevEl: "#s9PrevBtn",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            navigation: false,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
    },
});

// For accordion
let accordions = document.querySelectorAll(".accordion_heading");

accordions.forEach((accordion) => {
    accordion.addEventListener("click", function() {
        accordions.forEach((acc) => {
            if (acc !== this) {
                acc.classList.remove("active");
                acc.nextElementSibling.style.maxHeight = null;
            }
        });

        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});

// For Mobile menu
const menu_icon = document.querySelector(".hamburger_menu");
const menu_container = document.querySelector(".mobile_menu_container");
const menu_close = document.querySelector(".menu_close");

menu_icon.addEventListener("click", () => {
    menu_container.classList.toggle("active");
});
menu_close.addEventListener("click", () => {
    menu_container.classList.toggle("active");
});