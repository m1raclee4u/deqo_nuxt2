// function for Mock API
const sleep = m => new Promise(r => setTimeout(r, m))

export const state = () => ({
  products: [],
  version: '0.0.1'

})
export const mutations = {
  ADD_PRODUCT(state, product) {
    // if cart doesn't have product add it
    if (!state.products.find(p => product.title === p.title)) {
      state.products = [...state.products, product]
    }
  },
  REMOVE_PRODUCT(state, product) {
    state.products = Array.from(state.products.filter(prod => prod.title !== product.title))
  }

}
export const actions = {
  async addProduct({ commit }, data) {
    await sleep(300)
    await commit('ADD_PRODUCT', data)
  },
  async removeProduct({ commit }, productId) {
    await sleep(300)
    await commit('REMOVE_PRODUCT', productId)
  }

}