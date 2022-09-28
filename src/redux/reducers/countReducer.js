import { ADD, SUBTRACT } from '../constant';

const initialState = {
    count: 0
}

export const handleCount = (state=initialState, action={}) => {
    switch(action.type) {
        case ADD:
            return {...state, count: state.count + 1 };
        case SUBTRACT:
            return {...state, count: state.count - 1};
        default:
            return state;
    }
}