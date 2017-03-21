import React from 'react';
import Article from '../Article/';

class Articles extends React.Component {

    componentDidMount() {
        
        const {
            articles,
            comments
        } = this.props;

        articles.count() || this.props.fetchArticles();
        comments.count() || this.props.fetchComments();
    }

    render() {
        const {
            articles,
            comments,
            vote,
            showCommentFormModal
        } = this.props;

        return (
            <div className="container-articles"> 
                {articles.map((article, index) => <Article key={article.get('id')}
                                                    index={index}
                                                    title={article.get('title')}
                                                    id={article.get('id')}
                                                    thumbnail={article.get('thumbnail')}
                                                    submittedDate={article.get('submitted_date')}
                                                    username={article.get('username')}
                                                    votesCount={article.get('votes_count')}
                                                    nestedComments={comments.filter((comment)=> comment.has('comment_id'))}
                                                    showCommentFormModal={showCommentFormModal}
                                                    vote={vote}
                                                    userVote={article.get('userVote')}
                                                    comments={comments.filter((comment)=> comment.get('article_id') === article.get('id') )} />)}
            </div>
        )
    }
}

export default Articles;