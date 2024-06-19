import { types } from "../types";

const initialState = {
    users: [],
    user: {
    },
}

 const fetchUsers = (state = initialState, action)=> {
    if (action.type === types.ASYNC_FN) {
        return {
            ...state,
            users: action.payload,
        }
    }
    return state;
}
export default fetchUsers
