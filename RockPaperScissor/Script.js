let UsersScore = 0
let ComputerScore = 0
let choices = document.querySelectorAll(".choice")
let message=document.querySelector("#msg")
let Uscore=document.querySelector("#users-score")
let Cscore=document.querySelector("#computer-score")

let computerchoice = () => {
    const options = ["rock", "paper", "scissor"]
    let idx = Math.floor(Math.random() * 3)
    return options[idx]
}

let winner = (userwin,Compchoice,Userchoice) => {
    if (userwin) {
        UsersScore++
        Uscore.innerHTML=UsersScore
        console.log("You Win!")
        message.innerHTML=`You Win! Users Choice ${Userchoice} beats Computer choice ${Compchoice}`
        message.style.backgroundColor="green"
        
    }
    else {
        ComputerScore++
        Cscore.innerHTML=ComputerScore
        console.log("You lose,computer is win")
        message.innerHTML=`You lose,Computer choice ${Compchoice} beats user choice ${Userchoice} `
        message.style.backgroundColor="red"
    }
}

let PlayGame = (Userchoice) => {
    console.log(`user choice:=${Userchoice}`)
    const Compchoice = computerchoice()
    console.log("comp choice:=", Compchoice)
    


    if (Userchoice === Compchoice) {
        console.log("game is Draw")
        message.innerHTML="Game is Draw"
    }
    else {
        userwin = true
        if (Userchoice === "rock") {
            userwin = Compchoice === "paper" ? false : true;
        }
        else if (Userchoice === "paper") {
            userwin = Compchoice === "scissor" ? false : true;
        }
        else {
            userwin = Compchoice === "rock" ? false : true;
        }
        winner(userwin,Compchoice,Userchoice)
    }
    
}

choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        let Userchoice = choice.getAttribute("id")
        PlayGame(Userchoice)



    })
})

