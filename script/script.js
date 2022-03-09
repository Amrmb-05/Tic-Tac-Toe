
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
        const gameEndCont = document.getElementById("game-end")  
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
            // deciding the game winner  
            if (board.conts[0].textContent == board.conts[1].textContent && board.conts[1].textContent ==  board.conts[2].textContent && board.conts[2].textContent != "") {
                document.getElementById("winner-display").style.display = 'inline'
                document.getElementById("winner-display").textContent = `${board.conts[0].textContent} won`
                container.style.pointerEvents = "none"
                // add restart button and its functionality
                gameEndCont.innerHTML += '<button id=\'restart-btn\'>Restart Game</button>'
                document.getElementById("restart-btn").addEventListener('click', () => {
                    restartGame()
                })
            }
            else if (board.conts[0].textContent == board.conts[3].textContent && board.conts[3].textContent ==  board.conts[6].textContent && board.conts[6].textContent != "") {
                document.getElementById("winner-display").style.display = 'inline'
                document.getElementById("winner-display").textContent = `${board.conts[0].textContent} won`                
                container.style.pointerEvents = "none"
                // add restart button and its functionality
                gameEndCont.innerHTML += '<button id=\'restart-btn\'>Restart Game</button>'
                document.getElementById("restart-btn").addEventListener('click', () => {
                    restartGame()
                    })
                
            }
            else if (board.conts[0].textContent == board.conts[4].textContent && board.conts[4].textContent ==  board.conts[8].textContent && board.conts[8].textContent != "") {
                winnerDisplay.style.display = 'inline'
                winnerDisplay.textContent = `${board.conts[0].textContent} won`
                container.style.pointerEvents = "none"
                gameEndCont.innerHTML += '<button id=\'restart-btn\'>Restart Game</button>'
                document.getElementById("restart-btn").addEventListener('click', () => {
                    restartGame()
                    })

            }
            else if (board.conts[2].textContent == board.conts[4].textContent && board.conts[4].textContent ==  board.conts[6].textContent && board.conts[6].textContent != "") {
                document.getElementById("winner-display").style.display = 'inline'
                document.getElementById("winner-display").textContent = `${board.conts[2].textContent} won`
                container.style.pointerEvents = "none"
                 // add restart button and its functionality
                 gameEndCont.innerHTML += '<button id=\'restart-btn\'>Restart Game</button>'
                 document.getElementById("restart-btn").addEventListener('click', () => {
                     restartGame()
                     })
            }
            else if (board.conts[3].textContent == board.conts[4].textContent && board.conts[4].textContent ==  board.conts[5].textContent && board.conts[5].textContent != "") {
                document.getElementById("winner-display").style.display = 'inline'
                document.getElementById("winner-display").textContent = `${board.conts[3].textContent} won`
                container.style.pointerEvents = "none"
                 // add restart button and its functionality
                 gameEndCont.innerHTML += '<button id=\'restart-btn\'>Restart Game</button>'
                 document.getElementById("restart-btn").addEventListener('click', () => {
                     restartGame()
                     })
            }
            else if (board.conts[1].textContent == board.conts[4].textContent && board.conts[4].textContent ==  board.conts[7].textContent && board.conts[7].textContent != "") {
                document.getElementById("winner-display").style.display = 'inline'
                document.getElementById("winner-display").textContent = `${board.conts[1].textContent} won`
                container.style.pointerEvents = "none"
                 // add restart button and its functionality
                 gameEndCont.innerHTML += '<button id=\'restart-btn\'>Restart Game</button>'
                 document.getElementById("restart-btn").addEventListener('click', () => {
                     restartGame()
                     })
            }
            else if (board.conts[6].textContent == board.conts[7].textContent && board.conts[7].textContent ==  board.conts[8].textContent && board.conts[8].textContent != "") {
                document.getElementById("winner-display").style.display = 'inline'
                document.getElementById("winner-display").textContent = `${board.conts[6].textContent} won`
                container.style.pointerEvents = "none"
                 // add restart button and its functionality
                 gameEndCont.innerHTML += '<button id=\'restart-btn\'>Restart Game</button>'
                 document.getElementById("restart-btn").addEventListener('click', () => {
                     restartGame()
                     })
            }
            else if (board.conts[2].textContent == board.conts[5].textContent && board.conts[5].textContent ==  board.conts[8].textContent && board.conts[8].textContent != "") {
                document.getElementById("winner-display").style.display = 'inline'
                document.getElementById("winner-display").textContent = `${board.conts[2].textContent} won`
                container.style.pointerEvents = "none"
                 // add restart button and its functionality
                 gameEndCont.innerHTML += '<button id=\'restart-btn\'>Restart Game</button>'
                 document.getElementById("restart-btn").addEventListener('click', () => {
                     restartGame()
                 })
            }
            if (board.gameBoard.length === 9) {
                document.getElementById("winner-display").style.display = 'inline'
                document.getElementById("winner-display").textContent = "Tie"
                container.style.pointerEvents = "none"
                 // add restart button and its functionality
                 gameEndCont.innerHTML += '<button id=\'restart-btn\'>Restart Game</button>'
                 document.getElementById("restart-btn").addEventListener('click', () => {
                     restartGame()
                     })
            }
        })))
    function restartGame()  {
        board.conts.forEach(div => {
            div.textContent = ""
            board.gameBoard = []
            container.style.pointerEvents = "auto"
        })
        gameEndCont.removeChild(document.getElementById("restart-btn"))
        document.getElementById('winner-display').style.display = 'none'
    }
    
})();