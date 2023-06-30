// function for Mock API
const sleep = m => new Promise(r => setTimeout(r, m))

export const state = () => ({
  user: '',

})
export const mutations = {
  SET(state, user) {
    state.user = user
  },

}
export const actions = {
  async saveProfileInfo({ commit }, data) {
    await sleep(300)
    await commit('SET', data)
  },

}
