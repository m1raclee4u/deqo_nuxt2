<template>
  <section>
    <!-- Slider main container -->
    <div class="swiper">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div v-for="image in images" class="swiper-slide">
          <div v-if="!$route.path.includes('collections')" class="info"
               :class="{
                topright: image?.position === 'topright',
                topleft: image?.position === 'topleft',
                bottomright: image?.position === 'bottomright',
                bottomleft: image?.position === 'bottomleft',
                }">
            <h3>{{image?.title}}</h3>
            <p>{{image?.sub_title}}</p>
            <button @click="$router.push(`${image?.link}`)" v-if="image?.link" class="button">
              {{image?.button_text}}
            </button>
          </div>
          <picture>
            <source :srcset="IH.getUrl($axios.defaults.baseURL + `/` + image.image, 1920, fm = 'webp')">
            <img
              class="slide"
              :src="IH.getUrl($axios.defaults.baseURL + `/` + image.image, 1920, fm = 'jpg')"
              alt=""
            />
          </picture>
        </div>
      </div>
    </div>
    <div class="wrapper p60">
      <div class="flex">
        <img v-if="isMainSlider" src="@/assets/img/icons/slogan.svg" alt=""/>
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
  import Swiper, {Navigation, Pagination, Autoplay} from "swiper";
  import "swiper/swiper-bundle.css";
  import ImageHelper from "~/plugins/imageHelper";

  Swiper.use([Navigation, Pagination, Autoplay]);

  export default {
    data() {
      return {
        IH: new ImageHelper(),
      }
    },
    props: {
      images: Array,
      isMainSlider: Boolean,
    },
    computed: {
      positionInfo() {
        return this.images.position
      }
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
    components: {BurgerMenu},
    name: "IndexPage",
  };
</script>

<style lang="scss" scoped>

  .flex{
    img{
      //filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 1));
    }
  }

  .swiper-wrapper {
  }

  .topright {
    position: absolute;
    top: 60px;
    right: 45px;
    text-align: right;
  }

  .topleft {
    position: absolute;
    top: 60px;
    left: 45px;
  }

  .bottomright {
    position: absolute;
    bottom: 60px;
    right: 45px;
    text-align: right;
  }

  .bottomleft {
    position: absolute;
    bottom: 60px;
    left: 45px;
  }

  .info {
    position: absolute;
    z-index: 10;
    color: white;
    width: 40%;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.33);

    h3 {
      font-size: 4vw;
      font-weight: 400;
      margin-bottom: 0.7vw !important;
    }

    p {
      font-size: 1.5vw;
      line-height: 130%;
      margin-bottom: 2vw !important;
    }

    button {
      border-color: white;
      background-color: transparent;
      max-width: 50%;
      height: 5vw;
      color: white;
      font-size: 1.5vw;
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.33);


      &:hover {
        background-color: #fff;
        color: black;
      }
    }

  }

  .flex {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 60px;
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

  @media (max-width: 1900px) {
    section {
      // margin: 0 -32px !important;
      // padding: 0 32px !important;
    }
  }

  @media (max-width: 640px) {
    .wrapper{
      height: calc(100vh - 50px);
    }
    .swiper {
      height: calc(100vh - 50px);
    }
  }

  @media screen and (orientation: portrait) {
    .info {
      padding: 0 10px;
      position: absolute;
      z-index: 10;
      color: white;
      width: 100%;
      margin: 0 auto;
      left: 0;
      right: 0;
      text-align: center !important;
      bottom: 10vw !important;

      h3 {
        font-size: 10vw;
        font-weight: 400;
        margin-bottom: 2vw !important;
      }

      p {
        font-size: 3vw;
        line-height: 130%;
        margin-bottom: 6vw !important;
      }

      button {
        border-color: white;
        background-color: transparent;
        max-width: 50%;
        height: 9vw;
        color: white;
        font-size: 3vw;


        &:hover {
          background-color: #fff;
          color: black;
        }
      }
    }
  }
</style>


