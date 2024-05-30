let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newbtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
let turnO=true;
let click_count=0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO==true){    //playerO
            box.innerText="O";
            turnO=false;
        }
        else{   //player y
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        click_count++;
        let iswinner=checkWinner();
        if(click_count==9 && !iswinner){
            gamedraw();
        }
    })
})

const gamedraw=()=>{
    msg.innerText="Game was a draw";
    msgcontainer.classList.remove("hide");
    diasbleboxes();
}

const diasbleboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    diasbleboxes();
    
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                showWinner(pos1Val);
                return true;
            }
        }
    }
}

const resetGame=()=>{
    turnO=true;
    click_count=0;
    enableboxes();
    msgcontainer.classList.add("hide");
}
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);