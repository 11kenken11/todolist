import React, { Component } from 'react'

export default class TestTodo extends Component {

    state = {
        element: '',
        items: []
    }

    onSubmit = (event) => {
        event.preventDefault();

        this.setState({
            element: '',
            items: [...this.state.items, { element: this.state.element }]
        })
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    deleteTodo = (index) => {
        const arr = this.state.items;
        arr.splice(index, 1);
        this.setState({
            items: arr
        })
    }

    renderTodo = () => {
        return this.state.items.map((item, index) => {
            return (
                <div className='card mb-3' key={index}>
                    <div className='card-body'>
                        <h4>{item.element}&nbsp;<i  onClick={() => this.deleteTodo(index)}>supprimer</i></h4>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <React.Fragment>

                <div>
                    <form onSubmit={this.onSubmit}>
                        <input type='text'
                            name='element'
                            onChange={this.onChange}
                            value={this.state.element}
                        />
                        <button>Add todo</button>

                    </form>
                </div>
                {this.renderTodo()}
            </React.Fragment>
        )
    }
}
