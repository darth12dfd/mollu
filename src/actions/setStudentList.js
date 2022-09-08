//리덕스 적용

//액션 구성

export const SET_STUDENT_LIST = 'student/SET_STUDENT_LIST';

export function setStudentList(students) {
  return {
    type: SET_STUDENT_LIST,
    payload: students,
  };
}
