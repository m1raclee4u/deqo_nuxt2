<template>
  <div class="filter">
    <h3>Цена</h3>
    <div class="customRow">
      <p>От {{ value[0] }} ₽ до {{ value[1] }} ₽</p>
    </div>
    <el-slider
      class="filterRange"
      range
      range-start-label="min"
      range-end-label="max"
      show-stops
      :show-tooltip="false"
      :step="100"
      @change="addPrice"
      v-model="value"
      :min="min"
      :max="max"
    >
    </el-slider>
  </div>
</template>

<script>
export default {
  props: {
    products: Array,
  },
  data() {
    return {
      value: [0, 100],
    };
  },
  computed: {
    max() {
      return Math.max(...this.products.map((o) => o.price));
    },
    min() {
      return Math.min(...this.products.map((o) => o.price));
    },
  },
  mounted() {
    setTimeout(() => {
      this.addPrice()
    }, 1000);
  },
  methods: {
    addPrice() {
      this.$emit("filterPrice", this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.filterRange {
  width: 95%;
  margin: 0 auto;
}
.el-slider__runway {
  color: white !important;
}
button {
  font-size: 11px;
  font-weight: bold;
  width: 100px;
  height: 35px;
  text-transform: uppercase;
}
.customRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
}
.filter {
  display: flex;
  flex-direction: column;
  gap: 20px;
  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height */

    /* основной */

    color: #685f5f;
    margin-bottom: 20px;
  }
  P {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    /* средний */

    color: #a9a1a1;
    span {
      font-weight: 600;
    }
  }
  input[type="range"] {
    width: 100%;
  }
}
</style>