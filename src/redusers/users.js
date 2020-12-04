const users = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            console.log('we add new users');
            console.log(state);
            return [
                ...state,
                {
                    passport: action.passport,
                    name: action.name,
                    age : action.age,
                }
            ];
        default:
            return state;
    }
};

export default users;