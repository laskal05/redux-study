import React, { Component } from 'react';
import { connect } from 'react-redux';

import Link from './Link';
import * as Action from '../actions/';

const mapStateToProps = (
  state,
  ownProps
) => {
  return {
    active:
      ownProps.filter ===
      state.visibilityFilter
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

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;

// class FilterLink extends Component {
// 
//   componentDidMount() {
//     const { store } = this.props;
//     this.unsubscribe = this.props.store.subscribe(() =>
//       this.forceUpdate()
//     );
//   }
// 
//   componentWillUnmount () {
//     this.unsubscribe();
//   }
// 
//   render() {
//     const props = this.props;
//     const { store } = props;
//     const state = store.getState();
// 
//     return (
//       <Link
//         active={
//           props.filter === state.visibilityFilter
//         }
//         onClick={() => {
//           store.dispatch({
//             type: 'SET_VISIBILITY_FILTER',
//             filter: props.filter
//           });
//         }}
//       >
//         {props.children}
//       </Link>
//     );
//   }
// }

