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
  metaInfo: {
    title: "Unbabel",
    titleTemplate: "%s | Task manager",
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
body {
  background: #f6f7f8;
}
</style>
