// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionListItem, selectQuery} = props
  const {suggestion} = suggestionListItem

  const onSelect = () => {
    selectQuery(suggestion)
  }

  return (
    <li className="each-list" onClick={onSelect}>
      <p className="header">{suggestion}</p>
      <img
        className="arrow-icon"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem
