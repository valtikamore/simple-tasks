
const initState = {
    loading:false
};
type LoadActionType = {
    type:'LOADING'
    isLoading:boolean
}

export const loadingReducer = (state= initState, action: LoadActionType):typeof initState => {
    switch (action.type) {
        case "LOADING": {
            return {...state,loading:action.isLoading};
        }
        default: return state;
    }
};

export const loadingAC = (isLoading:boolean): LoadActionType => ({type:'LOADING',isLoading})