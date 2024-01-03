import {createStore} from 'redux';
import reducer from './reducer';
import * as Actions from './actions';
import Select from './selectors';

const store = createStore(reducer);

if (module.hot) {
  module.hot.accept(() => {
    const nextRootReducer = require('./reducer').default;
    store.replaceReducer(nextRootReducer);
  });
}

export {store, Actions, Select};
