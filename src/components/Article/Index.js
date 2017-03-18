import React from 'react';
import Comments from '../Comments/';
import Votes from '../Votes/'
import {dateParser} from '../../lib/dateParser';
import './Article.scss';

class Article extends React.Component {
    
    render() {

        const {
            id,
            title,
            thumbnail,
            submittedDate,
            username,
            votesCount,
            comments,
            nestedComments,
            index
        } 
        = this.props;

        return (
            <article className="article">
                <small className="index"> {index} </small> 
                <Votes votesCount={votesCount} />
                <img src={thumbnail} alt={title} />
                <section> 
                    <a href="#!" className="title">{title} </a>
                    <small>Submitted on {dateParser(submittedDate)} by <span className="username">{username}</span> </small>
                    <Comments comments={comments} nestedComments={nestedComments} />
                </section>
            </article>
        )
    }
}

export default Article;