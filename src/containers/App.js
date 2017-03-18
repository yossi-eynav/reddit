import { connect } from 'react-redux'
import Immutable from 'immutable'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'
import App from '../components/App'

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.get('currentUser'),
    articles: state.get('articles'),
    nestedComments: state.get('nestedComments'),
    articleComments: state.get('articleComments')
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