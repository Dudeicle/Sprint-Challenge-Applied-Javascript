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

const parentOfCards = document.querySelector('.cards-container')

axios.get("https://lambda-times-backend.herokuapp.com/articles")

.then(response => {
    parentOfCards.appendChild(articleCardMaker(response))
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
