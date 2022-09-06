import React, { PureComponent } from 'react';

import Heading from '../../ui/Heading';
import InlineList from '../../ui/InlineList';

import Dashlet from './Dashlet';

class Overview extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Heading level={3}>학원</Heading>
        <InlineList>
          <Dashlet name="총학생회" />
          <Dashlet name="아비도스 고등학교" />
          <Dashlet name="게헨나 학원" />
          <Dashlet name="밀레니엄 사이언스 스쿨" />
          <Dashlet name="트리니티 종합학원" />
          <Dashlet name="백귀야행 연합학원" />
          <Dashlet name="산해경 고급중학교" />
          <Dashlet name="붉은겨울 연방학원" />
          <Dashlet name="발키리 경찰학교" />
          <Dashlet name="아리우스 분교" />
          <Dashlet name="SRT 특수학원" />
          <Dashlet name="크로노스 스쿨" />
          <Dashlet name="와일드헌트 예술 학원" />
          <Dashlet name="오디세이 해양학교" />
        </InlineList>
      </React.Fragment>
    );
  }
}

export default Overview;
