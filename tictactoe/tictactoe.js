let boxes = document.querySelectorAll(".btn");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#newgame")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turn = true;

const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
]
/*boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("X")
        })
        })*/
const resetgame = () => {
    turn = true;
    count = 0;
    enablebtns();
    msgcontainer.classList.add("hide")
}
let count = 0;
for (let d of boxes) {
    d.addEventListener("click", () => {
        if (turn) {
            d.innerHTML = "O"
            d.style.color = "red"
            turn = false
        } else {
            d.innerHTML = "X"
            turn = true
            d.style.color = "blue"
        }
        d.disabled = true;
        count+=1
        checkwinner();
        let iswinner = checkwinner();
        if(count===9 && !iswinner){
        draw();
    }
    })
}
const draw=()=>{
    msg.innerHTML = `The game is a DRAW`;
    msgcontainer.classList.remove("hide");
    disabledbtns();
}
const enablebtns = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}
const disabledbtns = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const showwinner = (winner) => {
    msg.innerHTML = `Congratulations The winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledbtns();
}

const checkwinner = () => {
    for (let pattern of winpattern) {
        pos1 = boxes[pattern[0]].innerHTML
        pos2 = boxes[pattern[1]].innerHTML
        pos3 = boxes[pattern[2]].innerHTML
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showwinner(pos1);
                return true;
            }
        }
    }
}
newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);