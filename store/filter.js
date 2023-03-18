// function for Mock API
const sleep = m => new Promise(r => setTimeout(r, m))

export const state = () => ({
    filters: [
        {
            category: {

            },
            price: {

            },
            color: {

            },
            size: {

            }
        }
    ],

})
export const mutations = {
    ADD_CATEGORIES(state, category) {
        state.filter.category = category
    },
    REMOVE_PRODUCT(state, product) {
        state.products = Array.from(state.products.filter(prod => prod.title !== product.title))
    }

}
export const actions = {
    async addCategories({ commit }, data) {
        await sleep(300)
        await commit('ADD_CATEGORIES', data)
    },
    async removeProduct({ commit }, productId) {
        await sleep(300)
        await commit('REMOVE_PRODUCT', productId)
    }

}