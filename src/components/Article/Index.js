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
                <small className="index"> {index} </small> 
                <p className="votes"> 
                    <i className="fa fa-arrow-up"></i>
                    {votes_count} 
                    <i className="fa fa-arrow-down"></i>
                </p>
                <img src={thumbnail} alt={title} />
                <div> 
                    <p>{title} </p>
                    <small> {submitted_date} by {username} </small>
                    <p> {comments.count()} comments </p>
                </div>
                <div className="container-comments">
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