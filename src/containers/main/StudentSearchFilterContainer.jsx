//StudentSearchFilter 컴포넌트와 데이터 컴포넌트 연결
import { connect } from 'react-redux';
import StudentSearchFilter from '../../components/main/StudentSearchFilter';
import { setStudentList } from '../../actions/setStudentList';

export default connect(null, { setStudentList })(StudentSearchFilter);
