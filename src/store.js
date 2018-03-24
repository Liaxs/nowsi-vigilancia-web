import { combineReducers, createStore } from 'redux';

const markedPlaceReducer = ( state = [], action ) => {
  if (action.type === "MARKED_PLACE") {
      return Object.assign({}, state, {coords: action.coords })
  }
  return state;
};
const userReducer = ( state = [], action ) => {
  if (action.type === "USERS") {

      return Object.assign({}, state, {users: action.users })
  }
  return state;
};

const rootReducer = combineReducers({
    markedPlaceReducer,
    userReducer
});
const store = createStore(rootReducer);
export default store;
