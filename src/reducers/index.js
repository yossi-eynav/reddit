import Immutable from 'immutable';
import * as actionTypes from '../actions/actionTypes';
import moment from 'moment';

const initialState = Immutable.Map({
  currentUser: Immutable.Map(),
  articles: Immutable.List(),
  comments: Immutable.List()
});

function getBiggestIDInList(list) {
    return list.sort((a,b) => a.get('id') < b.get('id') ? 1 : -1)
                .first()
                .get('id')
}

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
    
    case actionTypes.SET_CURRENT_PAGE:
      return state.set('currentPage', action.currentPage);
    
    case actionTypes.CREATE_ARTICLE:
    let articleID =  getBiggestIDInList(state.get('articles'))
                            
      const article = {
        title: action.title,
        username: state.getIn(['currentUser','username']),
        votes_count: 0,
        thumbnail: action.imageDataURL,
        created_date: moment().toISOString(),
        id: ++articleID
      }
      return state.update('articles', (list) => list.push(Immutable.fromJS(article)));

    case actionTypes.SHOW_COMMENT_FORM_MODAL:
      return state.set('commentFormModal', Immutable.fromJS({
        entityType: action.entityType,
        entityID: action.entityID
      }))

    case actionTypes.HIDE_COMMENT_FORM_MODAL:
      return state.delete('commentFormModal');

    case actionTypes.CREATE_COMMENT:
      return state.update('comments', (comments) => {
        let commentID =  getBiggestIDInList(state.get('comments'))

        const comment = {
          votes_count: 0,
          submitted_date: moment().toISOString(),
          username: state.getIn(['currentUser','username']),
          description: action.description
        }
        
        comment[`${action.entityType}_id`] = action.entityID;
        comment.id = ++commentID;
        return comments.push(Immutable.fromJS(comment));
      })

    default:
      return state
  }
};

export default reducers;