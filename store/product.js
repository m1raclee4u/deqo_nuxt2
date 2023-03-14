// function for Mock API
const sleep = m => new Promise(r => setTimeout(r, m))

export const state = () => ({
  product: {}
})

export const getters = {}

export const mutations = {
  SET(state, data) {
    state.product = data
  }
}

export const actions = {
  async fetch(context, id) {
    context.commit('SET', (await this.$axios.$get(
      `/products/${id}/card-data`
    )))
  }
}

