import React, {Component} from 'react';
import axios from 'axios';


export default class CreateTodo extends Component{

    constructor(props){
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            todo_description : '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    onChangeTodoDescription(e){
        this.setState({
            todo_description: e.target.value
        });
    }
    onChangeTodoResponsible(e){
        this.setState({
            todo_responsible: e.target.value
        });
    }
    onChangeTodoPriority(e){
        this.setState({
            todo_priority: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        console.log("Formulaire soumis");
        console.log(`Todo Description : ${this.state.todo_description}`);
        console.log(`Todo Responsible : ${this.state.todo_responsible}`);
        console.log(`Todo Priority : ${this.state.todo_priority}`);
        console.log(`Todo Completed : ${this.state.todo_completed}`);


        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        }
          
        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            todo_description : '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        });

        //this.props.history.push('/listes');
    }


    render(){
        return (
            <div style ={{marginTop: 20}}>
                <h3>Créer nouveau billet</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description :</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>

                    <div className="form-group">
                        <label>Responsible :</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />
                    </div>

                    <div className="form-group">
                    
                        <div className="form-check form-check-inline">
                            
                      {/* low */}
                        <input  type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                className="form-check-input"
                                value="Low"
                                checked={this.state.todo_priority === "Low"}
                                onChange={this.onChangeTodoPriority}
                                />
                                <label className ="form-check-labe">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            
                      {/* medium  */}
                        <input  type="radio"
                                name="priorityOptions"
                                id="priorityMedium"
                                className="form-check-input"
                                value="Medium"
                                checked={this.state.todo_priority === "Medium"}
                                onChange={this.onChangeTodoPriority}
                                />
                                <label className ="form-check-labe">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            
                      {/* high */}
                        <input  type="radio"
                                name="priorityOptions"
                                id="priorityHigh"
                                className="form-check-input"
                                value="High"
                                checked={this.state.todo_priority === "High"}
                                onChange={this.onChangeTodoPriority}
                                />
                                <label className ="form-check-labe">High</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>


                </form>
                
            </div>
        );
    }
}