<template>
  <div class="help">
    <span>Возникли вопросы или нужна помощь — свяжитесь с нами:</span>
    <buttons-social />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.help {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 270px;
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    text-align: right;
    color: #a9a1a1;
  }
}
</style>