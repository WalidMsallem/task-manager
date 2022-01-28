<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "./components/Header.vue";

@Options({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat");

html,
body {
  font-family: "Montserrat", sans-serif;
}

.flex-content-center {
  display: flex;
}
.flex-space-between {
  justify-content: space-between;
}
.container {
  height: auto;
  margin-right: 15%;
  margin-left: 15%;
}
</style>
