<template>
  <div class="mobile_menu">
    <h3>Категории</h3>
    <button>

    </button>
  </div>
</template>

<script>
    export default {
        name: "AsideMobileWrapper",
    }
</script>

<style lang="scss" scoped>
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
