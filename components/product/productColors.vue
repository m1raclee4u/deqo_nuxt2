<script>
export default {
  props: {
    colors: {}
  },
  data() {
    return {
      colorName: ''
    }
  }
}
</script>

<template>
  <div class="productColors">
    <div class="colors">
      <div class="color" v-for="color in colors" :key="color.id">
        <NuxtLink @click="$router" :to="`/products/${color.slug}`"
          :class="{ borderForWhite: color.name === 'Белый', checked: color.checked }" class="icon"
          :style="{ backgroundColor: color.value }">
        </NuxtLink>
      </div>      
    </div>
  </div>
</template>


<style lang="scss" scoped>
.borderForWhite {
  box-shadow: inset 0 0 0 1px lightgrey;
}

.colors {
  display: flex;
  align-items: center;
  gap: 18px;
  position: relative;

  .color {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-sizing: border-box;

    .icon {
      border-radius: 50%;
      width: 30px;
      height: 30px;

      &:hover {
        width: 40px !important;
        height: 40px !important;
        border: 1px solid black;
        box-shadow: inset 0 0 0 4px white;
      }
    }


  }


}

.checked {
  width: 40px !important;
  height: 40px !important;
  border: 1px solid black;
  box-shadow: inset 0 0 0 4px white;
}

.highlightedColorClass {
  // border: 2px solid #BD270F !important;
  // background-color: #BC716E !important;
  opacity: 0.5;
  background-image: url("@/assets/img/icons/colorNotChecked.svg");
  background-position: center;
  background-size: 10px 10px;
  background-repeat: no-repeat;
  box-sizing: border-box;
}
</style>
