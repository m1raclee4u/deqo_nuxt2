// function for Mock API
const sleep = m => new Promise(r => setTimeout(r, m))

export const state = () => ({
  orders: [],
  statuses: [
    {
      'key':'CREATED',
      'name': 'Новый'
    },
    {
      'key':'PAID',
      'name': 'Оплачен'
    },
    {
      'key':'PROCESSING',
      'name': 'В обработке'
    },
    {
      'key':'COMPILE',
      'name': 'Собран'
    },
    {
      'key':'IN_DELIVERY',
      'name': 'В доставке'
    },
    {
      'key':'DELIVERED',
      'name': 'Доставлен'
    },
    {
      'key':'CANCELLED',
      'name': 'Отменен'
    },
  ]
})

export const mutations = {
  SET_ORDERS(state, orders){
    state.orders = orders
  }
}

export const actions = {
  async fetchOrders({commit}) {
    const orders = await this.$axios.$get(`/orders`)
    await commit('SET_ORDERS', orders.orders)
  },
}

export const getters = {
  getStatuses: (state) => {
    return state.statuses
  },
  getOrders: (state) => {
    return state.orders
  }
}
