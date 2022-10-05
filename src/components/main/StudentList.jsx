import React, { PureComponent } from 'react';

import Heading from '../../ui/Heading';
import Card from '../../ui/Card';

import StudentTable from './StudentTable';

import Api from '../../Api';
import StudentSearchFilterContainer from '../../containers/main/StudentSearchFilterContainer';

class StudentList extends PureComponent {
  componentDidMount() {
    Api.get('/students').then(({ data }) => this.props.setStudentList(data));
  }

  render() {
    const { students } = this.props;
    return (
      <div>
        <Heading level={3}>학생 인명부</Heading>
        <Card vertical={4} horizontal={4}>
          <StudentSearchFilterContainer />
        </Card>
        <Card>
          <StudentTable students={students} />
        </Card>
      </div>
    );
  }
}

StudentList.defaultProps = {
  students: [],
  setStudentList: () => {},
};

export default StudentList;
