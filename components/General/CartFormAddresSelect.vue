<script>
import _ from "lodash";
export default {
  data() {
    return {
      query: "",
      geos: [],
    };
  },
  methods: {
    debounceInput: _.debounce(function (e) {
      this.query = e.target.value;
      this.emitAddress(e.target.value);
      this.getGeo();
    }, 500),
    setAddress(value) {
      this.query = value;
      this.emitAddress(value)
    },
    emitAddress(value) {
      this.$emit("getAddress", value);
      console.log('child emit' + ' ' + value);
    },
    async getGeo() {
      if (this.query.length > 0) {
        this.geos = await this.$axios.$get("/site/geo", {
          params: {
            query: this.query,
          },
        });
      }
    },
  },
};
</script>

<template>
  <div class="inputAddress">
    <input
      autocomplete="none"
      type="texttext"
      name="input"
      id=""
      @input="debounceInput"
      class="button"
      v-model="query"
    />
    <div
      v-if="!geos.find((p) => p === this.query) && this.query.length > 0"
      class="selects"
    >
      <div
        @click="setAddress(geo)"
        v-for="geo in geos"
        :key="geo"
        class="select"
      >
        {{ geo }}
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.button {
  text-align: left;
  padding: 18px 20px;
  border: 1px solid #685f5f;
  border-radius: 4px;
}
.inputAddress {
  position: relative;
  width: 100%;
  max-width: 710px;
}
.selects {
  position: absolute;
  top: 60px;
  left: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  border: 1px solid lightgrey;
  border-radius: 4px;
}
.select {
  cursor: pointer;
  display: flex;
  width: 100%;
  padding: 10px 20px;
  border-bottom: 1px solid lightgrey;
  background-color: #fff;
  &:hover {
    background-color: lightgrey;
  }
}
</style>