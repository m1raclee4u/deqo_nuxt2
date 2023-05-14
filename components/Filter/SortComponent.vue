<template>
  <div class="sort-input">
    <p>Сортировть по</p>
    <select>
      <!--      <option disabled value="">Сортировать</option>-->
      <option>новизне</option>
      <option>цене (по возрастанию)</option>
      <option>цене (по убыванию)</option>
    </select>
  </div>

</template>

<script>
  export default {
    name: "SortComponent",
    data() {
      return {
        selected: 'По популярности'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sort-input {
    display: flex;
    align-items: center;
    p{
      width: 100%;
    }
  }

  select {
    font-weight: 600;
  }
</style>
