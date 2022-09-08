//리듀서 구성하기

import { SET_STUDENT_LIST } from '../actions/setStudentList';

const initState = {
  ids: [],
  entities: [],
};

export default (state = initState, action) => {
  const { type, payload } = action;

  //액션 타입에 따른 리듀서 호출
  switch (type) {
    //학생목록
    case SET_STUDENT_LIST: {
      const ids = payload.map((entity) => entity['id']);
      const entities = payload.reduce(
        (finalEntities, entity) => ({
          ...finalEntities,
          [entity['id']]: entity,
        }),
        {},
      );

      return { ...state, ids, entities };
    }
    default:
      return state;
  }
};
