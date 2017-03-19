import React from 'react';
import Articles from '../Articles/';
import LoginWindow from '../LoginWindow/';
import Header from '../Header/'
import ArticleForm from '../ArticleForm/'
import CommentForm from '../CommentForm/'
import './App.scss';

class App extends React.Component {

    isAuthenticated() {
        const currentUser = this.props.currentUser;
        return !!currentUser.get('username');
    }

    router() {
           const {
            createUsername,
            fetchArticles,
            fetchComments,
            articles,
            comments,
            currentPage,
            vote,
            setCurrentPage,
            createArticle,
            showCommentFormModal
        } = this.props;

        if(!this.isAuthenticated()) {
            return  <LoginWindow createUsername={createUsername} />
        }

        switch(currentPage) {
            case 'articleForm': 
             return <ArticleForm setCurrentPage={setCurrentPage} createArticle={createArticle} />
            default:
             return <Articles fetchComments={fetchComments}
                                fetchArticles={fetchArticles}
                                articles={articles}
                                comments={comments}
                                showCommentFormModal={showCommentFormModal}
                                vote={vote} />
        }
    }

    render() {
        const {
            setCurrentPage,
            commentFormModal,
            hideCommentFormModal,
            createComment

        } = this.props;

        return (
            <div>
                <Header setCurrentPage={setCurrentPage}/>
                {this.router()}
                {commentFormModal && <CommentForm createComment={createComment}
                                                  commentFormModal={commentFormModal} 
                                                  hideCommentFormModal={hideCommentFormModal}/> }
            </div>
        )
    }
}

export default App; 