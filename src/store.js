import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './reducers';
import rootSaga from './sagas';
import history from './utils/history';

// SETUP
const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = compose(
  applyMiddleware(
    sagaMiddleware, // for connecting saga and create a seperate thread.
    routerMiddleware(history), // for dispatching history actions
  ),
)(createStore);

// SOURCE OF TRUTH, "front-end Database"
const store = createStoreWithMiddleware(
  createRootReducer(history),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

sagaMiddleware.run(rootSaga);

export default store;
