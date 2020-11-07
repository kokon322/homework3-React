import React, {Component} from 'react';
import {UserService} from "../../services/UserService";
import User from "../form2/User";

class Form2 extends Component {
    state = {
        users: [],
        user: ''
    };
    _userService = new UserService();

    componentDidMount() {
        this._userService.getAllUsers().then(value => {
            this.setState({users: value})
        });

    }

    render() {
        return (
            <div>
                <p>Second form</p>
                <input type="text" onChange={this.changeInput}/>
                <hr/>
                <User user={this.state.user}/>
            </div>
        );
    }

    changeInput = (e) => {
        for (let i = 0; i < this.state.users.length; i++) {
            let x = this.state.users[i].name;
            if (x.includes(`${e.target.value}`)) {
                this.setState({user: x})
            }

        }
    }
}


export default Form2;