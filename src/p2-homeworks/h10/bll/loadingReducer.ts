type initStateType ={

}
const initState = {

};

export const loadingReducer = (state:initStateType = initState, action: any): initStateType => {
    switch (action.type) {
        case "": {
            return state;
        }
        default: return state;
    }
};

export const loadingAC = (): any => {}; // fix any