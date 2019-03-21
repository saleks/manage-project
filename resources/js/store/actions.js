export const loadInitialState = ({state, commit }) => {
    if (state.initialized) {
        return
    }
    commit('initializeStore')
};