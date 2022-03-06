const board = (function() {
    const gameBoard = ["X","O"];
     function _render() {
        gameBoard.forEach(play => {
            let position = document.getElementById(`${gameBoard.indexOf(play)}`)
            console.log(play)
            console.log(position)
                
         })
      }
      
})();
const gameBoard = ["X","O"];
gameBoard.forEach((play, index) => {
    let position = document.getElementById(`${index}`)
    position.textContent = play
    console.log(index)
})
