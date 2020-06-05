// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function headerMaker(data) {

    const header = document.createElement('div')
    header.classList.add('header')
    
    const spanDate = document.createElement('span')
    spanDate.classList.add('date')
    spanDate.textContent = `SMARCH 28, 2019`

    const h1 = document.createElement('h1')
    h1.textContent = `Lambda Times`
    
    const spanTemp = document.createElement('span')
    spanTemp.classList.add('temp')
    spanTemp.textContent = `98°`

    header.appendChild(spanDate)
    header.appendChild(h1)
    header.appendChild(spanTemp)

return header
}

document.querySelector('.header-container').appendChild(headerMaker())