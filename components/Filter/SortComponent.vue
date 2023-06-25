<template>
  <div class="sort-input">
    <p>Сортировать по</p>
    <el-select id="inputSort" v-model="value" placeholder="Select">
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
      margin-right: 6px !important;
      font-size: 16px;
    }
  }

  select {
    font-weight: 600;
  }

  @media (max-width: 640px) {
    .sort-input {
      line-height: 40px;

      p {
        font-size: 14px;
      }
    }

  }
</style>
