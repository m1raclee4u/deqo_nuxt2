<template>
  <div class="wrapper">
    <HeaderBlack/>
    <BurgerMenu v-if="$store.state.burgerMenuOpened != false"/>
    <section>
      <div class="itemPage">
        <div class="left">       
          <!-- <div class="item_images p60">
              <div class="swiper-wrapper">
                  <img
                  class="card__img swiper-slide"
                  :src="'https://frontend-test.idaproject.com' + photo"
                  :alt="name"
                  />
                  <img
                  class="card__img swiper-slide"
                  :src="'https://frontend-test.idaproject.com' + photo"
                  :alt="name"
                  />
                  <img
                  class="card__img swiper-slide"
                  :src="'https://frontend-test.idaproject.com' + photo"
                  :alt="name"
                  />
              </div>        
          </div> -->
          <img
              class="card__img"
              :src="'https://frontend-test.idaproject.com' + photo"
              :alt="name"
              />
            <p>Брюки с комфортным поясом на кулиске не создают лишний объем благодаря зауженному книзу силуэту. Модель сшита из плотного трикотажа экстра-пенье без начеса, для которого отобрали самые длинные и прочные волокна австралийского хлопка. Материал отлично регулирует температуру тела, мало мнется и долго служит. Произведено в России.</p>
          <!-- TODO -->
          <!-- <p style="max-width: 855px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p> -->
        </div>
        <div class="right">
            <h4>{{name}}</h4>
            <div class="tag__price">
              <!--TODO dynamic -->
              <p>Bestsellers</p> 
              <div class="flex prices">
                <p style="text-decoration: line-through;" class="price old">4,299 ₽</p>
                <p class="price">{{price}} ₽</p>
              </div>
            </div>
            <div class="size">
                <p>Размер</p>
                <div class="sizes flex">
                  <div class="form_radio_btn" v-for="size in this.sizes" :key="size.id">
                    <input name="size" type="radio" :value="size" v-model="sizeChecked" @change="sizeCheck" :id="size">
                    <label :id="size" :for="size">{{size}}</label>
                  
                   <!-- <p class="p_size"></p> -->
                  </div>
                </div>
            </div>
            <div class="color">
              <p>Цвет <span v-if="colorChecked != ''">: {{colorChecked}}</span></p>
              <div class="flex colors">
                <div class="form_radio_btn_color"  v-for="color in this.colors" :key="color.id">
                  <input name="color" type="radio" :value="color" v-model="colorChecked" @change="colorCheck" :id="color.id">
                  <label :id="color.id" :for="color.id"></label>
                </div>
              </div>
            </div>
            <div class="buttons">
               <ButtonCart :item="filteredItem" :color="colorChecked" :size="sizeChecked"/>
               <ButtonBuy/>
            </div>         
            <div class="info">
              <div class="jcsb">
                <p>Состав</p>
                <p><span>Хлопок - {{'97'}}%</span>, <span>Эластан - {{'3'}}%</span></p>
              </div>
              <div class="jcsb">
                <p>Артикул</p>
                <span>{{'ART00001'}}</span>
              </div>
              <!-- <p class="todo" style="margin-top: 36px">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione vel quis nesciunt dolorum, aut laborum animi, minima est, porro aspernatur incidunt ipsam. Odio optio sint ab, veritatis necessitatibus ipsum et.</p> -->
            </div>
        </div>
    </div>
    </section>    
    <ItemsSlider/>
    <Footer/>    

  </div>
</template>

<script>
import HeaderBlack from '~/components/General/HeaderBlack.vue'
import Footer from '~/components/General/Footer.vue'
import BurgerMenu from '~/components/General/BurgerMenu.vue'
import ItemsSlider from '~/components/General/ItemsSlider.vue'
import ButtonBuy from '~/components/Buttons/ButtonBuy.vue'
import ButtonCart from '~/components/Buttons/ButtonCart.vue'

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

Swiper.use([ Navigation, Pagination, Autoplay ])

