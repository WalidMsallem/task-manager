
<template>
  <button>
    <img :src="iconSrc" alt="icon" />
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    iconSrc: {
      type: String,
    },
    click: {
      type: Function,
    },
  },
})
export default class CustomIconButton extends Vue {}
</script>

<style scoped lang="scss">
button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  margin: 0 10px;
}
</style>
