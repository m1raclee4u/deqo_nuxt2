// function for Mock API
const sleep = m => new Promise(r => setTimeout(r, m))

export const state = () => ({
    products: [],
    categories: [],
    colors: [],
    sizes: []
})

export const getters = {
    getProducts: (state) => {
        return state.products
    },
    getFilters: (state) => {
        return {
            categories: state.categories,
            colors: state.colors,
            sizes: state.sizes
        }
    },
    getCategories: (state) => {
        return state.categories
    },
    getColors: (state) => {
        return state.colors
    },
    getSizes: (state) => {
        return state.sizes
    },
}

export const mutations = {
    SET_PRODUCTS(state, data) {
        state.products = data
    },
    SET_CATEGORIES(state, data) {
        state.categories = data
    },
    SET_COLORS(state, data) {
        state.colors = data
    },
    SET_SIZES(state, data) {
        state.sizes = data
    }
}

export const actions = {
    async fetchProducts({ commit }) {
        let products = await this.$axios.$get("site/catalog-list")
        commit("SET_PRODUCTS", products.data);
    },
    async fetchCategories({ commit }) {
        let categories = await this.$axios.$get("site/categories")
        commit("SET_CATEGORIES", categories);
    },
    async fetchColors({ commit }) {
        let colors = await this.$axios.$get("/colors")
        commit("SET_COLORS", colors.colors);
    },
    async fetchSizes({ commit }) {
        let sizes = await this.$axios.$get("/sizes")
        commit("SET_SIZES", sizes.sizes);
    }

}

