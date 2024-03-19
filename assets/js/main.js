window.addEventListener('load', function () {
    setTimeout(function () {
        var arrowIcons = document.getElementById('arrow-icons');
        arrowIcons.classList.remove('hidden');
    }, 5000);

    var scrolling = false;
    window.addEventListener('scroll', function () {
        if (!scrolling) {
            scrolling = true;
            setTimeout(function () {
                var arrowIcons = document.getElementById('arrow-icons');
                arrowIcons.classList.add('hidden');
                scrolling = false;
            }, 500);
        }
  });
});

function myFunction(x) {
    x.classList.toggle("change");
}
function toggleMenu() {
    var menu = document.getElementById("mobile-menu");
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
}

var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  loop: true,
  backDelay: 900,
  backSpeed: 30,
  smartBackspace: true,
  typeSpeed: 40,
  startDelay: 2000,
});

let progressBarList = document.querySelectorAll(".circular-progress");
let valueContainerList = document.querySelectorAll(".value-container");

let speed = 50;
let startAnimation = false;

window.addEventListener("scroll", () => {
  if (!startAnimation && isElementInViewport(progressBarList[0])) {
    startAnimation = true;
    progressBarList.forEach((progressBar, index) => {
      let progressValue = 0;
      let progressEndValue = parseInt(valueContainerList[index].textContent);

      let progress = setInterval(() => {
        progressValue++;
        valueContainerList[index].textContent = `${progressValue}`;
        progressBar.style.background = `conic-gradient(
          #113247 ${progressValue * 3.6}deg,
          #cadcff ${progressValue * 3.6}deg
        )`;

        if (progressValue >= progressEndValue) {
          clearInterval(progress);
        }
      }, speed);
    });
  }
});

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const secondS = document.getElementById("second-s");
const image = document.getElementById("image");

let images = [];
let currentIndex = 0;

// Fetch images from the specified URL
function fetchImages() {
const url = "https://galleria.sgm.ng/1CEPCDtALe9BAupm9";

fetch(url)
.then((response) => response.json())
.then((data) => {
images = data;
renderImages();
startSlideshow();
})
.catch((error) => {
console.error("Error fetching images", error);
});
}

// Render images inside the "second-s" element
function renderImages() {
const imageContainer = document.getElementById("second-s");
imageContainer.innerHTML = "";

images.forEach((imageUrl, index) => {
const imgElement = document.createElement("img");
imgElement.src = imageUrl;
imgElement.classList.add("w-36", "m-2", "h-36", "demo", "cursor-pointer");
imgElement.dataset.index = index;
imgElement.addEventListener("click", () => currentSlide(index));

imageContainer.appendChild(imgElement);
});
}

// Start automatic slideshow with a 3-second interval
function startSlideshow() {
setInterval(() => {
currentIndex++;
if (currentIndex >= images.length) {
currentIndex = 0;
}
showSlides(currentIndex);
}, 3000);
}


  
// Display the slide with the given index
function showSlides(index) {
const slides = document.getElementsByClassName("demo");
const photoNumber = document.getElementById("photo-number");

for (let i = 0; i < slides.length; i++) {
slides[i].classList.remove("active");
}

image.src = images[index];
slides[index].classList.add("active");
photoNumber.textContent = `${index + 1} / ${images.length}`;
}
// Set the current slide
function currentSlide(index) {
currentIndex = index;
showSlides(currentIndex);
}

// Event listener for previous and next slide buttons
document.addEventListener("DOMContentLoaded", function () {
fetchImages();
const section = document.getElementById("gallery");
  
// Function to check if an element is in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to start the slideshow when section is in viewport
function startSlideshowOnScroll() {
  if (isElementInViewport(section)) {
    startSlideshow();
    window.removeEventListener("scroll", startSlideshowOnScroll);
  }
}

// Add scroll event listener to start slideshow when section is in viewport
window.addEventListener("scroll", startSlideshowOnScroll);
});

const form = document.querySelector('#hire-form');
const submitBtn = document.querySelector('#submit-btn');
const modal = document.querySelector('#modal');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://formsubmit.co/ajax/drisaden@gmail.com', true);
    xhr.setRequestHeader('accept', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
            modal.classList.remove('hidden');
        }
    };
    xhr.send(formData);
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});

        function toggleShow(targetId) {
            var target = document.getElementById(targetId);
            var accordionIcon = target.previousElementSibling.querySelector('[data-accordion-icon]');

            if (target.classList.contains("hidden")) {
                target.classList.remove("hidden");
                accordionIcon.classList.remove('fa-caret-down');
    accordionIcon.classList.add('fa-caret-up');
            } else {
                target.classList.add("hidden");
                accordionIcon.classList.remove('fa-caret-up');
    accordionIcon.classList.add('fa-caret-down');
            }
        }