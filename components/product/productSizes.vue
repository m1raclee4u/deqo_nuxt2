<script>
export default {
  props: {
    sizes: {},
    highlightedSize: Boolean,
  },
  data() {
    return {
      checkedSize: "",
    };
  },
  methods: {
    checkSize(size) {
      this.checkedSize = size;
      this.$emit('checkedSizeHandler', size)
    },
  },
};
</script>

<template>
  <div class="productSizes">
    <div class="sizes">
      <div
        class="size"
        v-for="size in sizes"
        :key="size.id"
        @click="checkSize(size)"
        :class="{ checkedSize: checkedSize === size, highlightedSizeClass: highlightedSize }"
      >
        {{ size.name }}
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.highlightedSizeClass{
  box-sizing: border-box;
  border: 2px solid #bd270f !important;
  color: #bd270f !important;
}
.checkedSize {
  color: white !important;
  background-color: #a9a1a1;
}
.sizes {
  display: flex;
  align-items: center;
  gap: 10px;

  .size {
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: -0.02em;
    width: 38px;
    height: 38px;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    line-height: 35px;
    color: #a9a1a1;
    border: 2px solid #a9a1a1;
    border-radius: 4px;
    user-select: none;
    transition: 0.3s all;
    &:hover {
      color: white;
      background-color: #a9a1a1;
    }
  }
}

.highlightedSizeClass {
  box-sizing: border-box;
  border: 2px solid #bd270f !important;
  color: #bd270f !important;
}
</style>
