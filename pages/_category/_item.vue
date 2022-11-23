<template>
  <div class="wrapper">
    <HeaderBlack/>
    <BurgerMenu v-if="$store.state.burgerMenuOpened != false"/>
    <div class="itemPage p60">
        <div class="left">
            <img
                class="card__img"
                :src="'https://frontend-test.idaproject.com' + photo"
                :alt="name"
                />
            <p></p>
        </div>
        <div class="right">
            <h4>{{name}}</h4>
            <div class="tag__price">
              <!--TODO dynamic -->
              <p>Bestsellers</p> 
              <p>{{price}}</p>
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
    .tag__price{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .itemPage{
        display: flex;
        justify-content: space-between;
    }
</style>