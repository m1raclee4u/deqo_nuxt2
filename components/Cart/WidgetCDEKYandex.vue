<template>
  <yandex-map @map-was-initialized="initCart" @show-all-markers=true
              style="height: 600px"
              :coords="computedCoords">
    <ymap-marker v-for="pvz in pvzs" :key="pvz.markerId"
                 :markerId="pvz.code"
                 :icon="markerIcon"
                 :coords="[pvz.location.latitude, pvz.location.longitude]"
                 @balloonopen="bindListener"
                 @balloonclose="unbindListener"
    >
      <balloon-component slot="balloon" :pvz="pvz"></balloon-component>
    </ymap-marker>
  </yandex-map>
</template>

<script>
  import BalloonComponent from "~/components/Cart/BaloonComponent.vue"


  export default {
    components: {BalloonComponent},
    props: {
      deliveryType: String
    },
    watch: {
      deliveryType(value) {
        if (value !== 'delivery' && this.inputCheckedCounter === 0) {
          this.getCoords();
          this.inputCheckedCounter++
          this.$emit('showPopUpRecipientsCityHandler')
        } else if (value !== 'delivery') {
          this.CDEKGetByType(this.recipientsСity)
        }
      },
    },
    name: "WidgetCDEKYandex",
    data() {
      return {
        markerIcon: {
          layout: 'default#imageWithContent',
          imageHref: 'https://sun6-23.userapi.com/s/v1/ig1/AIyk6IlsyuYDUpfgDIXzYRjO75w-N3p7AzkBHd4oMDhtrJPThE0FFOQwdHNMeR856Sf6Qzs3.jpg?size=1335x1338&quality=96&crop=2,0,1335,1338&ava=1',
          imageSize: [40, 40],
          imageOffset: [0, 0],
          contentOffset: [0, 15],
        },
        inputCheckedCounter: 0,
        yandexMaps: null,
        recipientsCity: null,
        zoom: 1, // начальный уровень масштабирования
        pvzs: '',
        coords: [55.7522, 37.6156]
      }
    },
    computed: {
      computedCoords() {
        return [this.coords[0], this.coords[1]]
      }
    },
    methods: {
      getCoords() {
        const userIP = async () => {
          const response = await fetch('https://api.ipify.org?format=json');
          const data = await response.json();
          return data.ip;
        }
        const userLocation = async (ip) => {
          const response = await fetch(`https://ipwho.is/${ip}`);
          const data = await response.json();
          return data;
        }
        userIP().then(ip => userLocation(ip).then(data => this.setRecipientsCity(data)))
      },
      setRecipientsCity(data) {
        this.recipientsСity = data
        this.CDEKGetByType(data)
      },
      async CDEKGetByType(data) {
        let PVZ = await this.$axios.$get('site/cdek/get-by-type', {
          params: {
            postal_code: data.postal,
            type: this.deliveryType
          }
        })
        this.pvzs = PVZ
        this.setCoords(data)
      },
      setCoords(data) {
        this.coords[0] = data.latitude
        this.coords[1] = data.longitude
        this.yandexMaps.setCenter(this.coords, 12, {checkZoomRange: true})
      },
      initCart(ymaps) {
        this.yandexMaps = ymaps;
        ymaps.controls.remove('searchControl');
        ymaps.controls.remove('trafficControl');
      },
      bindListener() {
        document.getElementById('btn').addEventListener('click', this.handler);
      },
      unbindListener() {
        document.getElementById('btn').removeEventListener('click', this.handler);
      },
      handler() {
        console.log(this.pvz);
        console.log(this.$emit('123', this.pvz))
      },
    },
  }
</script>

<style scoped>

</style>
