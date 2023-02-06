// function for Mock API
const sleep = m => new Promise(r => setTimeout(r, m))

export const state = () => ({
  products: [],
  version: '0.0.1'

})
export const mutations = {
  ADD_PRODUCT(state, product) {
    let arr = state.products
    if (!arr.find((p) => { if (p.id === product.id && p.size === product.size && p.color === product.color) { return true } })) {
      state.products = [...state.products, product]
    }
  },
  SET_PRODUCT(state, { productId, data }) {
    state.products = [...state.products.filter(prod => prod.id !== productId), data]
  },
  INCREMENT_PRODUCT(state, product) {
    let arr = state.products
    if (arr.find((p) => { if (p.id === product.id && p.size === product.size && p.color === product.color) { return true } })) {
      arr.find((p) => { if (p.id === product.id && p.size === product.size && p.color === product.color) { return true } }).quantity++
    }
  },
  SET_QUANTITY(state, { product, quantity }) {
    let arr = state.products
    if (arr.find((p) => { if (p.id === product.id && p.size === product.size && p.color === product.color) { return true } })) {
      arr.find((p) => { if (p.id === product.id && p.size === product.size && p.color === product.color) { return true } }).quantity = quantity
    }
  },
  DECREMENT_PRODUCT(state, product) {
    let arr = state.products
    if (arr.find((p) => { if (p.id === product.id && p.size === product.size && p.color === product.color) { return true } }).quantity === 1) {
      arr = arr.splice(arr.indexOf(arr.find((p) => { if (p.id === product.id && p.size === product.size && p.color === product.color) { return true } })), 1)
    } else {
      arr.find((p) => { if (p.id === product.id && p.size === product.size && p.color === product.color) { return true } }).quantity--
    }
  },
  REMOVE_PRODUCT(state, product) {
    let arr = state.products
    arr = arr.splice(arr.indexOf(arr.find((p) => { if (p.id === product.id && p.size === product.size && p.color === product.color) { return true } })), 1)
  },

}
export const actions = {
  async addProduct({ commit }, data) {
    await sleep(300)
    await commit('ADD_PRODUCT', data)
  },
  async removeProduct({ commit }, data) {
    await sleep(300)
    await commit('REMOVE_PRODUCT', data)
  },
  async decrementProduct({ commit }, data) {
    await sleep(300)
    await commit('DECREMENT_PRODUCT', data)
  },
  async incrementProduct({ commit }, data) {
    await sleep(300)
    await commit('INCREMENT_PRODUCT', data)
  },
  async setQuantityProductCart({ commit }, { data, quantity }) {
    await sleep(300)
    await commit('SET_QUANTITY', { product: data, quantity: quantity })
  },

}

export const getters = {
  getProducts: (state) => {
    return [...state.products]
  },
  getProducts: (state) => {
    return [...state.products]
  },
}