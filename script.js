let body = document.body;
let info = document.getElementById("info");
let home = document.getElementById("home");
let dark = document.getElementById("dark");
let red = document.getElementById("red");
let gold = document.getElementById("gold");

const darkLimit = 5;
let darkCounter = 0;
let darkRemainingLeft;

function darkMode() {
    if (darkRemainingLeft == 1) {
        info.textContent = "DARK MODE SUDAH HABIS";
        dark.style.display = "none";
        home.textContent = "RESTART"
        return;
    }
    
    darkCounter += 1;
    darkRemainingLeft = darkLimit - darkCounter;
    
    // render ke info element
    
    info.textContent = `Dark mode terpakai ${darkCounter}x, tersisa ${darkRemainingLeft}`;
    
    body.classList.toggle("dark");
}

const redLimit = 7;
let redCounter = 0;
let redRemainingLeft;

function redMode() {
    if (redRemainingLeft == 1) {
        info.textContent = "RED MODE SUDAH HABIS";
        red.style.display = "none";
        home.textContent = "RESTART";
        return;
    }
        redCounter += 1;
        redRemainingLeft = redLimit - redCounter;

        info.textContent = `Red mode terpakai ${redCounter}x, tersisa ${redRemainingLeft}`;

        body.classList.toggle("reds");
}

const goldLimit = 9;
let goldCounter = 0;
let goldRemainingLeft;

function goldMode() {
    if (goldRemainingLeft == 1){
        info.textContent = "GOLD MODE SUDAH HABIS";
        gold.style.display = "none";
        home.textContent = "RESTART";
        return;
    }

    goldCounter += 1;
    goldRemainingLeft = goldLimit - goldCounter;

    info.textContent = `Gold mode terpakai ${goldCounter}x, tersisa ${goldRemainingLeft};`

    body.classList.toggle("gold");
}

function reRender() {
    location.reload();
}