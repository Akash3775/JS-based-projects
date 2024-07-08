let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector(".reset-btn")
let NewGameBtn=document.querySelector(".newbtn")
let MsgContainer=document.querySelector(".msg_container")
let Message=document.querySelector("#msg")
let turnO = true;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach(box => {
    box.addEventListener("click", () => {
        console.log("button has been clicked")
        if (turnO) {
            box.innerHTML = "O"
            turnO = false
        }
        else {
            box.innerHTML = "X"
            turnO = true
        }
        box.disabled = true
        Checkwinner()

    })
});


const Checkwinner = () => {
    for (let pattern of winPatterns) {
        let PosVal1 = boxes[pattern[0]].innerHTML
        let PosVal2 = boxes[pattern[1]].innerHTML
        let PosVal3 = boxes[pattern[2]].innerHTML
        if (PosVal1 != "" && PosVal2 != "" && PosVal3 != "") {
            if (PosVal1 === PosVal2 && PosVal2 === PosVal3) {
                console.log("winner is", PosVal1)
                Showwinner(PosVal1)
            }
        }
    }
}
const Showwinner=(winner)=>{
    Message.innerHTML=`Congratulations winner is ${winner}`
    MsgContainer.classList.remove("hide")
    DisableBoxes()

}
const DisableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true
    }
    
}

const EnableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerHTML=""
    }
}
const resetgame=()=>{
    turnO=true
    EnableBoxes()
    MsgContainer.classList.add("hide")

}
resetbtn.addEventListener("click",resetgame)
NewGameBtn.addEventListener("click",resetgame)