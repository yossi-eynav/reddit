import React from 'react';
import './CommentForm.scss';

class CommentForm extends React.Component {

    render() {
        const {createComment, hideCommentFormModal, commentFormModal} = this.props;
            return (<dialog className="comment-form" open> 
                            <div className="content">
                            <p> Please insert your comment: </p>
                            <textarea ref="description"></textarea>
                            <button onClick={hideCommentFormModal}> CLEAR </button>
                            <button onClick={() => {
                                const description = this.refs.description.value;
                                createComment(commentFormModal.get('entityID'),commentFormModal.get('entityType'), description);
                                hideCommentFormModal();
                                }}> SEND </button>
                        </div> 
                    </dialog> )
        }
}

export default CommentForm;