import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Heading from '../../ui/Heading';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import InlineList from '../../ui/InlineList';
import Text from '../../ui/Text';

import { Consumer as Modal } from '../../ui/Modal/context';
import { ADD_STUDENT_MODAL } from '../../constants/modals';

class Dashlet extends PureComponent {
  render() {
    const { name, schoolLabel } = this.props;
    return (
      <Modal>
        {({ openModal }) => (
          <Card vertical={4} horizontal={4}>
            <Heading level={4}>
              {name}
              <Text>{schoolLabel}</Text>
            </Heading>
            <InlineList spacingBetween={1}>
              <Button
                primary
                small
                onPress={() => openModal(ADD_STUDENT_MODAL, { name, school: schoolLabel })}
              >
                추가
              </Button>
            </InlineList>
          </Card>
        )}
      </Modal>
    );
  }
}

Dashlet.propTypes = {
  name: PropTypes.string,
};

export default Dashlet;
