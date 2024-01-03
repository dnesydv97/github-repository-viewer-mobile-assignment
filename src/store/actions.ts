import {SET, RESET,RESET_REDUX} from './constants';
import initialState from './initialState';

export function set(key: keyof typeof initialState, data: any) {
  return {
    type: SET,
    data,
    key,
  };
}

export function reset(key: keyof typeof initialState) {
  return {
    type: RESET,
    data: null,
    key,
  };
}

export function resetRedux() {
  return {
    type: RESET_REDUX,
  };
}
