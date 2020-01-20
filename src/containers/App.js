import React, { Component } from 'react';
import CardList from '../components/CardList';
import { robots } from '../robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'



class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: '',

        }
    }

    onSearchChange = (event) => {
        // for update state
        this.setState({ searchfield: event.target.value })

    }

    render() {
        // destructurigin pour remplacer le this.state.robots this.state.searchfield
        const { robots, searchfield } = this.state

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        
        return (!robots.length) ?
            <h1>Loading</h1> :
            (
                <div className='tc '>
                    <h1>Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            )
    
}



}
export default App;
