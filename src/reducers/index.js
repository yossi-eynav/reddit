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
    case actionTypes.FETCHED_COMMENTS:
      return state.set('comments', Immutable.fromJS(action.comments)) 
    case actionTypes.VOTE:
      const dataSetType = action.dataSetType,
        dataSet = state.get(dataSetType);
      if (!dataSet) { return state; }

      const index = dataSet.findIndex((item) => item.get('id') === action.ID)
      if(index === -1) { return state;}

      return state.updateIn([dataSetType, index], (item) => {
         let userVote =  item.get('userVote') || 0;
         action.positive ? userVote++ : userVote--;
         if(userVote > 1) { 
           userVote = 1;
         } else if(userVote < -1) {
           userVote = -1;
         }
        return item.set('userVote', userVote);
      })
    default:
      return state
  }
};

export default reducers;