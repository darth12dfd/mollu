//거래 화면 추가

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Text from '../../ui/Text';
import Spacing from '../../ui/Spacing';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import InlineList from '../../ui/InlineList';
import Form from '../../ui/Form';

import { Consumer as Modal } from '../../ui/Modal/context';
import Api from '../../Api';

class AddStudentPage extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values, closeModal) {
    const { name, code } = this.props;
    const formValues = {
      ...values,
      code,
      name,
    };
    Api.post('/students', formValues).then(() => closeModal());
  }

  render() {
    const { name, school } = this.props;

    return (
      <Modal>
        {({ closeModal }) => (
          <Form
            onSubmit={(values) => this.handleSubmit(values, closeModal)}
            initValues={{ currentSchool: school }}
          >
            <Form.Consumer>
              {({ onChange, values }) => (
                <Spacing horizontal={4} vertical={8}>
                  <Text xlarge bold>
                    {name}
                  </Text>

                  <Spacing bottom={2}>
                    <Input
                      name="currentShcool"
                      label="학원"
                      value={values['currentSchool']}
                      onChange={onChange}
                    />
                  </Spacing>
                  <Spacing bottom={2}>
                    <Input name="name" label="이름" value={values['name']} onChange={onChange} />
                  </Spacing>

                  <Spacing bottom={2}>
                    <Input name="age" label="나이" value={values['age']} onChange={onChange} />
                  </Spacing>

                  <Spacing bottom={2}>
                    <Input name="grade" label="학년" value={values['grade']} onChange={onChange} />
                  </Spacing>
                  <InlineList spacingBetween={1}>
                    <Button primary>추가</Button>
                    <Button onPress={closeModal}>취소</Button>
                  </InlineList>
                </Spacing>
              )}
            </Form.Consumer>
          </Form>
        )}
      </Modal>
    );
  }
}

AddStudentPage.propTypes = {
  createStudent: PropTypes.func,
};

export default AddStudentPage;
