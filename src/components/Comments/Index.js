import React from 'react';
import './Comments.scss';
import Comment from '../Comment/'

class Comments extends React.Component {

    constructor(props) {
        super(props);
        this.toggleComments = this.toggleComments.bind(this);
        this.state = {
            showComments: false
        }
    }

   toggleComments() {
        const showComments = this.state.showComments;
        this.setState({showComments: !showComments});
    }

    render() {

        const {
            comments,
            nestedComments
        } 
        = this.props;

        return (
            <div className="comments">
                    <a href="#!" className="comments-count" onClick={(e)=> {
                        e.preventDefault();
                        this.toggleComments();
                        }}>{comments.count()} comments </a>
                    <div className="container">
                        {this.state.showComments  &&  comments.map(comment => <Comment nestedComments={nestedComments} 
                                                    username={comment.get('username')} 
                                                    id={comment.get('id')}  
                                                    description={comment.get('description')}
                                                    submittedDate={comment.get('submitted_date')}
                                                    votesCount={comment.get('votes_count')} />)} 
                    </div>
            </div>
        );
    }
}

export default Comments;
