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
    } 
  },
  SET_PRODUCT (state, { productId, data }) {
    state.products = [...state.products.filter(prod => prod.id !== productId), data]
  },
  INCREMENT_PRODUCT (state, productId) {
    if (state.products.find(p => productId === p.id)){
      state.products.find(p => productId === p.id).quantity++
    }
  },
  DECREMENT_PRODUCT (state, product) {
    if (state.products.find(p => product.id === p.id).quantity === 1){
      state.products = Array.from(state.products.filter(prod => prod.id !== product.id))
    } else {
      state.products.find(p => product.id === p.id).quantity--
    }
  },
  REMOVE_PRODUCT (state, productId) {
      state.products = Array.from(state.products.filter(prod => prod.id !== productId))
  },
  // FULL_PRICE (state, product) {
  //   for (const item in object) {
  //     if (Object.hasOwnProperty.call(object, item)) {
  //       const element = object[item];
        
  //     }
  //   }
  //   state.fullPrice = product
  // },

}
export const actions = {
  async addProduct ({ commit }, data) {
    await sleep(300)
    await commit('ADD_PRODUCT', data)
    // await sleep(300)
    // await commit('FULL_PRICE', data)
  },
  async removeProduct ({ commit }, data) {
    await sleep(300)
    await commit('REMOVE_PRODUCT', data)
    // await sleep(300)
    // await commit('FULL_PRICE', data)
  },
  async decrementProduct ({ commit }, data) {
    await sleep(300)
    await commit('DECREMENT_PRODUCT', data)
    // await sleep(300)
    // await commit('FULL_PRICE', data)
  },
  async incrementProduct ({ commit }, data) {
    await sleep(300)
    await commit('INCREMENT_PRODUCT', data)
    // await sleep(300)
    // await commit('FULL_PRICE', data)
  },

}

export const getters = {
  getProducts (state) {
    return state.products
  }
}