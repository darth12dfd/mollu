//Table 컴포넌트의 자식 컴포넌트 TableHead 컴포넌트 만들기

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TableHead extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <thead>
        {React.Children.map(children, (child) => React.cloneElement(child, { isHeadr: true }))}
      </thead>
    );
  }
}

TableHead.propTypes = {
  children: PropTypes.node,
};

export default TableHead;
