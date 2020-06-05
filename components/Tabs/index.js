// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
axios.get("https://lambda-times-backend.herokuapp.com/topics")
let topicsArray = []
const parentOfTopics = document.querySelector('.topics')

    axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        topicsArray = response.data.topics
        topicsArray.forEach(topic => {
            let newTopic = makeTopic(topic)
            parentOfTopics.appendChild(newTopic)
        })
    })
    .catch(error => {
        console.log(`this is the error message number 2`, error)
    })

function makeTopic (topics) {
    const topic = document.createElement('div')
    topic.classList.add('tab')
    topic.textContent = topics
    return topic
}
