import React from 'react';
import Comments from '../Comments/'
import Votes from '../Votes/'
import {dateFormatter} from '../../lib/date'
import './Comment.scss';

class Comment extends React.Component {

    render() {
        const {
            nestedComments,
            votesCount,
            submittedDate,
            description, 
            username, 
            id
        } = this.props;

        const filteredNestedComments = nestedComments.filter(comment => comment.get('comment_id') === id)

        return (
            <div className="comment">
                <Votes votesCount={votesCount} />
                <div className="body"> 
                    <p className="description"> {description} </p>
                    <small> Submitted on {dateFormatter(submittedDate)} by <span className="username"> {username} </span> </small>
                    <Comments
                        comments={filteredNestedComments}
                        nestedComments={nestedComments}
                    />
                </div>
            </div>
        );
    }
}

export default Comment;