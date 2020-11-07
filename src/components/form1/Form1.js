import React, {Component} from 'react';
import {UserService} from "../../services/UserService";
import User from "./User";


class Form1 extends Component {
    state = {user: []};
    _userService = new UserService();

    render() {
        let {user} = this.state;
        return (
            <div>
                <input type="number" max='10' min='1' onChange={this.changeInput}/>
                {
                    user.map(value => (<User user={value} key={value.id}/>))
                }
            </div>
        );
    }

    changeInput = (e) => {
        this._userService.getUserById(e.target.value).then(value => {
            this.setState({user: value})
        })


    }

}

export default Form1;