const getToken = (state) => state.auth.isAuthenticated;

const getName = (state) => state.auth.user.name;

export default { getToken, getName };
