import React, { PureComponent } from 'react';
import Overview from './Overview';
import StudentListContainer from '../../containers/main/StudentListContainer';

class MainPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Overview />
        <StudentListContainer />
      </React.Fragment>
    );
  }
}

export default MainPage;
