import { connect } from 'react-redux';
import { createUser } from '../../actions/user_actions';
import SignupForm from './signup_form';

const mapStateToProps = ( state ) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    createUser: user => dispatch(createUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
