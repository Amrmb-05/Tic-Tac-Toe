
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


const gameFlow = (function() {
        const player1 = Player("X")
        const player2 = Player("O")
        const container = document.getElementById("container")
        const winnerDisplay = document.getElementById("winner-display")
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
        
            if (board.conts[0].textContent == board.conts[1].textContent && board.conts[1].textContent ==  board.conts[2].textContent && board.conts[2].textContent != "") {
                winnerDisplay.textContent = `${board.conts[0].textContent} won`
                container.style.pointerEvents = "none"
            }
            else if (board.conts[0].textContent == board.conts[3].textContent && board.conts[3].textContent ==  board.conts[6].textContent && board.conts[6].textContent != "") {
                winnerDisplay.textContent = `${board.conts[0].textContent} won`
                container.style.pointerEvents = "none"
                
            }
            else if (board.conts[0].textContent == board.conts[4].textContent && board.conts[4].textContent ==  board.conts[8].textContent && board.conts[8].textContent != "") {
                winnerDisplay.textContent = `${board.conts[0].textContent} won`
                container.style.pointerEvents = "none"
            }
            else if (board.conts[2].textContent == board.conts[4].textContent && board.conts[4].textContent ==  board.conts[6].textContent && board.conts[6].textContent != "") {
                winnerDisplay.textContent = `${board.conts[2].textContent} won`
                container.style.pointerEvents = "none"
            }
            else if (board.conts[3].textContent == board.conts[4].textContent && board.conts[4].textContent ==  board.conts[5].textContent && board.conts[5].textContent != "") {
                winnerDisplay.textContent = `${board.conts[3].textContent} won`
                container.style.pointerEvents = "none"
            }
            else if (board.conts[1].textContent == board.conts[4].textContent && board.conts[4].textContent ==  board.conts[7].textContent && board.conts[7].textContent != "") {
                winnerDisplay.textContent = `${board.conts[1].textContent} won`
                container.style.pointerEvents = "none"
            }
            else if (board.conts[6].textContent == board.conts[7].textContent && board.conts[7].textContent ==  board.conts[8].textContent && board.conts[8].textContent != "") {
                winnerDisplay.textContent = `${board.conts[6].textContent} won`
                container.style.pointerEvents = "none"
            }
            else if (board.conts[2].textContent == board.conts[5].textContent && board.conts[5].textContent ==  board.conts[8].textContent && board.conts[8].textContent != "") {
                winnerDisplay.textContent = `${board.conts[2].textContent} won`
                container.style.pointerEvents = "none"
            }
            if (board.gameBoard.length === 9) {
                winnerDisplay.textContent = "Tie"
                alert("tie")
                container.style.pointerEvents = "none"
            }
        })))
    
    
        
    
})();