import { connect } from 'react-redux';
import { resetState } from '../../actions/order_actions';
import { createSession } from '../../actions/user_actions';
import LoginForm from './login_form';

const mapStateToProps = ( state ) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    createSession: user => dispatch(createSession(user)),
    resetState: () => dispatch(resetState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
