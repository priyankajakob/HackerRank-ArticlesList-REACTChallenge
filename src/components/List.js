import React from 'react';

class List extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            lists : [],
            sortedLists:[]
        }
        this.handleNewClick=this.handleNewClick.bind(this)
        this.handleOldClick=this.handleOldClick.bind(this)
    }
    componentDidMount(){
        const url = `https://jsonmock.hackerrank.com/api/articles`
        fetch(url)
       .then(response => response.json())
          .then(data => {
            const lists = data.data
            this.setState({lists},()=>{
                const sortedLists = [...lists]
                this.setState({sortedLists})
            })
          })
    }
    
      
    handleOldClick(){
        function compare( a, b ) {
            if ( a.created_at < b.created_at ){
              return -1;
            }
            if ( a.created_at > b.created_at ){
              return 1;
            }
            return 0;
          }
        const sortedLists = [...this.state.sortedLists].sort(compare)
        this.setState({sortedLists})
    }
    handleNewClick(){
        function compare( a, b ) {
            if ( a.created_at < b.created_at ){
              return 1;
            }
            if ( a.created_at > b.created_at ){
              return -1;
            }
            return 0;
          }
        const sortedLists = [...this.state.sortedLists].sort(compare)
        this.setState({sortedLists})
    }

    render(){
        return(
            <div>
                <button onClick={this.handleOldClick}>Oldest</button>
                <button onClick={this.handleNewClick}>Newest</button>
                <table border="2">
                    <tr>
                        <th>
                            Title
                        </th>
                        <th>
                            Author
                        </th>
                        <th>
                            Created Date      
                        </th>
                    </tr>
                    {this.state.sortedLists.map((list,index)=>{
                        return(
                            <tr key={index}>
                                <td>{list.title||list.story_title}</td>
                                <td>{list.author}</td>
                                <td>{(new Date(list.created_at)).toISOString().substring(0,10)}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
}

export default List