<template>
  <div class="categories">
    <h3>Категории</h3>
    <div class="checkboxes">
      <div
        class="form_radio_btn_categories"
        v-for="category in $store.state.catalog.categories"
        :key="category.slug"
      >
        <input
          :id="category.slug"
          name="category"
          type="checkbox"
          :value="category"
          v-model="filterCategories"
        />
        <label :for="category.slug"></label>
        <p>{{ category.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterCategories: this.$store.state.filters.filters.categories,
    };
  },
  watch: {
    filterCategories(value) {
      if (value.length > 0) {
        this.$store.dispatch("filters/setCategories", this.filterCategories);
      } else {
        this.$store.dispatch("filters/setCategories", this.filterCategories);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.checkboxes {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
.custom-checkbox + label::before {
  content: "";
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 1px;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 60% 60%;
}
.custom-checkbox:checked + label::before {
  border-color: #ec3012;
  background-color: #ec3012;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}
/* стили при наведении курсора на checkbox */
.custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
  border-color: none;
}
/* стили для активного состояния чекбокса (при нажатии на него) */
.custom-checkbox:not(:disabled):active + label::before {
  background-color: #ec3012;
  border-color: none;
}
/* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
.custom-checkbox:focus:not(:checked) + label::before {
  border-color: none;
}
/* стили для чекбокса, находящегося в состоянии disabled */
.custom-checkbox:disabled + label::before {
  background-color: #e9ecef;
}

.categories {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 320px;
  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height */

    /* основной */

    color: #685f5f;
  }
}
</style>
