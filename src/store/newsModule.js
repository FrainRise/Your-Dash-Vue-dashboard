export const headerModule = {
    state: () => ({
        news: [],
        isLoading: true
    }),
    mutations: {
        setToggleDropdown(state) {
            state.isShownProfile = !state.isShownProfile
        }
    },
    getters: {

    },
    actions: {

    },
    namespaced: true
}