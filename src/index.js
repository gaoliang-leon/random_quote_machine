import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './style.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      quoteText:'',
      author:'',
      color:'pink'
    }
    this.handleClick=this.handleClick.bind(this);
  }
  componentDidMount(){
    axios.get("http://quotes.stormconsultancy.co.uk/random.json")
    .then(res=>{
      this.setState({
        author:res.data.author,
        quoteText:res.data.quote
      })
    })
  }
  handleColorChange(){
    const rgb='rgb('+Math.floor(Math.random()*255)+','
                     +Math.floor(Math.random()*255)+','
                     +Math.floor(Math.random()*255)+')';
    this.setState({
      color:rgb
    })
  }
  handleClick(){
    axios.get("http://quotes.stormconsultancy.co.uk/random.json")
    .then(res=>{
      this.setState({
        author:res.data.author,
        quoteText:res.data.quote
      })
    })
    this.handleColorChange();
  }
  render(){
    return(
      <div className="cover" style={{backgroundColor:this.state.color}}>
        <div id="quote-box">
          <p id="text" style={{color:this.state.color}}>{this.state.quoteText}</p>
          <p id="author" style={{color:this.state.color}}>-{this.state.author}</p>
          <div className="buttonWrap">
            <a href={`https://twitter.com/intent/tweet?hashtags=quotes&text='${this.state.quoteText}'${this.state.auther}`} id="tweet-quote">
              <button type="text" id="tweet" style={{backgroundColor:this.state.color}}>Tweet</button>
            </a>
            <button type="text" id="new-quote" style={{backgroundColor:this.state.color}} onClick={this.handleClick}>New quote</button>
          </div>
        </div>
        <p className="copyright">designed by Liang Gao</p>
      </div>
    )
  }
}
ReactDOM.render(
    <App/>,
  document.getElementById('root')
);

