import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import apiReducer from "modules/api/reducer";
import createSagaMiddleware from "redux-saga";
import { apiRootSaga } from "modules/api/saga";
import appReducer from "modules/app/reducers";

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
  api: apiReducer,
  app: appReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(apiRootSaga);
export default store;