export default {
    props:{
      item: {
      }
    },
    data(){
      return{
        colorChecked: '',
        sizeChecked: '',
        sizes: ['os', 'xs', 's', 'm', 'l', 'xl', '2xl'],
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
      }
    },
    methods:{
      sizeCheck(){
        
      },
      colorCheck(){
        this.colorChecked = this.colorChecked.id
      },
    },
    async asyncData({ params, redirect }) {
    const items = await fetch('https://frontend-test.idaproject.com/api/product')
    .then((res) => res.json())
    
    const filteredItem = items.find((el) => el.name === params.item)
    if (filteredItem) {
      return {
        filteredItem: filteredItem,
        category: filteredItem.category,
        name: filteredItem.name,
        photo: filteredItem.photo,
        price: filteredItem.price,
      }
    } else {
      redirect('/')
    }
    },
  
    components: {Footer, BurgerMenu, HeaderBlack, ItemsSlider, ButtonBuy, ButtonCart}, 
}

</script>

<style lang="scss" scoped>
    
    .size{
      display: flex;
      flex-direction: column;
      gap: 12px;
      p{
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      /* identical to box height */
      /* средний */

      color: #A9A1A1;

      // margin-bottom: 10px;
      }
    }
    .color{
      display: flex;
      flex-direction: column;
      gap: 12px;
      p{
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      /* identical to box height */
      /* средний */

      color: #A9A1A1;

      // margin-bottom: 10px;
      }
    }
    .info{
      display: flex;
      flex-direction: column;
      gap: 20px;
      color: #A9A1A1;
    }
    .buttons{
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .jcsb{
      gap: 95px;
    }
    .right{
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 44px;
      max-width: 435px;
       
    }
    .price{
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;

      /* тёмный */

      color: #1A1A1A;
       
    }
    .old{
      font-weight: 500;
      font-size: 20px;
      line-height: 23px;
      text-decoration-line: line-through;

      /* средний */

      color: #A9A1A1;

    }
    .right{
        h4{
          font-weight: 600;
          font-size: 28px;
          line-height: 33px;

          color: #4A4444;
        }
    }
    .colors{
      gap: 18px;
    }
    .sizes{
      gap: 10px;
    }
    .prices{
      gap: 20px;
    }
    .flex{
    // gap: 10px;
    align-items: center;
    }
    .tag__price{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .itemPage{
        display: flex;
        max-width: 1400px;
        margin: 0 auto;
        // gap: 150px;
        // padding-top: 110px;
        gap: 44px;
        justify-content: space-between;
        .left{
          max-width: 980px;
          p{
            font-weight: 400;
            font-size: 18px;
            line-height: 180%;
          }
        }
    }
    /* для элемента input c type="radio" */
  .input_color{
      .custom-radio {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }
    /* для элемента label связанного с .custom-radio */
    .custom-radio+label {
      display: inline-flex;
      align-items: center;
      user-select: none;
    }
    /* создание в label псевдоэлемента  before со следующими стилями */
    .custom-radio+label::before {
      content: '';
      display: inline-block;
      width: 14px;
      height: 14px;
      flex-shrink: 0;
      flex-grow: 0;
      border-radius: 50%;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
      
     
    }
    /* стили при наведении курсора на радио */
    .custom-radio:not(:disabled):not(:checked)+label:hover::before {
      border-color: #b3d7ff;
    }
    /* стили для активной радиокнопки (при нажатии на неё) */
    .custom-radio:not(:disabled):active+label::before {
      background-color: #b3d7ff;
      border-color: #b3d7ff;
    }
    /* стили для радиокнопки, находящейся в фокусе */
    .custom-radio:focus+label::before {
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
    /* стили для радиокнопки, находящейся в фокусе и не находящейся в состоянии checked */
    .custom-radio:focus:not(:checked)+label::before {
      border-color: #80bdff;
    }
    /* стили для радиокнопки, находящейся в состоянии checked */
    .custom-radio:checked+label::before {
      border-color: #0b76ef;
      // background-color: #0b76ef;
      // background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
    }
    /* стили для радиокнопки, находящейся в состоянии disabled */
    .custom-radio:disabled+label::before {
      background-color: #e9ecef;
    }
  }
  .p_size{
    position: absolute;
    // bottom: -87px;
    text-align: center;
    text-transform: uppercase;
    width: 38px;    
    height: 38px;
    margin-top: -35px !important;
    pointer-events: none;
  }
  .input_size{
    .custom-radio {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }

  }
  
</style>