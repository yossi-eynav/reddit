import React from 'react';
import Article from '../Article/';
import './Articles.scss'

class Articles extends React.Component {

    componentDidMount() {
        this.props.fetchArticles();
        this.props.fetchComments();
    }

    render() {
        const {
            articles,
            comments,
            vote
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
                                                allComments={comments}
                                                vote={vote}
                                                userVote={article.get('userVote')}
                                                comments={comments.filter((comment)=> comment.get('article_id') === article.get('id') )} />)}
            </div>
        )
    }
}

export default Articles;