export type ThemeStateType = {
    theme: string,
    themes: Array<string>
}

export  const initThemeState: ThemeStateType = {
    theme: 'blue',
    themes: ['blue', 'red', 'green','yellow']
};

export const themeReducer = (state:ThemeStateType =  initThemeState, action: ThemeReducerActionTypes): ThemeStateType => {
    switch (action.type) {
        case 'CHANGE_COLOR': {
            return {
                ...state,
                theme: action.theme
            };
        }
        default:
            return state;
    }
};
type ThemeReducerActionTypes = |  changeThemeActionType
type changeThemeActionType = ReturnType<typeof changeThemeAC>
export const changeThemeAC = (theme: string) => ({type: 'CHANGE_COLOR', theme})