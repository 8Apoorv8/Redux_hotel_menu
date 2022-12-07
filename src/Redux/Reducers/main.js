import { combineReducers } from "redux";
import { workReducer } from "./Reducer";


const rootReducer = combineReducers(
    {
        workReducer
    }
)
export default rootReducer