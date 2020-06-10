import React, {Component} from 'react';
import './App.css';
import Dropdown from './Dropdown.js';
import Stocklist from './stocklist.js'
import { stocks } from "./stocks.js"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css.map'



class App extends Component {
  constructor() {
    super()
    this.state = {
      stocks: stocks,
      searchField: ''
    }
  }
  render() {
    const filteredList = this.state.stocks.filter(stock => {
        return stock.name.toLowerCase().includes(this.state.searchField);
      })

    return (
      <div className="App">
      <Dropdown onSearch={this.onSearch}/>
      <Stocklist stocks={filteredList} />
      </div>
    );
  }

onSearch = (event) => {
  this.setState({ searchField: event.target.value})
  //console.log(filteredList);
  }
}

export default App;
