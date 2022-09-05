import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Heading from '../../ui/Heading';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import InlineList from '../../ui/InlineList';

class Dashlet extends PureComponent {
  render() {
    const { name } = this.props;
    return (
      <Card vertical={4} horizontal={4}>
        <Heading level={4}>{name}</Heading>
        <InlineList spacingBetween={1}>
          <Button primary small>
            추가
          </Button>
        </InlineList>
      </Card>
    );
  }
}

Dashlet.propTypes = {
  name: PropTypes.string,
};

export default Dashlet;
