import React, {Component} from 'react';

class ListTodosComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 1, description: 'Learn React with Java', done: false, targedate: new Date() },
                { id: 2, description: 'Learn React with FullStack', done: false, targedate: new Date() },
                { id: 3, description: 'Become a master of FullStack', done: false, targedate: new Date() }
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>List of Todos : </h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>IsCompleted?</th>
                                <th>Targetdate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targedate.toString()}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent
