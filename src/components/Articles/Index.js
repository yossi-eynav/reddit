import React from 'react';
import Article from '../Article/';
import './Articles.scss'

class Articles extends React.Component {

    componentDidMount() {
        this.props.fetchArticles();
        this.props.fetchArticlesComments();
        this.props.fetchNestedComments();
    }

    render() {
        const {
            articles,
            articleComments,
            nestedComments
        } = this.props;

        return (
            <div className="container-articles"> 
                {articles.map((article, index) => <Article key={article.get('id')}
                                                index={index}
                                                title={article.get('title')}
                                                id={article.get('id')}
                                                thumbnail={article.get('thumbnail')}
                                                submitted_date={article.get('submitted_date')}
                                                username={article.get('username')}
                                                votes_count={article.get('votes_count')}
                                                nestedComments={nestedComments}
                                                comments={articleComments.filter((comment)=> comment.get('article_id') === article.get('id') )} />)}
            </div>
        )
    }
}

export default Articles;