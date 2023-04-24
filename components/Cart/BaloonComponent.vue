<template>
  <div class="balloon">
    <h1 class="red">{{pvz.name}}</h1>
    <h1 class="red">{{pvz.note}}</h1>
    <p>{{pvz.work_time}}</p>
    <img :src="pvz.office_image_list[pvz.office_image_list.length-1].url">
    <button id="btn" @click="handler">Выбрать</button>
  </div>
</template>

<script>
    export default {
      name: "balloon",
      props: {
          pvz: Object,
      },
      methods: {
        bindListener() {
          document.getElementById('btn').addEventListener('click', this.handler);
        },
        unbindListener() {
          document.getElementById('btn').removeEventListener('click', this.handler);
        },
        handler() {
          console.log('Whoo-Ha!');
        },
      },
      mounted() {
        // setTimeout()
      }
    }

</script>

<style lang="scss" scoped>
.balloon{
  max-width: 300px;
  width: 100%;
  height: 50%;
  img{
    width: 100%;
    height: auto;
  }
}
</style>
