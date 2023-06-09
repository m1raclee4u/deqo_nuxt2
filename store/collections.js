export const state = () => ({
  collections: [],
  products: []
})

export const mutations = {
  SET_COLLECTIONS(state, collections) {
    state.collections = collections;
  },
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
}


export const actions = {
  async fetchCollections({ commit }) {
    let collections = await this.$axios
      .$get('/collections/site/all');
    commit("SET_COLLECTIONS", collections);
  },
  async fetchProducts({ commit }, route) {
    let products = await this.$axios
      .$get(`/collections/site/${route.params.slug}`, {params: route.query});
    commit("SET_PRODUCTS", products.products);
  },
}

export const getters = {
  getCollections: (state) => {
    return state.collections
  },
};
