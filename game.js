/*console.log('Rock ,paper ,scissor');*/
let myArray =['Rock','Paper', 'Scissors']
let gameContainer = document.querySelector('.gameContainer');
let userSection = document.querySelector('.user');
let computerSection = document.querySelector('.computer');
let player;
let userScore = 0;
let pcScore =0 ;
let userOverallScore= 0;
let pcOverallScore = 0;



//get computers choice
function getComputerChoice(){
    const randomChoice = Math.floor(Math.random()*myArray.length)
    const choice = myArray[randomChoice];
    return choice; 
    
    }
    //console.log('The computer choice is '+getComputerChoice())
    const computerSelection= getComputerChoice();

    //get users choice
    function getUsersChoice(){
    document.addEventListener("DOMContentLoaded",function(){
        const buttons = document.querySelectorAll(".selection button");
        buttons.forEach(buttons=>{
            buttons.addEventListener('click',function(){
                const playerChoice= this.textContent.toLowerCase();
                player=playerChoice;
                console.log('player selected :'+ player);
                console.log('computer selected : '+ computerSelection);
                playGame();
                
                
        })
    
        })
        
       
    })
    
    
    
    
}
     getUsersChoice();
    


    function playRound(playerSelection, computerSelection){
        playerSelection= playerSelection.toLowerCase();
        computerSelection= computerSelection.toLowerCase();
        console.log('player: '+playerSelection);
        console.log('pc :' + computerSelection);


        if (playerSelection === computerSelection){
          //  let draw = document.createElement("section");
            //draw.textContent="Its a draw";
            //gameContainer.appendChild(draw);
            console.log("Draw");
            alert("Its a draw");

       
    }else if((playerSelection==='rock' && computerSelection==='scissors') || 
    (playerSelection==='paper' && computerSelection==='rock') || 
    (playerSelection==='scissors' && computerSelection==='paper'))
   
     {
        let winLabel = document.createElement("section")
       // winLabel.textContent="You win";
        //gameContainer.appendChild(winLabel);
        console.log('User wins');
        userSection.textContent ='User :'+userScore;
        return userScore++;
        

    }
    else {
        let lose= document.createElement("section");
       // lose.textContent="Computer wins";
        //gameContainer.appendChild(lose);
        console.log('You lose');
        computerSection.textContent ='Computer :'+pcScore;
        return pcScore++;
        
    } 
    console.log('pc socore :'+pcScore);
    console.log('users score :'+userScore);
}



//playGame function 
function playGame(){
    console.log(playRound(player,computerSelection))

}











