// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


// parentOfCards.appendChild(articleCardMaker(response))
// console.log(response.data.articles)

const parentOfCards = document.querySelector('.cards-container')

axios.get("https://lambda-times-backend.herokuapp.com/articles")

.then(response => {
    a = 0
    b = 0
    c = 0
    d = 0
    e = 0

    bootstrapArray = response.data.articles.bootstrap
    javascriptArray = response.data.articles.javascript
    jqueryArray = response.data.articles.jquery
    nodeArray = response.data.articles.node
    technologyArray = response.data.articles.technology


    for (i = 0; i < 15; i++){
        if (a < bootstrapArray.length){
            bootstrapArray.forEach(article => {
                let newCard = articleCardMaker(article)
                parentOfCards.appendChild(newCard)
                a = a + 1
            })
        }else
        if (b < javascriptArray.length){
            javascriptArray.forEach(object => {
                let newCard = articleCardMaker(object)
                parentOfCards.appendChild(newCard)
                b = b + 1
            })
        }else
        if (c < jqueryArray.length){
            jqueryArray.forEach(object => {
                let newCard = articleCardMaker(object)
                parentOfCards.appendChild(newCard)
                c = c + 1
            })
        }else 
        if (d < nodeArray.length){
            nodeArray.forEach(object => {
                let newCard = articleCardMaker(object)
                parentOfCards.appendChild(newCard)
                d = d + 1
            })
        }else
        if (e < technologyArray.length){
            technologyArray.forEach(object => {
                let newCard = articleCardMaker(object)
                parentOfCards.appendChild(newCard)
                e = e + 1
            })
        }
    }
    console.log(response.data.articles)
})
.catch(error => {
    console.log(`This is the error message for the article cards`, error)
})


function articleCardMaker (data){
    const {authorName, authorPhoto, headline} = data
    const card = document.createElement('div')
    card.classList.add('card')
    const headlineTag = document.createElement('div')
    headlineTag.classList.add('headline')
    headlineTag.textContent = `${headline}`
    card.appendChild(headlineTag)  
    const author = document.createElement('div')
    author.classList.add('author')
    card.appendChild(author)
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    author.appendChild(imgContainer)
    const img = document.createElement('img')
    img.src = `${authorPhoto}`
    imgContainer.appendChild(img)
    const span = document.createElement('span')
    span.textContent = `${authorName}`
    author.appendChild(span)
return card
}
