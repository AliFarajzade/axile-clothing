const INITIAL_STATE = {
    currentUser: null,
};

const userReducer = (currentState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...currentState,
                currentUser: action.payload,
            };

        default:
            return currentState;
    }
};

export default userReducer;
