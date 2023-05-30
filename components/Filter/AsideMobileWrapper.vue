<template>
  <div class="mobile_menu">
    <h3>Категории</h3>
    <button @click="isAsideFiltersShown = !isAsideFiltersShown"></button>
    <div class="asideFilters" v-if="isAsideFiltersShown">
      <div class="asideWrap">
        <aside-wrapper/>
        <i @click="isAsideFiltersShown = !isAsideFiltersShown" class="close"></i>
      </div>
      <div @click="isAsideFiltersShown = !isAsideFiltersShown" class="aside_back">
      </div>
    </div>
  </div>
</template>

<script>
  import AsideWrapper from "~/components/Filter/AsideWrapper";

  export default {
    name: "AsideMobileWrapper",
    components: {AsideWrapper},
    data() {
      return {
        isAsideFiltersShown: false,
      }
    },
  }
</script>

<style lang="scss" scoped>

  .asideWrap{
    padding: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: #fff;
    z-index: 9960;
    position: relative;
  }

  .asideFilters {
    position: fixed;
    /*width: 100vw;*/
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 10000;
    .aside_back{
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      opacity: 0;
      cursor: pointer;
      z-index: 9950;
    }
  }

  .close{
    width: 20px;
    height: 20px;
    cursor: pointer;
    background-image: url('@/assets/img/icons/deleteCartItem.svg');
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 35px;
    right: 35px;
  }

  .mobile_menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    h3 {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      /* identical to box height */

      /* основной */

      color: #685f5f;
    }

    button {
      width: 38px;
      height: 38px;
      background-image: url('@/assets/img/icons/filters.svg');
      background-color: inherit;
    }
  }
</style>
