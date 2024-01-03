import {createSelector} from 'reselect';
import initialState from './initialState';

const selectRoot = (state: any) => state || initialState;

const createInitialSelectors = () => {
  let selectors: any = {};
  Object.keys(initialState).map(key => {
    selectors[key] = createSelector(selectRoot, state => state[key]);
  });

  return selectors;
};

const selectors: any = createInitialSelectors();
export default selectors;
