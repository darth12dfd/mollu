import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Table from '../../ui/Table';
import TableRow from '../../ui/TableRow';
import TableCell from '../../ui/TableCell';
import TableHead from '../../ui/TableHead';
import TableBody from '../../ui/TableBody';

class StudentTable extends PureComponent {
  render() {
    const { students } = this.props;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">이름</TableCell>
            <TableCell align="center">소속 학원</TableCell>
            <TableCell align="center">나이</TableCell>
            <TableCell align="right">학년</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map(({ id, name, school, age, grade }) => (
            <TableRow key={id}>
              <TableCell>{name}</TableCell>
              <TableCell align="center">{school}</TableCell>
              <TableCell align="center">{age}</TableCell>
              <TableCell align="right">{grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

StudentTable.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      school: PropTypes.string,
      age: PropTypes.number,
      grade: PropTypes.number,
    }),
  ),
};

export default StudentTable;
