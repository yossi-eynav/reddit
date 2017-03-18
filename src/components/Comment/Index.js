import React from 'react';
import './Comment.scss';
import Comments from '../Comments/'

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.toggleComments = this.toggleComments.bind(this);
        this.state = {
            showComments: true
        }
    }

    toggleComments() {
        const showComments = this.state.showComments;
        this.setState({showComments: !showComments});
    }
  render() {
    const {nestedComments, description, username, id} = this.props;

    const filteredNestedComments = nestedComments.filter(comment => comment.get('comment_id') === id)

    return (
        <div className="comment">
            <button onClick={this.toggleComments}>-/+</button>
            <small>{filteredNestedComments.count()}</small>
            <small> {username} </small>
            <p> {description} </p>
            
            <Comments
                comments={filteredNestedComments}
                nestedComments={nestedComments}
                isVisible={this.state.showComments}
             />
        </div>
    );
  }
}

export default Comment;