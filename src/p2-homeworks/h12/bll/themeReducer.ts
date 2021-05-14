
const initState = {
    theme:'dark'|'red'|'some'
};
type initialStateType = typeof initState

export type themeReducerActionTypes = ReturnType<typeof changeThemeC>


export const themeReducer = (state:initialStateType = initState, action: themeReducerActionTypes): initialStateType => {
    switch (action.type) {
        case "THEME/RESELECT-THEME": {
            return {...state,theme: action.color}
        }
        default: return state;
    }
};
export const changeThemeC = (color:string) => ({type:'THEME/RESELECT-THEME',color})
