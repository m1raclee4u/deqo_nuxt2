<template>
  <yandex-map @map-was-initialized="initCart" @show-all-markers=true
              style="height: 600px"
              :coords="computedCoords">
    <ymap-marker v-for="pvz in pvzs" :key="pvz.markerId"
                 :markerId="pvz.markerId"
                 :coords="pvz.coords"
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
        if (value !== 'delivery')
          this.getCoords()
          console.log('watch')
      }
    },
    name: "WidgetCDEKYandex",
    data() {
      return {
        yandexMaps: null,
        locationInfo: null,
        zoom: 1, // начальный уровень масштабирования
        pvzs: [
          {
            "code": "VRN17",
            "name": "пр-т Патриотов",
            "address_comment": "От остановки «Памятник Танкистам» 30 метров в сторону ул. Героев Сибиряков",
            "nearest_station": "Памятник Танкистам",
            "work_time": "Пн-Пт 10:00-20:00, Сб-Вс 10:00-18:00",
            "phones": [
              {
                "number": "+79002603014"
              }
            ],
            "email": "csu@cdek.ru",
            "note": "От остановки «Памятник Танкистам» 30 метров в сторону ул. Героев Сибиряков",
            "type": "PVZ",
            "owner_code": "CDEK",
            "take_only": false,
            "is_handout": true,
            "is_reception": true,
            "is_dressing_room": true,
            "have_cashless": true,
            "have_cash": true,
            "allowed_cod": true,
            "office_image_list": [
              {
                "url": "https://pvzimage.cdek.ru/images/4570/7909_image"
              },
              {
                "url": "https://pvzimage.cdek.ru/images/4570/7911_image"
              },
              {
                "url": "https://pvzimage.cdek.ru/images/4570/7913_image"
              },
              {
                "url": "https://pvzimage.cdek.ru/images/4570/7915_image"
              },
              {
                "url": "https://pvzimage.cdek.ru/images/4570/7907_image"
              }
            ],
            "work_time_list": [
              {
                "day": 1,
                "time": "10:00/20:00"
              },
              {
                "day": 2,
                "time": "10:00/20:00"
              },
              {
                "day": 3,
                "time": "10:00/20:00"
              },
              {
                "day": 4,
                "time": "10:00/20:00"
              },
              {
                "day": 5,
                "time": "10:00/20:00"
              },
              {
                "day": 6,
                "time": "10:00/18:00"
              },
              {
                "day": 7,
                "time": "10:00/18:00"
              }
            ],
            "weight_min": 0.0,
            "weight_max": 100.0,
            "location": {
              "country_code": "RU",
              "region_code": 63,
              "region": "Воронежская область",
              "city_code": 506,
              "city": "Воронеж",
              "fias_guid": "5bf5ddff-6353-4a3d-80c4-6fb27f00c6c1",
              "postal_code": "394065",
              "longitude": 39.126453,
              "latitude": 51.64691,
              "address": "пр-т Патриотов, 26",
              "address_full": "394065, Россия, Воронежская область, Воронеж, пр-т Патриотов, 26"
            },
            "fulfillment": false,
            markerId: 'VRN17',
            markerType: 'Polyline',
            coords: [51.64691, 39.126453],
          },
          {
            "code": "VRN4",
            "name": "На Генерала Лизюкова",
            "address_comment": "ТЦ «Калинка»",
            "nearest_station": "Остановка Кинотеатр «Мир»",
            "work_time": "Пн-Пт 09:00-20:00, Сб-Вс 10:00-18:00",
            "phones": [
              {
                "number": "+79002955350"
              }
            ],
            "email": "csu@cdek.ru",
            "note": "ТЦ «Калинка»",
            "type": "PVZ",
            "owner_code": "CDEK",
            "take_only": false,
            "is_handout": true,
            "is_reception": true,
            "is_dressing_room": true,
            "have_cashless": true,
            "have_cash": true,
            "allowed_cod": true,
            "site": "https://www.cdek.ru/contacts/voronezh_ul_generala_lizyukova_17a-tc_kalinka.html",
            "office_image_list": [
              {
                "url": "https://pvzimage.cdek.ru/images/1255/40798_image"
              },
              {
                "url": "https://pvzimage.cdek.ru/images/1255/40797_image"
              },
              {
                "url": "https://pvzimage.cdek.ru/images/1255/40794_image"
              }
            ],
            "work_time_list": [
              {
                "day": 1,
                "time": "09:00/20:00"
              },
              {
                "day": 2,
                "time": "09:00/20:00"
              },
              {
                "day": 3,
                "time": "09:00/20:00"
              },
              {
                "day": 4,
                "time": "09:00/20:00"
              },
              {
                "day": 5,
                "time": "09:00/20:00"
              },
              {
                "day": 6,
                "time": "10:00/18:00"
              },
              {
                "day": 7,
                "time": "10:00/18:00"
              }
            ],
            "weight_min": 0.0,
            "weight_max": 100.0,
            "location": {
              "country_code": "RU",
              "region_code": 63,
              "region": "Воронежская область",
              "city_code": 506,
              "city": "Воронеж",
              "fias_guid": "5bf5ddff-6353-4a3d-80c4-6fb27f00c6c1",
              "postal_code": "394053",
              "longitude": 39.176743,
              "latitude": 51.706364,
              "address": "ул. Генерала Лизюкова, 17а",
              "address_full": "394053, Россия, Воронежская область, Воронеж, ул. Генерала Лизюкова, 17а"
            },
            "fulfillment": false,
            markerId: 'VRN4',
            markerType: 'Polyline',
            coords: [51.706364, 39.176743],
          },
          {
            "code": "VRN6",
            name: "На Ворошилова",
            "address_comment": "На перекрестке ул. Ворошилова и ул. Домостроителей. Вход со стороны проезжей части.",
            "nearest_station": "Военных строителей",
            "work_time": "Пн-Пт 09:00-20:00, Сб-Вс 10:00-18:00",
            "phones": [
              {
                "number": "+74733004083"
              }
            ],
            "email": "s.bogma@cdek.ru",
            "note": "На перекрестке ул. Ворошилова и ул. Домостроителей. Вход со стороны проезжей части.",
            "type": "PVZ",
            "owner_code": "CDEK",
            "take_only": false,
            "is_handout": true,
            "is_reception": true,
            "is_dressing_room": true,
            "have_cashless": true,
            "have_cash": true,
            "allowed_cod": true,
            "office_image_list": [
              {
                "url": "https://pvzimage.cdek.ru/images/1485/580_2_VRN6"
              },
              {
                "url": "https://pvzimage.cdek.ru/images/1485/584_4_VRN6"
              },
              {
                "url": "https://pvzimage.cdek.ru/images/1485/579_1_VRN6"
              },
              {
                "url": "https://pvzimage.cdek.ru/images/1485/581_3_VRN6"
              }
            ],
            "work_time_list": [
              {
                "day": 1,
                "time": "09:00/20:00"
              },
              {
                "day": 2,
                "time": "09:00/20:00"
              },
              {
                "day": 3,
                "time": "09:00/20:00"
              },
              {
                "day": 4,
                "time": "09:00/20:00"
              },
              {
                "day": 5,
                "time": "09:00/20:00"
              },
              {
                "day": 6,
                "time": "10:00/18:00"
              },
              {
                "day": 7,
                "time": "10:00/18:00"
              }
            ],
            "weight_min": 0.0,
            "weight_max": 100.0,
            "location": {
              "country_code": "RU",
              "region_code": 63,
              "region": "Воронежская область",
              "city_code": 506,
              "city": "Воронеж",
              "fias_guid": "5bf5ddff-6353-4a3d-80c4-6fb27f00c6c1",
              "postal_code": "394000",
              "longitude": 39.156467,
              "latitude": 51.64696,
              "address": "ул. Ворошилова, 49а",
              "address_full": "394000, Россия, Воронежская область, Воронеж, ул. Ворошилова, 49а"
            },
            "fulfillment": false,
            markerId: 'VRN6',
            markerType: 'Polyline',
            coords: [51.64696, 39.15646],
          },
        ],
        coords: [55.7522, 37.6156]
      }
    },
    computed: {
      balloonTemplate(pvz) {
        return `
        <h1 class="red">{{pvz.name}}</h1>
        <h1 class="red">pvz.name</h1>
        <h1 class="red">{{pvz.note}}</h1>
        <p>{{pvz.work_time}}</p>
        <img :src="pvz.office_image_list[0]">
      `
      },
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
          const response = await fetch(`http://ipwho.is/${ip}`);
          const data = await response.json();
          return data;
        }
        userIP().then(ip => userLocation(ip).then(data => this.setCoords(data)))

      },
      setCoords(data) {
        this.coords[0] = data.latitude
        this.coords[1] = data.longitude
        this.yandexMaps.setCenter(this.coords, 12, {checkZoomRange: true})
      },
      initCart(ymaps) {
        this.yandexMaps = ymaps;
      },
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
  }
</script>

<style scoped>

</style>
