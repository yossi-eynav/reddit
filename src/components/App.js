import React from 'react';
import Articles from './Articles/';
import LoginWindow from './LoginWindow';
import Header from './Header/'
import './App.scss';

class App extends React.Component {

    isAuthenticated() {
        const currentUser = this.props.currentUser;
        return !!currentUser.get('username');
    }

    render() {
        const {
            createUsername,
            fetchArticles,
            fetchComments,
            articles,
            comments,
            vote
        } = this.props;

        return (
            <div>
                <Header />
                    {this.isAuthenticated() ? 
                        <Articles fetchComments={fetchComments}
                            fetchArticles={fetchArticles}
                            articles={articles}
                            comments={comments}
                            vote={vote} /> :
                        <LoginWindow createUsername={createUsername} />
                    }
            </div>
        )
    }
}

export default App; 