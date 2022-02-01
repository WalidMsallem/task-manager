<template>
  <header>
    <div
      class="container flex-content-center flex-space-between header-content"
    >
      <div class="title">Transcriptions</div>
      <div>
        <CustomIconButton
          iconSrc="./icons/upload.svg"
          @click="uploadItems"
          cyId="upload-data"
        />

        <CustomIconButton
          iconSrc="./icons/fetch-document.svg"
          @click="fetchItems"
          cyId="fetch-data"
        />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CustomIconButton from "./shared/CustomIconButton.vue";
import { mapActions } from "vuex";

@Options({
  components: {
    CustomIconButton,
  },
  methods: {
    ...mapActions(["fetchItems", "uploadItems"]),
  },
})
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
header {
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
}
.header-content {
  height: 100%;
  align-items: center;
}
.title {
  font-weight: 500;
  font-size: 18px;
  color: #414c5e;
}
</style>
