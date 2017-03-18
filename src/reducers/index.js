import Immutable from 'immutable';
import * as actionTypes from '../actions/actionTypes';

const initialState = Immutable.Map({
  currentUser: Immutable.Map(),
  articles: Immutable.List(),
  nestedComments: Immutable.List(),
  articleComments: Immutable.List()
});
                            
const reducers = (state = initialState , action) => {
  switch (action.type) {
    case actionTypes.CREATE_USER_NAME:
      return state.update('currentUser', (map) => map.set('username', action.username))
    case actionTypes.FETCHED_ARTICLES:
      return state.set('articles', Immutable.fromJS(action.articles))
    case actionTypes.FETCHED_ARTICLE_COMMENTS:
      return state.set('articleComments', Immutable.fromJS(action.articleComments))
    case actionTypes.FETCHED_NESTED_COMMENTS:
      return state.set('nestedComments', Immutable.fromJS(action.nestedComments))  
    case actionTypes.VOTE_ARTICLE:
    // TODO: finish writing the reducers.
      return state.update('nestedComments', (nestedComments) => {
        nestedComments.update()
      })
    default:
      return state
  }
};

export default reducers;