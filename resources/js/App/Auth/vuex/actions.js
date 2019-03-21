import UsersService from '../../../services/users.service'

// export const setPage = ({commit}, page) => {
//     commit('setCurrentPage', page)
// };
//
// export const setLanguage = ({commit}, language) => {
//     commit('setLanguage', language)
// };

export const logout = ({commit}) => {
    commit('SET_IS_LOGIN', false)
};

export const getCurrent = ({commit}) => {
    return UsersService.getCurrent()
        .then(user => {console.log(user.data);commit('SET_USER', user.data)})
        .catch(error => {console.log(error);})
};

export const setCurrent = ({commit}, user) => {
    return UsersService.setCurrent(user)
        .then(response => console.log(response))
        .catch(error => {console.log(error);})
};

export const getRoles = ({commit}) => {
    return UsersService.getRoles()
        .then(roles => {commit('SET_ROLES', roles.data);})
        .catch(error => {console.log(error);})
};
