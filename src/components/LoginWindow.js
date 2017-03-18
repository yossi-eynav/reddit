import React from 'react';

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
        return (<div>
            <input ref="username" />
            <button onClick={this.btnOnClickHandler}> 
                send </button> 
        </div>)
    }

}

export default LoginWindow