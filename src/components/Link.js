import React from 'react';
import { connect } from 'react-redux';

import {
  mapStateToProps,
  mapDispatchToProps
} from '../containers/';

const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#" onClick={e => {
      e.preventDefault();
      onClick();
    }}>
      {children}
    </a>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
