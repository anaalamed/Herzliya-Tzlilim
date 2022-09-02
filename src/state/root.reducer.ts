import { combineReducers } from "redux";
import main_reducer from "./slices/main.slice";

const rootReducer = combineReducers({
  data: main_reducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>