export const headerModule = {
    state: () => ({
        isShownProfile: false,
        isShownNotifications: false
    }),
    mutations: {
        setToggleDropdown(state) {
            state.isShownProfile = !state.isShownProfile
        }
    },
    getters: {

    },
    namespaced: true
}