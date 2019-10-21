import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../home.css';



const CardList = (props) => (

    <div>
        {props.profiles.map(profile => <Card key={profile.id}{...profile}/>)}        
    </div>

)

class Card extends Component{

    render(){

        const profile = this.props;

        return (
                <div className = "github-profile" style={{ margin: "1rem" }}>
                    <img src= {profile.avatar_url} style={{height: "70px", width: "70px" }} />
                    <div className = "info" style = {{display: "inline-block", marginLeft: 10}}>
                        <div className="name" style = {{fontSize: '125%'}}>{profile.name}</div>
                        <div className="company">{profile.company}</div>
                    </div>
                </div>
        )
     }
}

class Form extends Component{

    state = { userName: ''}
    handleSubmit = async (event) => {
        event.preventDefault();
        const res = await axios.get(`https://api.github.com/users/${this.state.userName}`)
        this.props.onSubmit(res.data)
        this.state = { userName: ''}

    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>  
                <input  type="text" 
                        placeholder = "Github username"
                        value = {this.state.userName}
                        onChange={event => this.setState({ userName: event.target.value})}
                        />
                <button>Ajouter</button>
            </form>
        )    
    }
}


export default class Appli extends Component{

constructor(props){
    super(props);
    this.state = {
        profiles: [],
    }
}

addNewProfile = (profileData) => {
    this.setState(prevState => ({
        profiles :[...prevState.profiles, profileData]
    }))
}


    render(){
        return (
            <div>
            <div className="title"><h1>Github Application</h1></div>
                <Form onSubmit = {this.addNewProfile} />
                <CardList profiles={this.state.profiles} />
            </div>
        );
    }

}

// ReactDOM.render(<Appli title="Github App" />, document.getElementsByName('title'));