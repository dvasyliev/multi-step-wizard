export default {
  state: {
    customer: null,
  },
  mutations: {
    SET_CUSTOMER(state, payload) {
      state.customer = payload
    },
  },
  actions: {
    setCustomer({ commit }, customer) {
      commit('SET_CUSTOMER', customer)
    },

    resetCustomer({ commit }) {
      commit('SET_CUSTOMER', null)
    },
  },
}
