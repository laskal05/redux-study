import { connect } from 'react-redux';

import Link from '../components/Link';
import * as Action from '../actions/';

const mapStateToProps = (
  state,
  ownProps
) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick: () => {
      dispatch(
        Action.setVisibilityFilter(ownProps.filter)
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
