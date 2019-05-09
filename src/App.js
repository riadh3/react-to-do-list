import React, { Component } from 'react';
import Item from './item'




class App extends Component {


    state = {
        task: '',
        toDoList: []
    }


    addTask = (event) => {
        event.preventDefault()
        this.state.task ?
            this.setState({
                toDoList: [...this.state.toDoList, this.state.task],
                task: ''
            })
            : null
    }
    onChange = (event) => {
        this.setState({
            task: event.target.value
        })
    }

    onDeliteItem = (index) => {
        this.setState({
            toDoList: this.state.toDoList.filter((_, i) => i !== index)
        })
    }

    onEditItem = (item, index) => {
        this.setState({
            task: item,
            toDoList: this.state.toDoList.filter((_, i) => i !== index)
        })
    }


    render() {

        return (
            <div className='to-do-list'>
                <div className='header'>
                    <form onSubmit={this.addTask}>
                        <input
                            type='text'
                            placeholder='enter your task'
                            value={this.state.task}
                            onChange={this.onChange}
                        />
                        <button type='submit'> Add to list</button>
                    </form>
                </div>

                <Item list={this.state.toDoList}
                    onDeliteItem={this.onDeliteItem}
                    onEditItem={this.onEditItem}
                />
            </div>
        );
    }
}

export default App;