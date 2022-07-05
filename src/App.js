import { Component } from 'react';

import CardList  from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/search-box.component'


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      }

    ))
  }

  // made our app more performant by not unneccessarily rendering anonymous functions when the render function is being called.
  onSearchChange = (event) => {
    // console.log({startingArray: this.state.monsters});
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField: searchField };
    });
    }

  render() {
    console.log('render from app.js');

    // its more readable
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
            <div className="App">
              <h1 className='app-title'>Monsters Rolodex</h1>
              <SearchBox
                className = "monsters-search-box"
                onChangeHandler={onSearchChange}
                placeholder="search monsters"
              />
              <CardList monsters={filteredMonsters} />
            </div>
    );
  }


}

export default App;
