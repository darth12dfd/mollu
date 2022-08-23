//상단바 만들기

import React, { PureComponent } from 'react';
import { withStyles, css, withStylesPropTypes } from 'react-with-styles';

export const HEIGHT = 64;

class AppNav extends PureComponent {
  render() {
    const { styles } = this.props;
    return (
      <div {...css(styles.wrapper)}>
        <div {...css(styles.container)}></div>
      </div>
    );
  }
}
