import React from 'react';
import Comment from '../Comment/'
import './Article.scss';

class Article extends React.Component {
    
    render() {
        const {
            title,
            thumbnail,
            submitted_date,
            username,
            votes_count,
            comments,
            nestedComments,
            index
        } 
        = this.props;

        return (
            <article className="article">
                <i className="fa fa-address-book"></i>
                <p> {index} </p>
                <p> {votes_count} </p>
                <img src={thumbnail} alt={title} />
                <p>{title} </p>
                <p> {submitted_date} by {username} </p>
                <p> {comments.count()} comments </p>
                <div>
                    {comments.map(comment => <Comment nestedComments={nestedComments} 
                                                    username={comment.get('username')} 
                                                    id={comment.get('id')}  
                                                    description={comment.get('description')} />)}
                </div>
            </article>
        )
    }
}

export default Article;