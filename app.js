// window.addEventListener("mousemove", (e) => {
//     console.log(e.target.classList.value); 
// });

// *main javascript*

const nextButton = document.querySelector(".next-button");
//svg mazes
const levelOne = document.querySelector(".level-one");
const levelTwo = document.querySelector(".level-two");
//UI Messages
const uiLevel = document.querySelector(".ui-level");
const uiMessage = document.querySelector(".ui-message");
//END GAME!
const screamSound = document.querySelector(".scream");
const scaryImg = document.querySelector(".scary-img");


const collisionCheck = (value) => {
    if(value === "maze-border"){
        alert("You lost.! try again...");
    }
    if(value === "finish"){
        nextButton.style.opacity = 1;
        nextButton.style.pointerEvents = "all";
        levelOne.style.pointerEvents = "none";
    }
    if(value === "end-game"){
        screamSound.play();
        scaryImg.style.display = "block";
        document.body.style.background = "black";
    }
};

window.addEventListener("mousemove", (e) => {
    let check = e.target.classList.value; 
    collisionCheck(check);
});

nextButton.addEventListener("click", () => {
    levelOne.style.display = "none";
    levelTwo.style.display = "block";
    nextButton.style.opacity = 0;
    nextButton.style.pointerEvents = "none";
    uiLevel.textContent = "Level 2"
    uiMessage.textContent = "Make it to the finish line! LAST LEVEL!!";
});