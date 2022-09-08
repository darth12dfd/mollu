import React, { PureComponent } from 'react';

import Form from '../../ui/Form';
import InlineList from '../../ui/InlineList';
import Text from '../../ui/Text';
import Select, { Option } from '../../ui/Select';
import Input from '../../ui/Input';
import Button from '../../ui/Button';

class StudentSearchFilter extends PureComponent {
  render() {
    return (
      <Form onSubmit={(values) => console.log(values)}>
        <Form.Consumer>
          {({ onChange, values }) => (
            <InlineList spacingBetween={2} verticalAlign="top">
              <Text xlarge bold>
                검색
              </Text>
              <Input name="name" label="이름" ohChange={onChange} value={values['name']} />
              <Select name="school" label="소속 학원" onChange={onChange} value={values['school']}>
                <Option label="선택" value="" />
                <Option label="총학생회" value="Prime" />
                <Option label="아비도스" value="Abydos" />
                <Option label="게헨나" value="Gehenna" />
                <Option label="밀레니엄" value="Millennium" />
                <Option label="트리니티" value="Trinity" />
                <Option label="백귀야행" value="HYAKKIYAKO" />
                <Option label="산해경" value="SHANHAIJING" />
                <Option label="붉은겨울" value="RedWinter" />
                <Option label="발키리" value="Valkyrie" />
                <Option label="아리우스" value="Arius" />
                <Option label="SRT" value="SRT" />
                <Option label="크로노스" value="Cronos" />
                <Option label="와일드헌트" value="Wildhunt" />
                <Option label="오디세이" value="Odyssey" />
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

StudentSearchFilter.propTypes = {};

export default StudentSearchFilter;
