import React, {Component} from 'react'
import SearchInput, {createFilter} from 'react-search-input'
 
// import emails from './mails'
 
const KEYS_TO_FILTERS = ['title']
 
export default class SearchArticle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }
 
  render () {
      console.log(this.props.article)
    const filteredEmails = this.props.article.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
 
    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {filteredEmails.map(e => {
          return (
            <div className="mail" key={e.title}>
              {/* <div className="from">{e.user.name}</div>
              <div className="subject">{e.subject}</div> */}
            </div>
          )
        })}
      </div>
    )
  }
 
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}
 