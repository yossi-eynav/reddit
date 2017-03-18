import React from 'react';
import './LoginWindow.scss';

class LoginWindow extends React.Component {

    constructor(props) {
        super(props);
        this.btnOnClickHandler = this.btnOnClickHandler.bind(this); 
    }

    componentDidMount() {
        console.log('mounted');
    }

    btnOnClickHandler() {
        const createUsername = this.props.createUsername;
        createUsername(this.refs.username.value)
    }

    render() {
        return (<div className="login-window">
            <input ref="username" placeholder="Enter a username and click send" />
            <a className="send" href="#!" onClick={this.btnOnClickHandler}> 
                send </a> 
        </div>)
    }

}

export default LoginWindow