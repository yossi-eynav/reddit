import { connect } from 'react-redux'
import Immutable from 'immutable'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'
import App from '../components/App'

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.get('currentUser'),
    articles: state.get('articles'),
    comments: state.get('comments'),
    currentPage: state.get('currentPage'),
    commentFormModal: state.get('commentFormModal')
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(actionCreators, dispatch);
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;