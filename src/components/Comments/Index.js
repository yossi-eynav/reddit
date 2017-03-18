import React from 'react';
import './Comments.scss';
import Comment from '../Comment/'

class Comments extends React.Component {

    render() {
        
        const {
            comments,
            nestedComments,
            isVisible
        } 
        = this.props;

        return (
            <div className={`container-comments ${ isVisible ? '': 'hidden'}`}>
                    {comments.map(comment => <Comment nestedComments={nestedComments} 
                                                    username={comment.get('username')} 
                                                    id={comment.get('id')}  
                                                    description={comment.get('description')} />)}
            </div>
        );
    }
}

export default Comments;
