// Write your code here.

import {Component} from 'react'

import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    isGameProgressed: true,
    topScore: 0,
  }

  resetGame = () => {
    this.setState({clickedEmojisList: [], isGameProgressed: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = clickedEmojisList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickedEmojisList.length}
      />
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameProgressed: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)

    const clickedEmojiLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojiLength)
    } else {
      if (emojisList.length - 1 === clickedEmojiLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  getShuffledList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffledEmojiList = this.getShuffledList()

    return (
      <ul className="emojis-list-container">
        {shuffledEmojiList.map(emojisObject => (
          <EmojiCard
            key={emojisObject.id}
            emojisDetails={emojisObject}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojisList, isGameProgressed, topScore} = this.state

    return (
      <div className="app-container">
        <NavBar
          currentScore={clickedEmojisList.length}
          isGameProgressed={isGameProgressed}
          topScore={topScore}
        />
        <div className="emoji-game-body">
          {isGameProgressed ? this.renderEmojiList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
