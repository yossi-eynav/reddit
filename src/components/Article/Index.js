import React from 'react';
import Comments from '../Comments/';
import './Article.scss';

class Article extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isCommentsVisible: false
        };
        this.toggleComments = this.toggleComments.bind(this);
    }

    toggleComments() {
        const isVisible = this.state.isCommentsVisible;
        this.setState({
            isCommentsVisible: !isVisible
        })
    }

    render() {
        const {
            id,
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
                    <p onClick={() => {
                        this.toggleComments(id);
                        }}> {comments.count()} comments </p>
                </div>
                <Comments isVisible={this.state.isCommentsVisible} comments={comments} nestedComments={nestedComments} />
            </article>
        )
    }
}

export default Article;