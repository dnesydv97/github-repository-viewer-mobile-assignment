import {produce} from 'immer';
import {SET, RESET_REDUX} from './constants';
import initialState from './initialState';

const appReducer = (
  state: any = initialState,
  action: {
    key?: keyof typeof initialState;
    data?: any;
    type: string;
  },
) =>
  produce(state, draft => {
    switch (action.type) {
      case RESET_REDUX:
        return initialState;
      case SET:
        if (action.data) {
          draft[action.key]['data'] = action.data;
        } else {
          draft[action.key] = action.data;
        }

        break;
    }
  });

export default appReducer;
