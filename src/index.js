// console.log("burning boats")

const characterBar = document.getElementById("character-bar")
const detailedInfo = document.getElementById("detailed-info") 
const characterName = document.getElementById("name")
const image = document.getElementById("image")
let voteCount = document.getElementById("vote-count")
const votesForm = document.getElementById("votes-form")
const votes = document.getElementById("votes")
const submitBtn = document.getElementById("submit-btn")
// console.log(characterBar, detailedInfo, characterName, image, voteCount, votesForm, votes, submitBtn)

const Request = async () => {
    let req = await fetch("http://localhost:3000/characters")
    let res = await req.json()
    // console.log(res)
    res.forEach((character) => {
        let span = document.createElement("span")
        span.innerText = character.name
        characterBar.append(span)
        span.addEventListener('click', () => {
            characterName.textContent = character.name
            image.src = character.image
            voteCount.textContent = character.votes
        })
        // I know it works up to here, so anything between here and the next comment is the issue
        votesForm.addEventListener('submit', (e) => {
            e.preventDefault()
            if (voteCount >= 0) {
                voteCount.textContent = parseInt(voteCount.value) + parseInt(votes.value)
            }
            console.log("submitted")
        })
        // I think the stuff above here is where is my problem (aka the button business)
    })
}
Request()

// When time ran out for the challenge, my console.log(submitted) was working, 
// and my count was going up by increments of 5 in my console
// but! I couldn't make that value show up in voteCount :(
