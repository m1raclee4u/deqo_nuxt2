<script>
export default {
  data() {
    return {
      selectedGeo: "",
      query: "",
      geos: [],
      CancelToken: this.$axios.CancelToken,
    };
  },
  methods: {
    async getGeo() {
      let source = this.CancelToken.source();
      if (this.query != 0) {
        this.geos = await this.$axios.$get(
          "/site/geo",
          {
            params: {
              query: this.query,
            },
          },
          {
            cancelToken: source.token,
          }
        );
        this.geos = await this.$axios.$get(
          "/site/geo",
          {
            params: {
              query: this.query,
            },
          },
          {
            cancelToken: source.token,
          }
        );
        source.cancel("Operation canceled by the user.");
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
      @input="getGeo"
      class="button"
      v-model="query"
    />
    <div v-if="!geos.find((p) => p === this.query)" class="selects">
      <div @click="query = geo" v-for="geo in geos" :key="geo" class="select">
        {{ geo }}
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
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