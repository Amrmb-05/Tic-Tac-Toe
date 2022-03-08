
const board = (function() {
    const gameBoard = [];
    const conts = document.querySelectorAll('.cont');
   
    function _render(mark,ind) {
            let position = document.getElementById(`${ind}`)
            
                position.textContent = mark
            
        }
    return {_render,gameBoard,conts}
})();

const Player = mark => {
   
    const marker = (ind) => { 
        board.gameBoard.push(mark);    
        board._render(mark,ind)
    }
    return {
        marker
    }
}

const player1 = Player("X")

const player2 = Player("O")



const gameFlow = (function() {
    
        board.conts.forEach((div,ind) => (div.addEventListener('click', () => {
            if (div.textContent != "") {
                return
            }
            if (board.gameBoard.length % 2 == 0) {
                player1.marker(ind)
                console.log(board.gameBoard)
                console.log(board.gameBoard.length)
            }
            else  {
                player2.marker(ind)
                console.log(board.gameBoard)
                console.log(board.gameBoard.length)
            }        
        })))
    
    

    
})();