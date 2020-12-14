import {combineReducers} from "redux"
import toppingReducers from "./Reducer";

const rootReducer= combineReducers({
    toppingOption : toppingReducers
})

export default rootReducer
