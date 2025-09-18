let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let homeCount = 0
let guestCount = 0

function increment1home(){
    homeCount += 1
    scoreHome.textContent = homeCount
}

function increment2home(){
    homeCount += 2
    scoreHome.textContent = homeCount
}

function increment3home(){
    homeCount += 3
    scoreHome.textContent = homeCount
}

function increment1guest(){
    guestCount += 1
    scoreGuest.textContent = guestCount
}

function increment2guest(){
    guestCount += 2
    scoreGuest.textContent = guestCount
}

function increment3guest(){
    guestCount += 3
    scoreGuest.textContent = guestCount
}
