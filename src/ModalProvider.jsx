import createModalProvider from './ui/Modal/create';
import { ADD_STUDENT_MODAL } from './constants/modals';
import AddStudentPage from './components/main/AddStudentPage';

export default createModalProvider({
  [ADD_STUDENT_MODAL]: AddStudentPage,
});
