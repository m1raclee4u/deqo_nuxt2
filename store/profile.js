// function for Mock API
const sleep = m => new Promise(r => setTimeout(r, m))

export const state = () => ({
  profile: {
    email: '',
    phone: '',
    name: ''
  },

})
export const mutations = {
  SET_PROFILE_INFO(state, profile) {
    state.profile = profile
  },

}
export const actions = {
  async saveProfileInfo({ commit }, data) {
    await sleep(300)
    await commit('SET_PROFILE_INFO', data)
  },

}
