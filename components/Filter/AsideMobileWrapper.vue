<template>
  <div class="mobile_menu">
    <h3>Категории</h3>
    <button @click="isAsideFiltersShown = !isAsideFiltersShown">

    </button>
    <div class="asideFilters" v-if="isAsideFiltersShown">
    <div class="asideWrap">
     <aside-wrapper/>
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
          return{
            isAsideFiltersShown: false,
        }
      }
    }
</script>

<style lang="scss" scoped>
.asideFilters{
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  top: 0;
  left: 0;
  z-index: 10000;

}
  .mobile_menu{
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
    button{
      width: 38px;
      height: 38px;
      background-image: url('@/assets/img/icons/filters.svg');
      background-color: inherit;
    }
  }
</style>
