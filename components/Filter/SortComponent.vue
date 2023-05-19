<template>
  <div class="sort-input">
    <p>Сортировть по</p>
    <el-select v-model="value" placeholder="Select">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>

</template>

<script>
  export default {
    name: "SortComponent",
    data() {
      return {
        options: [{
          value: 'цене (по возрастанию)',
          label: 'цене (по возрастанию) '
        }, {
          value: 'цене (по убыванию)',
          label: 'цене (по убыванию) '
        }, {
          value: 'популярности',
          label: 'популярности '
        }
        ],
        value: 'цене (по возрастанию)'
      }
    }
  }
</script>

<style lang="scss" scoped>

  .sort-input {
    display: flex;
    align-items: center;
    height: 40px;

    p {
      /*width: 100%;*/
      font-size: 16px;
    }
  }

  select {
    font-weight: 600;
  }
</style>
