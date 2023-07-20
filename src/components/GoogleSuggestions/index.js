// Write your code here

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  selectQuery = suggestion => {
    this.setState({searchInput: suggestion})
  }

  getSearchInput = event => this.setState({searchInput: event.target.value})

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const resultList = suggestionsList.filter(eachList =>
      eachList.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-main-container">
        <div className="card-container">
          <img
            className="google-logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="search-card-container">
            <div className="search-container">
              <img
                className="search-logo"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                className="input-sty"
                type="search"
                placeholder="Search Google"
                onChange={this.getSearchInput}
              />
            </div>
            <div>
              <div className="search-suggestions-con">
                <ul className="list-item">
                  {resultList.map(eachList => (
                    <SuggestionItem
                      suggestionListItem={eachList}
                      key={eachList.id}
                      selectQuery={this.selectQuery}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
