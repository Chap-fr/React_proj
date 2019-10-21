import React, {Component} from 'react';
import axios from 'axios';



export default class EditTodo extends Component{

    constructor(props){
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/todos/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    todo_description: response.data.todo_description,
                    todo_responsible: response.data.todo_responsible,
                    todo_priority: response.data.todo_priority,
                    todo_completed: response.data.todo_completed

                })
            })
            .catch(function(error){
                console.log(error)
            })
    }

    onChangeTodoDescription(e){
        this.setState({
            todo_description: e.target.value
        })
    }

    onChangeTodoResponsible(e){
        this.setState({
            todo_responsible: e.target.value
        })
    }

    onChangeTodoPriority(e){
        this.setState({
            todo_priority: e.target.value
        })
    }

    onChangeTodoCompleted(e){
        this.setState({
            todo_completed: !this.state.todo_completed
        })
    }

    onSubmit(e){
        e.preventDefault();
        const obj = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        }
        axios.post('http://localhost:4000/todos/update/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/listes');
    
    }

    render(){
        return (
            <div>
                <h3>Mettre à jour</h3>
                <form onSubmit={this.onSubmit}>

                    <div className = "form-group">
                        <label>Description : </label>
                        <input  type = "text"
                                className = "form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                        />

                    </div>

                    <div className = "form-group">
                        <label>Responsable : </label>
                        <input  type = "text"
                                className = "form-control"
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

                              <div className="form-check">
                                  <input    type = "checkbox"
                                            className="form-check-input"
                                            id="completedCheckbox"
                                            name="completedCheckbox"
                                            onChange = {this.onChangeTodoCompleted}
                                            checked = {this.state.todo_completed}
                                            value = {this.state.todo_completed}
                                            />
                                    <label className ="form-check-label" htmlFor= "completedCheckbox">Completer</label>
                              </div>
                              <br/>
                              <div className = "form-group">
                                  <input type = "submit" value= "Update Todo" className = "btn btn-primary"></input>
                              </div>
                        </div>
                </form>
            </div>
        )
    }
}