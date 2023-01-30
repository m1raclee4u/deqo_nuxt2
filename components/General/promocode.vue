<template>
    <form method="post">
        <input type="text" name="promocode" id="" placeholder="Введите промокод">    
        <button>Отправить</button>
    </form>    
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
input[type=text] {
    background-color: inherit;
    min-width: 300px;
    height: 35px;
    border-radius: 4px;
    color: #A9A1A1;
    border-bottom: 1px solid #A1A1A1;
    &::placeholder{
        color: #A9A1A1;
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

    color: #1A1A1A;
}
</style>