<template>
  <div class="showPopUpRecipientsCity">
    <div class="bg" @click="$emit('showPopUpRecipientsCityHandler')"></div>

    <div class="containerPopUp">
      <div class="wrapperPopUp">
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
    gap: 15px;
    max-width: 600px;
    margin: 0 auto;
    height: 100%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
      font-size: 25px;
    }
    h5{
      font-size: 30px;
    }
    .submit{
      width: 80%;
      border-radius: 4px;
      height: 50px;
      color: white;
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
    max-width: 600px;
    width: 100%;
    height: 300px;
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
