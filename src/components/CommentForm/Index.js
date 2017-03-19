import React from 'react';
import './CommentForm.scss';

class CommentForm extends React.Component {

    constructor(props) {
        super(props);
        this.saveBtnHandler = this.saveBtnHandler.bind(this);
    }
    saveBtnHandler() {
        const {
            createComment,
            hideCommentFormModal, 
            commentFormModal
        } = this.props;
        
        const description = this.refs.description.value;
        createComment(commentFormModal.get('entityID'), commentFormModal.get('entityType'), description);
        hideCommentFormModal();
    }


    render() {
        const {hideCommentFormModal} = this.props;
            return (<dialog className="comment-form" open> 
                        <div className="content">
                            <p> Please insert your comment: </p>
                            <textarea ref="description"></textarea>
                            <button onClick={hideCommentFormModal}> CLEAR </button>
                            <button onClick={this.saveBtnHandler}> SAVE </button>
                        </div> 
                    </dialog> )
        }
}

export default CommentForm;