export const state = () => ({
    products: [],
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
    // favorites: [
      
    // ],
    checkedCategories: [],
    isVisible: false,
    burgerMenuOpened: false
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
  }
}


export const actions = {

  async fetchProducts({ commit }) {
    let products = [];
    await this.$axios
      .get('https://frontend-test.idaproject.com/api/product?category=1')
      .then(response => (products = response.data));
    await this.$axios
      .get('https://frontend-test.idaproject.com/api/product?category=2')
      .then(response => (products = products.concat(response.data)));
    await this.$axios
      .get('https://frontend-test.idaproject.com/api/product?category=3')
      .then(response => (products = products.concat(response.data)));
    commit("SET_PRODUCTS", products);
  },
  
  async fetchCategories({ commit }) {
    let categories;
    await this.$axios
      .get("https://frontend-test.idaproject.com/api/product-category")
      .then(response => (categories = response.data));
    commit("SET_CATEGORIES", categories);
  }
  
}

export const getters = {
  products: s => s.products,
  categories: s => s.categories,
  productsInCart: s => s.productsInCart
};