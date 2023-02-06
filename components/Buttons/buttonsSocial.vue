<template>
  <div class="buttons_help">
    <a
      href="https://t.me/whodatandrey"
      target="_blank"
      :class="{ button_footer: footer === 'footer' }"
      class="telegram"
    ></a>
    <a
      href="https://vk.com/"
      target="_blank"
      :class="{ button_footer: footer === 'footer' }"
      class="vk"
    ></a>
  </div>
</template>

<script>
export default {
  props: {
    footer: {
      type: String,
    },
  },
  data() {
    return {
      location: this.footer,
    };
  },
};
</script>

<style lang="scss" scoped>
.button_footer {
  width: 40px !important;
  height: 40px !important;
}
.buttons_help {
  display: flex;
  justify-content: end;
  gap: 20px;
}
.telegram {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
  background-color: inherit;
  background-size: cover;
  background-image: url("../../assets/img/icons/aside-help/telegram.svg");
  &:hover {
    background-image: url("../../assets/img/icons/aside-help/telegram_on.svg");
  }
}
.vk {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
  background-color: inherit;
  background-size: cover;
  background-image: url("../../assets/img/icons/aside-help/vk.svg");
  &:hover {
    background-image: url("../../assets/img/icons/aside-help/vk_on.svg");
  }
}
</style>