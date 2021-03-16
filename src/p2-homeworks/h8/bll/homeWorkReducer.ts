import {initialState} from "../HW8";

export const homeWorkReducer = (state: initialState, action: { type: string, payload: string | number }): initialState => {
    switch (action.type) {
        case "sort": {
            if (action.payload === 'up') {
                let sortByUp = [...state].sort((a, b) => a.name >= b.name ? 1 : -1)
                return sortByUp
            } else if (action.payload === 'down') {
                let sortByDown = [...state].sort((a, b) => a.name >= b.name ? 1 : -1).reverse()
                return sortByDown
            }
            return state
        }
        case "check": {
            let filteredState = state.filter(person => person.age > action.payload)
            return filteredState
        }
        default:
            return state
    }
};