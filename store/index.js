export const state = () => ({
  products: [],
  searchProducts: '',
  brandId: 1,
  categoryTags: ['oversized', 'slim', 'tall', 'petit'],
  categories: [],
  productsInCart: [],
  colors: [
    {
      id: 'white',
      name: 'Белый'
    },
    {
      id: 'black',
      name: 'Черный'
    },
    {
      id: 'red',
      name: 'Красный'
    },
    {
      id: 'blue',
      name: 'Синий'
    },
    {
      id: 'orange',
      name: 'Оранжевый'
    },
    {
      id: 'lightblue',
      name: 'Голубой'
    },
    {
      id: 'green',
      name: 'Зеленоватый'
    },
    {
      id: 'pink',
      name: 'Розоватый'
    },
  ],
  sizes: ['os', 'xs', 's', 'm', 'l', 'xl', '2xl'],
  checkedCategories: [],
  isVisible: false,
  burgerMenuOpened: false,
  dimensionalGrid: false,
  login: false,
  selectParametrs: false,
})

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  },
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


export const actions = {

  async fetchProducts({ commit }) {
    let products = [];
    await this.$axios
      .get('http://localhost:8000/api/products?filter%5Bbrand_id%5D=1')
      .then(response => products = response.data.products.data);

    // await this.$axios
    //   .get('https://frontend-test.idaproject.com/api/product?category=2')
    //   .then(response => (products = products.concat(response.data)));
    // await this.$axios
    //   .get('https://frontend-test.idaproject.com/api/product?category=3')
    //   .then(response => (products = products.concat(response.data)));
    commit("SET_PRODUCTS", products);
  },

  async fetchCategories({ commit }) {
    let categories;
    await this.$axios
      .get("http://127.0.0.1:8000/api/site/categories")
      .then(response => categories = response.data);
    commit("SET_CATEGORIES", categories);
  }

}

export const getters = {
  products: s => s.products,
  categories: s => s.categories,
};