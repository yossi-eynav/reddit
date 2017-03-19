import React from 'react';
import Comments from '../Comments/';
import Votes from '../Votes/'
import {dateFormatter} from '../../lib/date';
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
            allComments,
            showCommentFormModal,
            vote,
            userVote,
            index
        } 
        = this.props;

        return (
            <article className="article">
                <small className="index"> {index} </small> 
                <Votes votesCount={votesCount + (userVote || 0)} 
                 negativeVote={() => {
                    vote('articles', id ,false)
                }} 
                positiveVote={() => {
                    vote('articles' ,id ,true)
                }} />
                <img src={thumbnail} alt={title} />
                <section> 
                    <a href="#!" className="title">{title} </a>
                    <small>Submitted on {dateFormatter(submittedDate)} by <span className="username">{username}</span> </small>
                    <Comments entityID={id} entityType="article" vote={vote} comments={comments} allComments={allComments} showCommentFormModal={showCommentFormModal} />
                </section>
            </article>
        )
    }
}

export default Article;