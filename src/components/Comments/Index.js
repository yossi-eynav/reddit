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
            allComments,
            vote
        } 
        = this.props;

        return (
            <div className="comments">
                    <a href="#!" className="comments-count" onClick={(e)=> {
                        e.preventDefault();
                        this.toggleComments();
                        }}>{comments.count()} comments </a>
                    <div className="container">
                        {this.state.showComments  &&  comments.map(comment => <Comment allComments={allComments} 
                                                    username={comment.get('username')} 
                                                    id={comment.get('id')}  
                                                    description={comment.get('description')}
                                                    submittedDate={comment.get('submitted_date')}
                                                    vote={vote}
                                                    userVote={comment.get('userVote')}
                                                    votesCount={comment.get('votes_count')} /> 
                                                    )} 
                    </div>
            </div>
        );
    }
}

export default Comments;
