import * as actionTypes from './actionTypes';
import {dateParser} from '../lib/date'
import articlesMock from '../mocks/articles';
import commentsMock from '../mocks/comments';

function createUsername(username) {
    return {
        type: actionTypes.CREATE_USER_NAME,
        username
    }
}

// function fetchArticles(offset = 0, limit = -1) {
//     return (dispatch, getState) => {
//         dispatch({type: actionTypes.FETCHING_DATA});
//         return fetch('https://api.autoddit.com/v1/articles')
//             .then((articles) => {
//                 dispatch({type: actionTypes.FETCHED_ARTICLES, articles});
//             })
//             .catch(e => {
//                 alert(e);
//             })
//     }
// }

function fetchArticles() {
      return {
        type: actionTypes.FETCHED_ARTICLES,
        articles: reformatCreatedDateField(articlesMock)
    }
}

function fetchComments() {
      return {
        type: actionTypes.FETCHED_COMMENTS,
        comments: reformatCreatedDateField(commentsMock)
    }
}


function reformatCreatedDateField(array) {
    return array.map(item => {
        item.submitted_date = dateParser(item.submitted_date);
        return item
    })
}

function vote(dataSetType,ID, positive) {
    return {
        type: actionTypes.VOTE,
        positive,
        ID,
        dataSetType
    }
}

export {
    createUsername,
    fetchArticles,
    fetchComments,
    vote
}
