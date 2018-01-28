import { combineReducers } from 'redux'

const list = (state = [{name: 456}], action) => {
    const { type } = action

    switch(action.type) {
        case 1:
        default:
            return state
    }
}

const containerReducer = combineReducers({
    contaienrList: list
})

export default containerReducer