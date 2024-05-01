let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userSc=document.querySelector("#user-score");
let compSc=document.querySelector("#comp-score")


const genCompChoice=()=>{
    const option= ["rock","paper","scissors"];
    const indx=Math.floor(Math.random()*3);
    return option[indx];
}

const showWinner=(userWin)=>{
    if(userWin){
        msg.innerText="You Win!";
        userSc.innerText=userScore;
        msg.style.backgroundColor="green";
    }
    else {
        msg.innerText="You Loss!";
        compSc.innerText=compScore;
        msg.style.backgroundColor="red";
    }
}
const drawGame=()=>{
    console.log("Draw this game");
    msg.innerText="Draw this game!";
    msg.style.backgroundColor="black";
}
const playgame=(userChoice)=>{
 const compChoice=genCompChoice();
 console.log("userChoice= ", userChoice);
 console.log("compChoice= ", compChoice);

 if(userChoice===compChoice)
 {
     drawGame();
 }
 else 
 {
    let userWin=true;
 if(userChoice==="rock"){
   if(compChoice==="scissors")
   {
     userScore++;
   }
   else {
    compScore++;
   userWin=false;
   }
 }
 else if(userChoice==="paper"){
    if(compChoice==="scissors")
    {
        compScore++;
        userWin=false;
    }
    else {
        userScore++;
    }
  }
  else {
    if(compChoice==="paper")
    {
      userScore++;
    }
    else {
     compScore++;
     userWin=false;
    }
  }
  showWinner(userWin);
}

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
      const userChoice=choice.getAttribute("id");
      playgame(userChoice);
    });
});

