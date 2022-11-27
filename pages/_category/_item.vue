<template>
  <div class="wrapper">
    <HeaderBlack/>
    <BurgerMenu v-if="$store.state.burgerMenuOpened != false"/>
    <div class="itemPage  p60">
        <div class="left">
            <img
                class="card__img"
                :src="'https://frontend-test.idaproject.com' + photo"
                :alt="name"
                />
            <!-- TODO -->
            <p style="max-width: 855px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
        </div>
        <div class="right">
            <h4>{{name}}</h4>
            <div class="tag__price">
              <!--TODO dynamic -->
              <p>Bestsellers</p> 
              <div class="flex">
                <p style="text-decoration: line-through;">4.299 Р</p>
                <p class="price">{{price}} Р</p>
              </div>
            </div>
            <div class="jcsb">
              <div class="color">
                <p>Color</p>
                <div class="flex colors">
                  <div class="input_color" v-for="color in $store.state.colors" :key="color.id">
                    <input class="custom-radio" :name="color" type="radio" :id="color.id" :value="color.id">
                    <label :id="color.id" :for="color.id"></label>
                  </div>
                  
                 
                </div>
              </div>
              <div class="size">
                <p>Size</p>
                <div class="sizes flex">
                  <div class="input_size" v-for="size in $store.state.sizes" :key="size.id">
                   <input class="custom-radio" :name="size" type="radio" :id="size" :value="size">
                   <label :id="size" :for="size">{{size}}</label>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    <Footer/>    

  </div>
</template>

<script>
import HeaderBlack from '~/components/General/HeaderBlack.vue'
import Footer from '~/components/General/Footer.vue'
import BurgerMenu from '~/components/General/BurgerMenu.vue'
export default {

    async asyncData({ params, redirect }) {
    const items = await fetch('https://frontend-test.idaproject.com/api/product')
    .then((res) => res.json())
    
    const filteredItem = items.find((el) => el.name === params.item)
    console.log(params.item);  
    if (filteredItem) {
      return {
        category: filteredItem.category,
        name: filteredItem.name,
        photo: filteredItem.photo,
        price: filteredItem.price,
      }
    } else {
      redirect('/')
    }
    },
  
    components: {Footer, BurgerMenu, HeaderBlack}, 
}

</script>

<style lang="scss" scoped>
    .jcsb{
      gap: 95px;
    }
    .colors{
      max-width: 128px;
      flex-wrap: wrap;
    }
    .price{
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      /* identical to box height */
      color: #1A1A1A;
    }
    .right{
        h4{
          font-weight: 600;
          font-size: 32px;
          line-height: 38px;

          color: #1A1A1A;
        }
    }
    .flex{
    gap: 20px;
    align-items: center;
    }
    .tag__price{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .itemPage{
        display: flex;
        // gap: 150px;
        justify-content: space-between;
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
  .input_size{
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
    .custom-radio+label #text{
      margin-left: -4px;
    }
    .custom-radio+label::before {
      content: '';
      display: inline-block;
      text-transform: uppercase;          
      width: 38px;
      height: 38px;

      background: #017358;
      border-radius: 4px;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height */

      text-align: center;

      color: #FFFFFF;
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
  
</style>