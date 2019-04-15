/* import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';


import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import reducer from './reducer';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({
  onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
  onSubmitForm: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadRepos());
  }
});

const mapStateToProps = createStructuredSelector({
  repos: "",
  username: "",
  loading: "",
  error: ""
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

*/

export { default } from './HomePage';
