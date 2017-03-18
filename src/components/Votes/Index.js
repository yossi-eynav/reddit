import React from 'react';
import './Votes.scss';

function Votes({votesCount, positiveVote, negativeVote}) {
    return ( 
        <p className="votes"> 
            <i className="fa fa-arrow-up" onClick={positiveVote}></i>
            {votesCount || 0} 
            <i className="fa fa-arrow-down" onClick={negativeVote}></i>
        </p>
    );
}

export default Votes;