const contactForm = document.getElementById("contactForm");
const themeButton = document.getElementById("themeButton");

// Dark and light mode
if (themeButton) {
    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "☀️ Light Mode";
        } else {
            themeButton.textContent = "🌙 Dark Mode";
        }
    });
}


// Contact form validation and preview
if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const formPreview = document.getElementById("formPreview");

        if (name === "") {
            formPreview.textContent = "Please enter your name.";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formPreview.textContent = "Please enter a valid email address.";
            return;
        }

        if (message === "") {
            formPreview.textContent = "Please enter your message.";
            return;
        }

        formPreview.textContent =
            "Your information was successfully validated. " +
            "Name: " + name +
            " | Email: " + email +
            " | Message: " + message;
    });
}


// Gallery viewer
const galleryImage = document.getElementById("galleryImage");
const galleryCaption = document.getElementById("galleryCaption");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
const galleryPhotos = [
    {
        image: "images/IMG-20260924-WA0080.jpg",
        caption: "Photo 1: My first personal photo."
    },
    {
        image: "images/IMG-20260924-WA0082.jpg",
        caption: "Photo 2: My second personal photo."
    },
    {
        image: "images/IMG-20260924-WA0093.jpg",
        caption: "Photo 3: My third personal photo."
    }
];

let currentPhoto = 0;

// Displays the selected gallery photo
function showPhoto() {

    if (galleryImage && galleryCaption) {

        galleryImage.src = galleryPhotos[currentPhoto].image;

        galleryCaption.textContent =
            galleryPhotos[currentPhoto].caption;
    }
}


if (nextButton && previousButton) {

    nextButton.addEventListener("click", function () {

        if (currentPhoto < galleryPhotos.length - 1) {
            currentPhoto++;
            showPhoto();
        }
    });


    previousButton.addEventListener("click", function () {

        if (currentPhoto > 0) {
            currentPhoto--;
            showPhoto();
        }
    });
}


// Study hours calculator
const calculateButton = document.getElementById("calculateButton");

if (calculateButton) {

    calculateButton.addEventListener("click", function () {

        const hoursInput =
            document.getElementById("hoursPerDay");

        const daysInput =
            document.getElementById("daysPerWeek");

        const calculatorResult =
            document.getElementById("calculatorResult");

        const hours = Number(hoursInput.value);
        const days = Number(daysInput.value);

        if (hoursInput.value === "" || daysInput.value === "") {

            calculatorResult.textContent =
                "Please enter both hours and days.";

            return;
        }

        if (hours < 0) {

            calculatorResult.textContent =
                "Hours cannot be negative.";

            return;
        }

        if (days < 1 || days > 7) {

            calculatorResult.textContent =
                "Days per week must be between 1 and 7.";

            return;
        }

        calculatorResult.textContent =
            "You plan to study " +
            (hours * days) +
            " hours per week.";
    });
}