console.log('Rock ,paper ,scissor');
let myArray =['Rock','Paper', 'Scissors']
/*
const randomChoice = Math.floor(Math.random()*myArray.length)
const choice = myArray[randomChoice];
console.log(choice)
*/

function getComputerChoice(){
    const randomChoice = Math.floor(Math.random()*myArray.length)
    const choice = myArray[randomChoice];
    return choice; 
    
    }
    console.log('The computer choice is '+getComputerChoice())

    const playerSelection = prompt('Choose ...');
    console.log('Users choice is '+ playerSelection);
    const computerSelection= getComputerChoice();


    function playRound(playerSelection, computerSelection){
        playerSelection= playerSelection.toLowerCase();
        computerSelection= computerSelection.toLowerCase();
        console.log('player: '+playerSelection);
        console.log('pc :' + computerSelection);


        if (playerSelection === computerSelection){
            console.log("Draw");
       
    }else if((playerSelection==='rock' && computerSelection==='scissors') || 
    (playerSelection==='paper' && computerSelection==='rock') || 
    (playerSelection==='scissors' && computerSelection==='paper'))
   
     {
        console.log('you win');

    }
    else {
        console.log('You lose');
    } 
}

//playGame function 
function playGame(){
    console.log(playRound(playerSelection,computerSelection))

}
playGame();
playGame();
playGame();
playGame();
playGame();






