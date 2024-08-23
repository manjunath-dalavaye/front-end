import { createStore,combineReducers } from 'redux';
import todoReducer from './reducer';

const rootReducer = combineReducers({
    todos: todoReducer,
  });
export type RootState = ReturnType<typeof rootReducer>;
// const store = createStore(todoReducer);

// export default store;
