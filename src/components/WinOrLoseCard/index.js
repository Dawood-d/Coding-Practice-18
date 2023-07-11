// Write your code here.
import './index.css'

const LOSE_IMG_URL =
  'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props

  const imageUrl = isWon ? WON_IMG_URL : LOSE_IMG_URL
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-card">
      <div className="details-section">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="current-score-label">{scoreLabel}</p>
        <p className="current-score-label">{score}/12</p>
        <button
          className="play-again-button"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img src={imageUrl} className="win-or-lose-image" alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
