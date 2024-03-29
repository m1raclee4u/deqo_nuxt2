// function for Mock API
const sleep = m => new Promise(r => setTimeout(r, m))

export const getters = () => ({
  getDeliveryTypes: (state) => {
    return state.deliveryTypes
  }
})

export const state = () => ({
  filters: {
    categories: [],
    prices: [0, 100],
    colors: [],
    sizes: [],
  },
  deliveryTypes: [
    {
      'key':'delivery',
      'name': 'Доставка курьером'
    },
    {
      'key':'PVZ',
      'name': 'Пункт выдачи СДЭК'
    },
    {
      'key':'POSTAMAT',
      'name': 'Постамат СДЭК'
    },
  ],
  tags: [],
  products: []

})
export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
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
  SET_TAGS(state) {
    state.tags.splice(0, state.tags.length)
    for (const filter in state.filters) {
      for (let index = 0; index < state.filters[filter].length; index++) {
        const element = state.filters[filter][index];
        state.tags.push(element)
      }

    }
  },
  DELETE_TAG(state, tag) {
    for (const filter in state.filters) {
      for (let index = 0; index < state.filters[filter].length; index++) {
        const element = state.filters[filter][index];
        if (element === tag) {
          state.filters[filter].splice(index, 1)
        }
      }
    }

  },
  SET_FILTERS(state, {data, fetchFilters}) {
    for (const filter in fetchFilters) {
      for (let index = 0; index < fetchFilters[filter].length; index++) {
        const elementFetchFilters = fetchFilters[filter][index];
        for (const filterData in data) {
          if (data[filterData] !== null || filterData === 'price') {
            let arrayFilterData = data[filterData].split(',')
            for (let indexData = 0; indexData < arrayFilterData.length; indexData++) {
              const elementData = arrayFilterData[indexData];
              if (elementData === elementFetchFilters?.name || elementData === elementFetchFilters?.slug) {
                state.filters[filter].push(elementFetchFilters)
              }
            }
          }
        }
      }
    }
  },
  CLEAR_FILTERS(state) {
    state.filters.categories.splice(0, state.filters.categories.length);
    state.filters.prices.splice(0, state.filters.prices.length);
    state.filters.colors.splice(0, state.filters.colors.length);
    state.filters.sizes.splice(0, state.filters.sizes.length);
  },

}
export const actions = {
  async setCategories({commit}, data) {
    await sleep(300)
    await commit('SET_CATEGORIES', data)
    await commit('SET_TAGS', data)
  },
  async setPrices({commit}, data) {
    await sleep(300)
    await commit('SET_PRICES', data)
    await commit('SET_TAGS', data)
  },
  async setColors({commit}, data) {
    await sleep(300)
    await commit('SET_COLORS', data)
    await commit('SET_TAGS', data)
  },
  async setSizes({commit}, data) {
    await sleep(300)
    await commit('SET_SIZES', data)
    await commit('SET_TAGS', data)
  },
  async setFilters({commit, rootGetters}, data) {
    let fetchFilters = rootGetters['catalog/getFilters'];
    await sleep(300)
    await commit('SET_FILTERS', {data, fetchFilters})
    await commit('SET_TAGS')
  },
  async clearFilters({commit}) {
    await sleep(300)
    await commit('CLEAR_FILTERS')
    await commit('SET_TAGS')
  },
  async deleteTag({commit}, data) {
    await sleep(300)
    await commit('DELETE_TAG', data)
    await commit('SET_TAGS', data)
  },
  async fetchProducts({commit}, route) {
    const products = await this.$axios.$get(`/site/catalog-list`, {
      params: route.query,
    });
    await commit('SET_PRODUCTS', products)
  },

}
