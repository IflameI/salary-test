import {combineReducers} from "redux";
import {reducer as salaryFormReducer} from 'redux-form'

export const rootReducer = combineReducers({
    form: salaryFormReducer,
})

export type RootState = ReturnType<typeof rootReducer>
