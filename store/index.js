export const state = () => ({
    items: [
        {
          id: 1,
          articleNumber: '',
          name: 'Брюки-чиносы из твила с ремнём',
          img: 'item_1.jpg',
          price: '3,299',
          priceOld: '3,299',
        },
        {
          id: 2,
          articleNumber: '',
          name: 'Брюки-чиносы из твила с ремнём',
          img: 'item_2.jpg',
          price: '3,299',
          priceOld: '3,299',
        },
        {
          id: 3,
          articleNumber: '',
          name: 'Брюки-чиносы из твила с ремнём',
          img: 'item_3.jpg',
          price: '3,299',
          priceOld: '3,299',
        },
        {
          id: 4,
          articleNumber: '',
          name: 'Брюки-чиносы из твила с ремнём',
          img: 'item_4.jpg',
          price: '3,299',
          priceOld: '3,299',
        },
        {
          id: 5,
          articleNumber: '',
          name: 'Брюки-чиносы из твила с ремнём',
          img: 'item_5.jpg',
          price: '3,299',
          priceOld: '3,299',
        },
       
    ],
    categories: [
      {
          id: 'tshorts',
          checked: false,
          name: 'Футболки и поло'
      },
      {
          id: 'outerwear',
          checked: false,
          name: 'Верхняя одежда'
      },
      {
          id: 'shorts',
          checked: false,
          name: 'Шорты'
      },
      {
          id: 'hoodies',
          checked: false,
          name: 'Толстовки'
      },
      {
          id: 'jumpers',
          checked: false,
          name: 'Джемперы и кардиганы'
      },
      {
          id: 'jackets',
          checked: false,
          name: 'Жакеты и пиджаки'
      },
      {
          id: 'sportswear',
          checked: false,
          name: 'Спортивная одежда'
      },
      {
          id: 'swimmingShorts',
          checked: false,
          name: 'Плавательные шорты'
      },
      ],
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
    checkedCategories: [],
    isVisible: false
})

export const mutations = {
  checkedChange (state, checked) {
      state.checkedCategories.push({
        name: ''
      })
      for (let el = 0; el < state.checkedCategories.length; el++) {
        const element = state.checkedCategories[el];
        element.name = checked[el];      
      }
      for (let i = 0; i < state.checkedCategories.length; i++) {      
        let cache = state.checkedCategories[i];
        for (let j = 0; j < state.categories.length; j++) {        
          if (cache.name == state.categories[j].name) {
            state.categories[j].checked = true;
            console.log(state.categories[j].checked);
          }
          else {
            state.categories[j].checked = false
          }
        }        
    }
    console.log(state.categories);
    console.log(checked);
    console.log(state.checkedCategories);
  },

  clearCheckedCategories (state){    
    let array = state.checkedCategories
    array = array.splice(-1, array.length)
    console.log(array);
  }
}

export const actions = {
  checkedChange ({commit}, checked) {
    commit('clearCheckedCategories')
    commit('checkedChange', checked)    
  }
  
}


export const getters = {
    
}
