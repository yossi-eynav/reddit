import React from 'react';
import './LoginWindow.scss';

class LoginWindow extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            showErrors: false
        }
        this.btnOnClickHandler = this.btnOnClickHandler.bind(this); 
    }

    btnOnClickHandler() {
        const createUsername = this.props.createUsername,
            usernameInput = this.refs.username.value.trim();


        if(!usernameInput) {
            this.setState({showErrors: true})
            return;
        }
        createUsername(usernameInput)
    }

    render() {
        return (
            <div className="login-window">
                <input ref="username" className={this.state.showErrors ? 'error' : ''} placeholder="Enter a username and click send" autoFocus />
                <a className="send" href="#!" onClick={this.btnOnClickHandler}> 
                    <i className="fa fa-paper-plane"></i> 
                </a> 
            </div>
        )
    }
}

export default LoginWindow