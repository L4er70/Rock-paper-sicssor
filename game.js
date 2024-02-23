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
let gameOver =false;



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
          
            console.log("Draw");
            alert("Its a draw");
            
            userSection.textContent = 'User: ' + userScore;
            computerSection.textContent = 'Computer: ' + pcScore;

       
    }else if((playerSelection==='rock' && computerSelection==='scissors') || 
    (playerSelection==='paper' && computerSelection==='rock') || 
    (playerSelection==='scissors' && computerSelection==='paper'))
   
     {
        console.log('User wins');
        userScore++;
        userSection.textContent ='User :'+userScore;
        

    }
    else {
        
        console.log('You lose');
        pcScore++;
        computerSection.textContent ='Computer :'+pcScore;
        
    } 
    if(userScore>=5 || pcScore>=5){
        gameOver = true;
        endGame();
        reset();
        

    }
    console.log('pc socore :'+pcScore);
    console.log('users score :'+userScore);
}


    function endGame() {
        if(userScore==5){
            alert("user wins");
            
        }
        else if(pcScore==5){
            alert("computer wins")
            
        }
        
        
       

}



//playGame function 
function playGame(){
    if(!gameOver){
        playRound(player,computerSelection);

    }
    

}
function reset(){
    userScore=0;
    pcScore=0;
    gameOver=false;
}














