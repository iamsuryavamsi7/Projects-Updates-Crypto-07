const hamburger = document.querySelector(".hamburger");
const amazonHeader = document.querySelector(".amazon-header");

const hamburgerFunction = () => {

    if (!amazonHeader.classList.contains("is-toggled-active")) {

        amazonHeader.classList.add("is-toggled-active");

    } else {

        amazonHeader.classList.remove("is-toggled-active");

    }

}

hamburger.addEventListener("click", () => {

    hamburgerFunction();

})