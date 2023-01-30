<template>
  <div class="wrapper">
    <DimensionalGrid v-if="$store.state.dimensionalGrid != false" />
    <HeaderBlack/>
    <BurgerMenu v-if="$store.state.burgerMenuOpened != false"/>
    <section>
      <div class="itemPage">
        <div class="left">       
          <!-- <div class="container">
            <div class="slider__flex">
              <div class="slider__col">

                <div class="slider__prev">Prev</div> 

                <div class="slider__thumbs">
                  <div class="swiper-container"> 
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <div class="slider__image"><img src="https://picsum.photos/1920/1080" alt=""/></div>
                      </div>
                      <div class="swiper-slide">
                        <div class="slider__image"><img src="https://picsum.photos/1920/1081" alt=""/></div>
                      </div>
                      <div class="swiper-slide">
                        <div class="slider__image"><img src="https://picsum.photos/1920/1082" alt=""/></div>
                      </div>
                      <div class="swiper-slide">
                        <div class="slider__image"><img src="https://picsum.photos/1920/1083" alt=""/></div>
                      </div>
                      <div class="swiper-slide">
                        <div class="slider__image"><img src="https://picsum.photos/1920/1084" alt=""/></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="slider__next">Next</div> 

              </div>

              <div class="slider__images">
                <div class="swiper-container"> 
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="slider__image"><img src="https://picsum.photos/1920/1080" alt=""/></div>
                    </div>
                    <div class="swiper-slide">
                      <div class="slider__image"><img src="https://picsum.photos/1920/1081" alt=""/></div>
                    </div>
                    <div class="swiper-slide">
                      <div class="slider__image"><img src="https://picsum.photos/1920/1082" alt=""/></div>
                    </div>
                    <div class="swiper-slide">
                      <div class="slider__image"><img src="https://picsum.photos/1920/1083" alt=""/></div>
                    </div>
                    <div class="swiper-slide">
                      <div class="slider__image"><img src="https://picsum.photos/1920/1084" alt=""/></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div> -->
          <ButtonFavorite :item="item"/>
          <img
              class="card__img"
              :src="'https://frontend-test.idaproject.com' + item.photo"
              :alt="item.name"
              />
            <p>Брюки с комфортным поясом на кулиске не создают лишний объем благодаря зауженному книзу силуэту. Модель сшита из плотного трикотажа экстра-пенье без начеса, для которого отобрали самые длинные и прочные волокна австралийского хлопка. Материал отлично регулирует температуру тела, мало мнется и долго служит. Произведено в России.</p>
        </div>
        <div class="right">
            <h4>{{item.name}}</h4>
            <div class="tag__price">
              <!--TODO dynamic -->
              <p>Bestsellers</p> 
              <div class="flex prices">
                <p style="text-decoration: line-through;" class="price old">4,299 ₽</p>
                <p class="price">{{item.price}} ₽</p>
              </div>
            </div>
            <div class="size">
                <p>Размер</p>
                <div class="sizes flex">
                  <div class="form_radio_btn" v-for="size in this.sizes" :key="size.id">
                    <input name="size" type="radio" :value="size" v-model="sizeChecked" @change="sizeCheck" :id="size">
                    <label :class="{highlightedSizeClass: highlightedSize}" :id="size" :for="size">{{size}}</label>
                  </div>                  
                </div>
                <div class="sizesPopup">
                  <img src="../../assets/img/icons/sizesPopup.svg" alt="">
                  <p @click="$store.commit('SET_POPUP_OPENED', !$store.state.dimensionalGrid)">размерная сетка</p>
                </div>
            </div>
            <div class="color">
              <p>Цвет <span v-if="colorChecked != ''">: {{colorChecked}}</span></p>
              <div class="flex colors">
                <div class="form_radio_btn_color" v-for="color in this.colors" :key="color.id">
                  <input name="color" type="radio" :value="color" v-model="colorChecked" @change="colorCheck" :id="color.id">
                  <label :class="{highlightedColorClass: highlightedColor}" :id="color.id" :for="color.id"></label>
                </div>                
              </div>
            </div>
            <div class="buttons">
               <ButtonCart @highlightedSize="highlightedSizeMethod" @highlightedColor="highlightedColorMethod" :item="item"/>
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
              <div class="jcsb">
                <p style="line-height: 29px; width: 330px;">На модели размер: S <br>
                Параметры модели: 176 | 90 | 61 | 90</p>
                <i :class="{downActive: checkOpenedModel}" @click="checkedOpenedMethod" class="down"></i>
              </div>
              <div v-if="checkOpenedModel === true" class="jcsb">
                <ul>
                  <li>Рост 176 см</li>
                  <li>Tall size - размерная сетка для высоких</li>
                  <li>Объём груди 90 см</li>
                  <li>Объём талии 61 см</li>
                  <li>Объём бёдер 90 см</li>
                </ul>
                <i></i>
              </div>
              <div class="jcsb">
                <p style="line-height: 29px; width: 330px;">Рекомендации по уходу</p>
                <i :class="{downActive: checkedOpenedRecomendations}" @click="checkedOpenedMethodRecomendations" class="down"></i>
              </div>
              <div v-if="checkedOpenedRecomendations === true" class="jcsb">
                <ul>
                  <li>Деликатная стирка до 30 °C</li>
                  <li>Не отбеливать</li>
                  <li>Температура утюга до 150 °C</li>
                  <li>Барабанная сушка запрещена</li>
                  <li>Сухая чистка (химчистка)</li>
                </ul>
                <i></i>
              </div>
            </div>
        </div>
    </div>
    </section>    
    <ItemsSlider :title="title"/>
    <ItemsSlider :title="title_recomended"/>
    <FAQ/>
    <Footer/>    

  </div>
