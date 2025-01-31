const buttons = document.querySelectorAll(".moves button");
const msg = document.querySelector(".msg");
const userScore = document.querySelector(".hScore");
const compScore = document.querySelector(".compScore");
const resetBtn = document.querySelector(".reset");

for(let button of buttons){
    button.addEventListener("click", (e) => {
        checkWinner(e.target);
    });
}

const arr = ["stone", "paper", "scissor"];

let userT = 0;
let compT = 0;

const checkWinner = (e) => {
    const userChoice = e.name;
    const compChoice = arr[Math.floor(Math.random() * arr.length)];
    if(userChoice === "stone"){
        if(compChoice === "paper"){
            msg.innerText = "Computer Wins";
            msg.style.backgroundColor = "red";
            compT++;
            compScore.innerText = compT;
        }
        else if (compChoice === "scissor"){
            msg.innerText = "User Wins";
            msg.style.backgroundColor = "green";
            userT++;
            userScore.innerText = userT;
        }
        else{
            msg.style.backgroundColor = "grey";
            msg.innerText = "Draw";
        }
    }
    else if(userChoice === "paper"){
        if(compChoice === "stone"){
            msg.innerText = "User Wins";
            msg.style.backgroundColor = "green";
            userT++;
            userScore.innerText = userT;
        }
        else if (compChoice === "scissor"){
            msg.innerText = "Computer Wins";
            msg.style.backgroundColor = "red";
            compT++;
            compScore.innerText = compT;
        }
        else{
            msg.style.backgroundColor = "grey";
            msg.innerText = "Draw";
        }
    }
    else {
        if(compChoice === "stone"){
            msg.innerText = "Computer Wins";
            msg.style.backgroundColor = "red";
            compT++;
            compScore.innerText = compT;
        }
        else if (compChoice === "paper"){
            msg.innerText = "User Wins";
            msg.style.backgroundColor = "green";
            userT++;
            userScore.innerText = userT;
        }
        else{
            msg.style.backgroundColor = "grey";
            msg.innerText = "Draw";
        }
    }
};

const reset = () => {
    userScore.innerText = 0;
    compScore.innerText = 0;
    userT = 0;
    compT = 0;
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "#52489C";
}

resetBtn.addEventListener("click", reset);