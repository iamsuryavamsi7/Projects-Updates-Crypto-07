const hamburger = document.querySelector(`.hamburger`)
const header = document.querySelector(`.header`)

const hamburgerFunction = () => {

    if (!header.classList.contains(`isActive`)){

        header.classList.add("isActive");

    }

}

hamburger.addEventListener("click", () => {
    hamburgerFunction();
})

const closeI = document.querySelector(".js-close-i");

const closeIFunction = () => {

    if (header.classList.contains("isActive")) {

        header.classList.remove("isActive");

    }


}

closeI.addEventListener("click", () => {

    closeIFunction();

})

function filterButton(argu01){

    const filterButton01 = document.querySelector(argu01)

    const filterButtonActiveAll = document.querySelector(".filter_button01");

    if (!filterButton01.classList.contains('isActive')){

        filter();

        filterButton01.classList.add('isActive')

    } else if (!filterButtonActiveAll.classList.contains("isActive")){

        filter();
    
        filterButtonActiveAll.classList.add("isActive");
    
    }else {

        filterButton01.classList.remove('isActive')

    }

}

function filter(){

    const filterElement = document.querySelector('.isActive');

    if (filterElement){

        filterElement.classList.remove("isActive");

    } 

}

