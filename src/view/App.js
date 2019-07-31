import React, { Component } from 'react'

export default class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                text: "今天写代码",
                isFinsied: false
            },
            {
                id: 2,
                text: "吃饭",
                isFinsied: true
            },
            {
                id: 3,
                text: "学习",
                isFinsied: false
            },
            {
                id: 4,
                text: "睡觉",
                isFinsied: true
            },
        ]
    }
    changeFinished (id) {
        console.log(id)
        let nTodos = [...this.state.todos]
        nTodos = nTodos.map(item => {
            if (item.id===id) item.isFinsied = !item.isFinsied
            return item
        })
        this.setState({
            todos: nTodos
        },()=>{
            nTodos = []
        })
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.todos.map( item => (
                            <li key={item.id}>
                                <input type="checkbox" checked={item.isFinsied} onChange={()=>{
                                    this.changeFinished(item.id)
                                }}/>
                                <span>{item.text}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
