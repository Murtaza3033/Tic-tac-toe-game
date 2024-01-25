let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".newGame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let count=0; //tracking draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    count=0;
    msgContainer.classList.add("hide");
}


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked!");
    // document.getElementById("clr").style.Color = "lightblue";
    // turnOclr();
    if (turnO) {
      // player O
         
      box.innerText = "O";
    //   turnO.style.color="red"
      turnO = false;
    } else {
      // player X
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count ++;

    let isWinner=checkWinner();

    if(count === 9 && !isWinner){
      count ===0;
            gameDraw();
    }
  });
});

// const turnOclr=()=>{
//     if(turnO=true){
//         document.getElementsByClassName(".box").style.backgroundColor = "lightblue";
//     }
// }

const gameDraw=()=>{
    msg.innerText="Game was Draw!"
    msg.style.color="yellow"
    disableBoxes();
    msgContainer.classList.remove("hide")
}

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText="";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations Winner is ${winner}`;
  msg.style.color="#12e60e"
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)
    let posval1 = boxes[pattern[0]].innerText;
    let posval2 = boxes[pattern[1]].innerText;
    let posval3 = boxes[pattern[2]].innerText;

    if (posval1 != "" && posval2 != "" && posval3 != "") {
      if (posval1 === posval2 && posval2 === posval3) {
        // console.log("winner", posval1);
        showWinner(posval1);

        // showWinner(posval1);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
