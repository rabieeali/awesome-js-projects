/**************************************************************************/
/**************************************************************************/
/**************************************************************************/
/**************************JAVASCRIPT*************************************/
/**************************************************************************/
/**************************************************************************/
/**************************************************************************/


// const URL = "https://fakestoreapi.com/products"
// const container = document.querySelector("#cards-container")
// const input = document.querySelector("#search")

// fetch(URL).then(res => res.json()).then(data => {

//     let card = ""

//     data.map(product => {
//         card += `
//     <div class="grid-example m-auto col s12 m4">
//         <div class="card">
//             <div class="card-image">
//                 <img class="img-custom" src=${product.image} alt=${product.title}/>
//                 <h6 class="card-title">${product.title}</h6>
//                 <a class="btn-floating halfway-fab waves-effect waves-light red center-align fs">+</a>
//             </div>
//             <div class="card-content">
//                 <p>${product.description.slice(0, 100) + "..."}</p>
//             </div>
//         </div>
//     </div>

//     `
//     })

//     container.innerHTML = card;

// })


// input.addEventListener("keyup", () => {
//     const value = input.value.toLowerCase()
//     const cards = document.getElementsByClassName("card")

//     Array.from(cards).map(card => {
//         const text = card.children[0].children[1].textContent
//         text.toLowerCase().indexOf(value) > -1 ? card.style.display = "" : card.style.display = "none"
//     })
// })


/**************************************************************************/
/**************************************************************************/
/**************************************************************************/
/*******************************jQuery*************************************/
/**************************************************************************/
/**************************************************************************/
/**************************************************************************/


const URL = "https://fakestoreapi.com/products"
const container = $("#cards-container")
const input = $("#search")
let card = ""

$.get(URL).done(data => {
    $.each(data, (_, product) => {
        card += `
    <div class="grid-example m-auto col s12 m4">
        <div class="card">
            <div class="card-image">
                <img class="img-custom" src=${product.image} alt=${product.title}/>
                <h6 class="card-title">${product.title}</h6>
                <a class="btn-floating halfway-fab waves-effect waves-light red center-align fs">+</a>
            </div>
            <div class="card-content">
                <p>${product.description.slice(0, 100) + "..."}</p>
            </div>
        </div>
    </div>

    `
    })
    container.html(card)
})

input.on("keyup", () => {
    const value = input.val().toLowerCase()
    const cards = $(".card")
    const cardsArray = $.makeArray(cards);
    const noItem = $(".no-item")
    $.each(cardsArray, (_, card) => {
        const text = card.children[0].children[1].textContent;
        text.toLowerCase().indexOf(value) > -1 ? card.style.display = "" : card.style.display = "none";
    })
})