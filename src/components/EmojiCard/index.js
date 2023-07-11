// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button className="emoji-btn" type="button" onClick={onClickEmojiCard}>
        <img src={emojiUrl} className="emoji-icon" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
