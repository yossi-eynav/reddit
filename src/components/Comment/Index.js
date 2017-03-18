import React from 'react';
import './Comment.scss';

function Comment({nestedComments, description, username, id}) {

    const filteredNestedComments = nestedComments.filter(comment => comment.get('comment_id') === id)

    return (
        <div className="comment">
            <small> {username} </small>
            <small>{filteredNestedComments.count()}</small>
            {filteredNestedComments.map(comment => <Comment nestedComments={nestedComments} 
                                                    username={comment.get('username')} 
                                                    id={comment.get('id')}  
                                                    description={comment.get('description')} />)}
        </div>
    );
}

export default Comment;