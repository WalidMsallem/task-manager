<template>
  <CardList />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CardList from "@/components/CardList.vue";

@Options({
  components: {
    CardList,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
body {
  background: #f6f7f8;
}
</style>
