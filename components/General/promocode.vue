<template>
  <div class="form">
    <input type="text" name="promocode" id="" placeholder="Введите промокод" />
    <button>Отправить</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.form{
  margin-top: 70px;
}
input[type="text"] {
  background-color: inherit;
  min-width: 300px;
  height: 35px;
  border-radius: 4px;
  color: #a9a1a1;
  border-bottom: 1px solid #a1a1a1;
  &::placeholder {
    color: #a9a1a1;
    // padding-left: 20px;
  }
}
button {
  background-color: inherit;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  cursor: pointer;
  /* тёмный */

  color: #1a1a1a;
}
</style>