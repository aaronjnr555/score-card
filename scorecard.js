let homeTag = document.getElementById("home-tag")
let oneTag = document.getElementById("one-tag")
let twoTag = document.getElementById("two-tag")
let threeTag = document.getElementById("three-tag")
let home = 0
let homeBtn = document.getElementById("home-btn")
let guestONE = document.getElementById("guest-one")
let guestTWO = document.getElementById("guest-two")
let guestTHREE = document.getElementById("guest-three")
let guest = 0
let guestBTN = document.getElementById("guest-btn")

function add(){
    home += 1
    homeBtn.textContent = home
}
function added(){
    home += 2
    homeBtn.textContent = home
}
function addition(){
    home += 3
    homeBtn.textContent = home
}

function dad(){
    guest += 1
    guestBTN.textContent = guest
}
function daad(){
    guest += 2
    guestBTN.textContent = guest
}
function deed(){
    guest += 3
    guestBTN.textContent = guest
}