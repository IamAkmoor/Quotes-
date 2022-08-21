const api = "https://programming-quotes-api.herokuapp.com/quotes/random"
const quoteBtn = document.getElementById("quote-btn");
const quote = document.querySelector(".quote")
const author = document.querySelector(".author");

//1
// async function fetchingData(url){
//     const res =  await fetch(url);
//     const data = await res.json()
//     return data
// }

// function randomQuote(url) {
//     fetchingData(url).then(data =>{
//         quote.innerHTML = data.en;
//         author.innerHTML = data.author
//     })
// }

// quoteBtn.addEventListener("click", ()=>{
//     randomQuote(api)
// })

//2
let maxLength = quote.innerText.length
const randomQuote = ()=>{
    fetch(api).then(res => res.json()).then(data =>{
        quote.innerHTML = data.en;
        author.innerHTML = data.author
    })
}

quoteBtn.addEventListener("click", randomQuote)