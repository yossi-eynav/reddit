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
            id,
            vote,
            userVote,
            showCommentFormModal
        } = this.props;

        const filteredComments = nestedComments.filter(comment => comment.get('comment_id') === id)

        return (
            <div className="comment">
                <Votes votesCount={votesCount + (userVote || 0) } 
                   negativeVote={() => { vote('comments', id ,false) }} 
                   positiveVote={() => { vote('comments' ,id ,true) }} />
                <div className="body"> 
                    <p className="description"> {description} </p>
                    <small> Submitted on {dateFormatter(submittedDate)} by <span className="username"> {username} </span> </small>
                    <Comments
                        entityID={id}
                        entityType={'comment'}
                        comments={filteredComments}
                        nestedComments={nestedComments}
                        vote={vote}
                        userVote={userVote}
                        showCommentFormModal={showCommentFormModal} />
                </div>
            </div>
        );
    }
}

export default Comment;