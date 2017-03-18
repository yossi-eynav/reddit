import React from 'react';
import './Votes.scss';

function Votes({votesCount}) {
    return ( 
        <p className="votes"> 
            <i className="fa fa-arrow-up"></i>
            {votesCount || 0} 
            <i className="fa fa-arrow-down"></i>
        </p>
    );
}

export default Votes;