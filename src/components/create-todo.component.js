import React, {Component} from 'react';

export default class CreateTodo extends Component{
    constructor(props){
        super(props);

        this.state = {
            todo_description : 'Description du todo',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }


    render(){
        return (
            <div>
                <p>Create Todo Component !!</p>
            </div>
        );
    }
}