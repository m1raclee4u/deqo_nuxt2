// function for Mock API
const sleep = m => new Promise(r => setTimeout(r, m))

export const state = () => ({
    filters: {
        categories: [],
        prices: [],
        colors: [],
        sizes: [],
    },

})
export const mutations = {
    SET_CATEGORIES(state, categories) {
        state.filters.categories = categories
    },
    SET_PRICES(state, prices) {
        state.filters.prices = prices
    },
    SET_COLORS(state, colors) {
        state.filters.colors = colors
    },
    SET_SIZES(state, sizes) {
        state.filters.sizes = sizes
    },
    REMOVE_PRODUCT(state, product) {
        state.products = Array.from(state.products.filter(prod => prod.title !== product.title))
    }

}
export const actions = {
    async setCategories({ commit }, data) {
        await sleep(300)
        await commit('SET_CATEGORIES', data)
    },
    async setPrices({ commit }, data) {
        await sleep(300)
        await commit('SET_PRICES', data)
    },
    async setColors({ commit }, data) {
        await sleep(300)
        await commit('SET_COLORS', data)
    },
    async setSizes({ commit }, data) {
        await sleep(300)
        await commit('SET_SIZES', data)
    },
    async removeProduct({ commit }, productId) {
        await sleep(300)
        await commit('REMOVE_PRODUCT', productId)
    }

}