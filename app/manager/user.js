import * as Actions from '../action'

const UserManager = (state = {
    users: [],
}, action) => {
    switch (action.type) {
        case Actions.WRITE_USERNAME:
            return Object.assign({}, state, {
                users: action.payload
            });
        default:
            return state;
    }
}

export default UserManager;