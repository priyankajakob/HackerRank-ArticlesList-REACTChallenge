import React from 'react';

class Articles extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      authors : [],
      author:'',
      result:'',
	  initial:0
    }
    this.handleClick=this.handleClick.bind(this)
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(e){
    const author = e.target.value
    this.setState({author})
  }
  handleClick(){
    const url = `https://jsonmock.hackerrank.com/api/articles?author=${this.state.author}&page=1`
        fetch(url)
       .then(response => response.json())
          .then(data => {
            const authors = data.data
              this.setState({authors},()=>{
              if(!authors.length){
                const result = 'No results'
                this.setState({result})
              }
              else {
                const result = ''
                this.setState({result})
              }
            })
          })
  }
  render() {
	  let count = 1
    return (
      <React.Fragment>
        <div className="controls">
          <div className="input-container">
            <span>author:</span>
            <input type="text" className="text-input" data-testid="text-input" onChange={this.handleChange} />
            <button className="fetch-button" data-testid="fetch-button" onClick={this.handleClick}>Fetch</button>
          </div>
        </div>
        {this.state.authors.length?(<div className="results">
          <ul>
            {this.state.authors.map((list,index)=>{
              const title = list.title
              if(list.title && count<=3) {
                count++
                return (
              <li data-testid="result-row">{title}</li>
              )
              }
            })}
          </ul>
          </div>):(<div data-testid="no-results">{this.state.result}</div>)}
      </React.Fragment>
    );
  }
}

export default Articles;
