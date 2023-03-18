// function for Mock API
const sleep = m => new Promise(r => setTimeout(r, m))

export const state = () => ({
    products: [],
    categories: []
})

export const getters = {
    getProducts: (state) => {
        return [...state.products]
    },
    getCategories: (state) => {
        return [...state.categories]
    },
}

export const mutations = {
    SET_PRODUCTS(state, data) {
        state.products = data
    },
    SET_CATEGORIES(state, data) {
        state.categories = data
    }
}

export const actions = {
    async fetchProducts({ commit }) {
        let products;
        await this.$axios
            .get("site/catalog-list")
            .then(response => products = response.data);
        commit("SET_PRODUCTS", products);
    },
    async fetchCategories({ commit }) {
        let categories;
        await this.$axios
            .get("site/categories")
            .then(response => categories = response.data);
        commit("SET_CATEGORIES", categories);
    }

}

