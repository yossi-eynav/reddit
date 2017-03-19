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

function fetchArticles() {
      return {
        type: actionTypes.FETCHED_ARTICLES,
        articles: reformatCreatedDateField(articlesMock)
    }
}

/*
function fetchArticles(offset = 0, limit = -1) {
    return (dispatch, getState) => {
        dispatch({type: actionTypes.FETCHING_DATA});
        return fetch('https://api.autoddit.com/v1/articles')
            .then((articles) => {
                dispatch({type: actionTypes.FETCHED_ARTICLES, articles});
            })
            .catch(e => {
                alert(e);
})
*/

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

function setCurrentPage(currentPage) {
    return {
        type: actionTypes.SET_CURRENT_PAGE,
        currentPage
    }
}

function vote(dataSetType,ID, positive) {
    return {
        type: actionTypes.VOTE,
        positive,
        ID,
        dataSetType
    }
}

function createArticle(title ,imageDataURL) {
    return {
        type: actionTypes.CREATE_ARTICLE,
        title,
        imageDataURL
    }
}

function showCommentFormModal(entityType, entityID) {
    return {
        type: actionTypes.SHOW_COMMENT_FORM_MODAL,
        entityType,
        entityID
    }
}

function hideCommentFormModal() {
    return {
        type: actionTypes.HIDE_COMMENT_FORM_MODAL
    }
}

function createComment(entityID, entityType, description) {
    return {
        type: actionTypes.CREATE_COMMENT,
        entityID,
        entityType,
        description
    }
}

export {
    createUsername,
    fetchArticles,
    fetchComments,
    setCurrentPage,
    createArticle,
    showCommentFormModal,
    hideCommentFormModal,
    createComment,
    vote
}
