// function for Mock API
const sleep = m => new Promise(r => setTimeout(r, m))

export const state = () => ({
  products: [],
  version: '0.0.1'

})
export const mutations = {
  ADD_PRODUCT (state, product) {
    // if cart doesn't have product add it, if have increment its quantity
    if (!state.products.find(p => product.id === p.id)) {
      state.products = [...state.products, product]
    } else {
      state.products.find(p => product.id === p.id).quantity++
      console.log(state.products);
    }
  },
  SET_PRODUCT (state, { productId, data }) {
    state.products = [...state.products.filter(prod => prod.id !== productId), data]
  },
  INCREMENT_PRODUCT (state, product) {
    if (state.products.find(p => product.id === p.id).quantity === 1){
      state.products = Array.from(state.products.filter(prod => prod.id !== product.id))
    } else {
      state.products.find(p => product.id === p.id).quantity--
    }
  },
  REMOVE_PRODUCT (state, productId) {
      state.products = Array.from(state.products.filter(prod => prod.id !== productId))
  }

}
export const actions = {
  async addProduct ({ commit }, data) {
    await sleep(300)
    await commit('ADD_PRODUCT', data)
  },
  async removeProduct ({ commit }, data) {
    await sleep(300)
    await commit('REMOVE_PRODUCT', data)
  },
  async incrementProduct ({ commit }, productId) {
    await sleep(300)
    await commit('INCREMENT_PRODUCT', productId)
  }

}

export const getters = {
  getProducts (state) {
    return state.products
  }
}