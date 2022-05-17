const emptyString = "  ";
const boardData = Array(9).fill(emptyString);
const players = {
  1: "x", 
  2: "o",
};

let currentPlayer = players[1];


function drawBoard(positions) {
console.log(`
  ${positions[0]} | ${positions[1]} | ${positions[2]} 
  -----------
  ${positions[3]} | ${positions[4]} | ${positions[5]} 
  -----------
  ${positions[6]} | ${positions[7]} | ${positions[8]} 

    `);
}

function showtutorial() {
    console.log(`
    ### Escolha a posição que deseja jogar baseado no tabuleiro abaixo ###

       0 | 1 | 2
      -----------
       3 | 4 | 5
      -----------
       6 | 7 | 8
     #####################################################################
    `);
  }
  
function isEmpty(position){
    return boardData[position] === emptyString;        // usando para comparar se a array já foi preenchiida através da jogada position
  }

 function changePlayer(){
    if(currentPlayer === players[1]){
      currentPlayer = players[2];
    } else {
      currentPlayer = players[1];
    }
  } 

function setPlayerMovement(position, player){
  if(isEmpty[position]){
    boardData[position] = currentPlayer;
    changePlayer();
  } else {
    console.log(`A posiçao ${position} já foi usada!`)
  }
}

// showtutorial();
setPlayerMovement(6);
setPlayerMovement(1);
setPlayerMovement(4);
setPlayerMovement(8);
setPlayerMovement(6);

drawBoard(boardData);
