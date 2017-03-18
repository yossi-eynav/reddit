import * as actionTypes from './actionTypes';
import articlesMock from '../mocks/articles';
import articleCommentsMock from '../mocks/articles_comments';
import nestedCommentsMock from '../mocks/nested_comments';

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
        articles: articlesMock
    }
}

function fetchArticlesComments() {
      return {
        type: actionTypes.FETCHED_ARTICLE_COMMENTS,
        articleComments: articleCommentsMock
    }
}

function fetchNestedComments() {
      return {
        type: actionTypes.FETCHED_NESTED_COMMENTS,
        nestedComments: nestedCommentsMock
    }
}

export {
    createUsername,
    fetchArticles,
    fetchArticlesComments,
    fetchNestedComments
}
