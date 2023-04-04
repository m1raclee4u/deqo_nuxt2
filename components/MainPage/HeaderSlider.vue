<template>
  <section>
    <!-- Slider main container -->
    <div class="swiper">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">
          <img
            class="slide"
            :src="require('@/assets/img/back.jpg')"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img class="slide" src="@/assets/img/back2.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img class="slide" src="@/assets/img/back3.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="wrapper p60">
      <div class="flex">
        <img src="@/assets/img/icons/slogan.svg" alt="" />
        <!-- <main>
          <div class="assortment">
            <Nuxt-Link class="todo" to="/">Мужчинам</Nuxt-Link>
            <Nuxt-Link class="todo" to="/">Женщинам</Nuxt-Link>
            <Nuxt-Link class="todo" to="/">Детям</Nuxt-Link>
            <Nuxt-Link class="todo" to="/">Аксессуары</Nuxt-Link>
          </div>
          <div class="sale">
            <Nuxt-Link class="todo" to="/">Распродажа</Nuxt-Link>
          </div>      
        </main>
        <footer>
          <div class="text">
            <h1>Co-ed collection<br><span><i>spring-summer</i></span></h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio excepturi quis nihil quasi fugit dicta odit iusto nemo quos est voluptatem,
              ducimus minima explicabo, nam animi necessitatibus beatae velit voluptate rem. Sed perspiciatis et vero, ex iusto odio odit accusamus molestias eum,
              quam maxime ad consequuntur nihil nam possimus asperiores!
              </p>
            <div class="swiper-pagination"></div>  
          </div>         
        </footer>   -->
      </div>
    </div>
  </section>
</template>

<script>
import BurgerMenu from "../General/BurgerMenu.vue";
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

Swiper.use([Navigation, Pagination, Autoplay]);

export default {
  props: {
    photo_1: "",
    photo_2: "",
    photo_3: "",
  },
  mounted() {
    new Swiper(".swiper", {
      slidesPerView: 1,
      autoplay: {
        delay: 10000,
      },
      speed: 4000,
      allowTouchMove: false,
      pagination: {
        clickable: true,
        el: ".swiper-pagination",
        // type: 'bullets',
        modifierClass: ".swiper-pagination-header ",
      },
    });
  },
  components: { BurgerMenu },
  name: "IndexPage",
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 100px;
}

.swiper-pagination {
  display: flex;
  gap: 20px;
  right: 0 + 60px;
  position: absolute;
  align-self: flex-end;
}

section {
  padding: 0 !important;
  // width: 100vw !important;
  margin: 0 !important;
  // overflow-x: hidden;
}
.swiper {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
section {
  img.slide {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100vh;
    z-index: 1;
  }
}
.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  img {
    width: 100%;
    height: auto;
    z-index: 1;
  }

  // background-color: orange;
}
main {
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 80px;
}
.assortment {
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 35px;
  a {
    font-size: 15px;
    text-decoration: none;
    color: white;
    width: 110px;
  }
}

footer {
  z-index: 1;
  color: white;
}
.text {
  display: flex;
  gap: 10%;
  padding-bottom: 100px;
  h1 {
    // font-size: 106px;
    font-size: 6.35vw;
    color: white;
  }
  span {
    i {
      color: white;
    }
  }
  p {
    color: white;
    margin-top: 50px;
    width: 33%;
    font-size: 14px;
  }
}
.sale {
  z-index: 1;
  a {
    font-size: 15px;
    z-index: 1;
    color: #fff;
    text-decoration: none;
  }
}

@media (max-width:1900px) {
  section{
    // margin: 0 -32px !important;
    // padding: 0 32px !important;
  } 

}
</style>


