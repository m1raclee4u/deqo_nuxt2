<script>
  export default {
    props: {
      colors: {}
    }
  }
</script>

<template>
  <div class="productColors">
    <div class="colors">
      <NuxtLink class="color"
           v-for="color in colors"
           :key="color.id"
           :style="{backgroundColor: color.value}"
           @click="$router"
                :to="`/products/${color.slug}`"
      >
      </NuxtLink>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .colors {
    display: flex;
    align-items: center;
    gap: 18px;

    .color {
      border-radius: 50%;
      width: 30px;
      height: 30px;
    }
  }

  .highlightedColorClass {
    // border: 2px solid #BD270F !important;
    // background-color: #BC716E !important;
    opacity: 0.5;
    background-image: url("../../assets/img/icons/colorNotChecked.svg");
    background-position: center;
    background-size: 10px 10px;
    background-repeat: no-repeat;
    box-sizing: border-box;
  }
</style>
