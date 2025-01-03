let boxes=document.querySelectorAll(".box")
let rstbtn=document.querySelector("#resetbtn");
let turno=false;
let msg=document.querySelector(".msg");
let msgbox=document.querySelector(".win-msg");
let turncount=0;

let winpatterns=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        turncount++;
        checkwinner();
    })
});


const disableAll= ()=>{
    turncount=0;
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableAll= ()=>{
    msgbox.classList.add("hide");
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        turno=false;
    }
}


const displaywinner= (winner)=>{
    msgbox.classList.remove("hide");
    if(winner==='tie'){
        msg.innerText=`Game Tied`;
    }
    else{
        msg.innerText=`Winner is ${winner}`;
    }
    disableAll();
}


rstbtn.addEventListener("click",()=>{
    enableAll();
});


const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!=='' && pos2!=='' && pos3!==''){
            if(pos1==pos2 && pos2==pos3){
                displaywinner(pos2);
            }
        }
        if(turncount==9){
            displaywinner("tie")
        }
    }
}





