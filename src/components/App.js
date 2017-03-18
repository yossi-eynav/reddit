import React from 'react';
import Articles from './Articles/';
import LoginWindow from './LoginWindow';
import Header from './Header/'

class App extends React.Component {

    isAuthenticated() {
        const currentUser = this.props.currentUser;
        return !!currentUser.get('username');
    }

    render() {
        const {
            createUsername,
            fetchArticles,
            fetchArticlesComments,
            fetchNestedComments,
            articles,
            articleComments,
            nestedComments
        } = this.props;

        return (
            <div>
                <Header />
                    {this.isAuthenticated() ? 
                        <Articles fetchArticlesComments={fetchArticlesComments}
                            fetchNestedComments={fetchNestedComments}
                            fetchArticles={fetchArticles}
                            articles={articles}
                            articleComments={articleComments}
                            nestedComments={nestedComments} /> :
                        <LoginWindow createUsername={createUsername} />
                    }
            </div>
        )
    }
}

export default App; 