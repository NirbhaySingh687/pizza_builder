import {applyMiddleware,createStore} from "redux"
import rootReducers from "./Redux/rootReducers"

const store = createStore(rootReducers,applyMiddleware())

export default store