</template>

<script>
import FAQ from '~/components/General/FAQ.vue'
import HeaderBlack from '~/components/General/HeaderBlack.vue'
import Footer from '~/components/General/Footer.vue'
import BurgerMenu from '~/components/General/BurgerMenu.vue'
import ItemsSlider from '~/components/General/ItemsSlider.vue'
import DimensionalGrid from '~/components/General/DimensionalGrid.vue'
import ButtonBuy from '~/components/Buttons/ButtonBuy.vue'
import ButtonCart from '~/components/Buttons/ButtonCart.vue'
import ButtonFavorite from '~/components/Buttons/ButtonFavorite.vue'


import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

Swiper.use([ Navigation, Pagination, Autoplay ])

export default {
    data(){
      return{
        title: 'Также на модели',
        title_recomended: 'Может подойти',
        checkOpenedModel: false,
        checkedOpenedRecomendations: false,
        highlightedSize: false,
        highlightedColor: false,
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
      checkedOpenedMethod(){
          this.checkOpenedModel = !this.checkOpenedModel
      },
      checkedOpenedMethodRecomendations(){
          this.checkedOpenedRecomendations = !this.checkedOpenedRecomendations
      },
      sizeCheck(){
        this.$set(this.item, 'size', this.sizeChecked)
      },
      colorCheck(){
        this.$set(this.item, 'color', this.colorChecked.id)
        this.colorChecked = this.colorChecked.name
      },
      highlightedSizeMethod() {
        this.highlightedSize = !this.highlightedSize;
      },
      highlightedColorMethod() {
        this.highlightedColor = !this.highlightedColor;
      },
    },
    async asyncData({ params, redirect }) {
    const items = await fetch('https://frontend-test.idaproject.com/api/product')
    .then((res) => res.json())

    const filteredItem = items.find(el => el.name === params.item)
    if (filteredItem) { 
      let copiedItem = JSON.parse(JSON.stringify(filteredItem))   
      return {
        item: copiedItem,
      }
    } else {
      redirect('/')
    }
    },
  
    components: {Footer, BurgerMenu, HeaderBlack, ItemsSlider, ButtonBuy, ButtonCart, DimensionalGrid, ButtonFavorite, FAQ}, 
}

</script>

<style lang="scss" scoped>
    .downActive{
        background-image: url('../../assets/img/icons/buttonDown_active.svg') !important;
    }
    .down{
        width: 20px;
        height: 20px;
        cursor: pointer;
        background-image: url('../../assets/img/icons/buttonDown.svg');
        background-position: center;
        background-repeat: no-repeat;
        transition: 0.9s ease all;
        &:hover{
            background-image: url('../../assets/img/icons/buttonDown_active.svg');
        }

    }
    .highlightedColorClass{
      // border: 2px solid #BD270F !important;
      // background-color: #BC716E !important;
      opacity: 0.5;
      background-image: url('../../assets/img/icons/colorNotChecked.svg');
      background-position: center;
      background-size: 10px 10px;
      background-repeat: no-repeat;
      box-sizing: border-box;
  
    }
    .highlightedSizeClass{
      box-sizing: border-box;
      border: 2px solid #BD270F !important;
      color: #BD270F !important;

    }
    .size{
      .sizesPopup{
        display: flex;
        align-items: center;
        gap: 16px;
        cursor: pointer;
      }
      .sizes{
        margin-bottom: 10px;
      }
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
      align-items: center;
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      ul li {
        position: relative;
        padding-left: 16px;
        margin-left: 12px;

      }
      ul li::before {
        content: '';
        position: absolute;
        // margin-left: 16px;

        top: 10px;
        left: 0;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #8BD74B;
      }
      ul li:not(:last-child) {
        margin-bottom: 8px;
      }
      ul li::before {
        background-color: #A9A1A1;
      }
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
        // margin-top: 110px;
        // gap: 150px;
        // padding-top: 110px;
        gap: 44px;
        align-items: start;
        justify-content: space-between;
        .left{
          position: relative;
          .card__img{
            width: 100%;
            // width: unset;
            height: auto;
            // height: 900px;
            border: 1px solid #A9A1A1;
          }
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