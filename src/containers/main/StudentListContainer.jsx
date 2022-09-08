//학생 명부 데이터 컴포넌트 작성
import { connect } from 'react-redux';
import StudentList from '../../components/main/StudentList';
import { setStudentList } from '../../actions/setStudentList';

const mapStateToProps = (state) => {
  const { ids, entities } = state.students;
  const students = ids.map((id) => entities[id]);

  return { students };
};

const mapDispatchToProps = {
  setStudentList,
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
