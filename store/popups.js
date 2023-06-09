export const state = () => ({
  isVisible: false,
  burgerMenuOpened: false,
  dimensionalGrid: false,
  login: false,
  selectParametrs: false,
})

export const mutations = {
  SET_MENU_OPENED(state, opened) {
    state.burgerMenuOpened = opened
  },
  SET_POPUP_OPENED(state, opened) {
    state.dimensionalGrid = opened
  },
  SET_LOGIN_OPENED(state, opened) {
    state.login = opened
  },
  SET_SELECT_PARAMETERS_OPENED(state, opened) {
    state.selectParametrs = opened
  },
}
