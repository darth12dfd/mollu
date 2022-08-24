//Table 컴포넌트의 자식 컴포넌트인 TableBody 컴포넌트

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TableBody extends PureComponent {
  render() {
    const { children } = this.props;
    const { length } = React.Children.toArray(children);

    return (
      <tbody>
        {React.Children.map(children, (child, index) => {
          const baseLine = index < length - 1 ? true : false;
          return React.cloneElement(child, { baseLine });
        })}
      </tbody>
    );
  }
}

TableBody.propTypes = {
  children: PropTypes.node,
};

export default TableBody;
