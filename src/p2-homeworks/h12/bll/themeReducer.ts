export type ThemeStateType = {
    theme: string,
    themes: Array<string>
}

export  const initThemeState: ThemeStateType = {
    theme: 'blue',
    themes: ['blue', 'red', 'green']
};

export const themeReducer = (state:ThemeStateType =  initThemeState, action: ChangeActionType): ThemeStateType => { // fix any
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

type ChangeActionType = {
    type: 'CHANGE_COLOR',
    theme: string
}
export const changeThemeAC = (theme: string): ChangeActionType => ({type: 'CHANGE_COLOR', theme})