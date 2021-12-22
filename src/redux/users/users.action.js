const setCurrentUser = userAuth => ({
    type: 'SET_CURRENT_USER',
    payload: userAuth,
});

export { setCurrentUser };
