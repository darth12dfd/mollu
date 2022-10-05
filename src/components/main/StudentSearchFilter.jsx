import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Form from '../../ui/Form';
import InlineList from '../../ui/InlineList';
import Text from '../../ui/Text';
import Select, { Option } from '../../ui/Select';
import Input from '../../ui/Input';
import Button from '../../ui/Button';

import Api from '../../Api';

class StudentSearchFilter extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(params) {
    const { setStudentList } = this.props;
    Api.get('/students', { params }).then(({ data }) => setStudentList(data));
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Consumer>
          {({ onChange, values }) => (
            <InlineList spacingBetween={2} verticalAlign="top">
              <Text xlarge bold>
                검색
              </Text>
              <Input name="name" label="이름" ohChange={onChange} value={values['name']} />
              <Select name="school" label="소속 학원" onChange={onChange} value={values['school']}>
                <Option label="선택" value="" />
                <Option label="총학생회" value="총학생회" />
                <Option label="아비도스" value="아비도스" />
                <Option label="게헨나" value="게헨나" />
                <Option label="밀레니엄" value="밀레니엄" />
                <Option label="트리니티" value="트리니티" />
                <Option label="백귀야행" value="백귀야행" />
                <Option label="산해경" value="산해경" />
                <Option label="붉은겨울" value="붉은겨울" />
                <Option label="발키리" value="발키리" />
                <Option label="아리우스" value="아리우스" />
                <Option label="SRT" value="SRT" />
                <Option label="크로노스" value="크로노스" />
                <Option label="와일드헌트" value="와일드헌트" />
                <Option label="오디세이" value="오디세이" />
              </Select>
              <Input name="age" label="나이" onChange={onChange} value={values['age']} />
              <Input name="grade" label="학년" onChange={onChange} value={values['grade']} />
              <Button type="submit" primary>
                검색
              </Button>
            </InlineList>
          )}
        </Form.Consumer>
      </Form>
    );
  }
}

StudentSearchFilter.propTypes = { setStudentList: PropTypes.func };

export default StudentSearchFilter;
