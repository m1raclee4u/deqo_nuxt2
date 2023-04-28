<template>
  <div class="showPopUpRecipientsCity">
    <div class="bg" @click="$emit('showPopUpRecipientsCityHandler')"></div>

    <div class="containerPopUp">
      <div class="wrapperPopUp">
        <i class="close" @click="$emit('showPopUpRecipientsCityHandler')"></i>
        <p>Ваш город</p>
        <h5>{{'Воронеж'}}</h5>
        <button @click="$emit('showPopUpRecipientsCityHandler')" class="submit">Все верно</button>
        <button @click="$emit('openDaDataAddress')" class="change">Выбрать другой регион</button>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "PopUpRecipientsCity"
  }
</script>

<style lang="scss" scoped>
  .showPopUpRecipientsCity {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;

    .bg {
      z-index: 80;
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  .wrapperPopUp {
    position: relative;
    gap: 20px;
    margin: 0 auto;
    height: 100%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .close{
      width: 25px;
      height: 25px;
      cursor: pointer;
      background-image: url('@/assets/img/icons/deleteCartItem.svg');
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      top: 25px;
      right: 25px;
    }
    p{
      font-size: 25px;
    }
    h5{
      font-size: 30px;
    }
    .submit{
      max-width: 600px;
      width: 80%;
      border-radius: 10px;
      height: 70px;
      color: white;
      font-size: 20px;
      font-weight: 400;
      background-color: green;
    }
    .change{
      text-decoration: underline;
      color: green;
      background-color: inherit;
    }
  }

  .containerPopUp {
    position: absolute;
    max-width: 900px;
    width: 100%;
    height: 450px;
    background-color: white;
    border-radius: 4px;
    z-index: 90;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>
