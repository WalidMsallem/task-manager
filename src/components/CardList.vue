<template>
  <div class="container items-list" data-cy="tasks-list-container">
    <div v-show="getOrUploadloading">
      <div class="spinner-mask"></div>
      <div class="spinner"></div>
    </div>

    <Card
      v-for="item in allItems"
      :key="String(item.id)"
      :description="item.text"
      :title="item.voice"
      :id="item.id"
    />
    <div v-if="allItems.length !== 0" data-cy="create-task-section">
      <Card v-if="isOpenAddCard" isCreateMode :toggleAddCard="toggleAddCard" />
      <div v-else class="add-item">
        <CustomIconButton
          iconSrc="icons/add-row.svg"
          @click="toggleAddCard"
          cyId="open-add-item-form"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Card from "@/components/shared/Card.vue";
import Header from "@/components/Header.vue";
import CustomIconButton from "./shared/CustomIconButton.vue";
import { mapGetters, mapActions } from "vuex";

@Options({
  components: {
    Header,
    Card,
    CustomIconButton,
  },
  computed: {
    ...mapGetters(["allItems", "getOrUploadloading"]),
    console: () => console,
  },
  methods: {
    ...mapActions(["addItem"]),
    toggleAddCard() {
      this.isOpenAddCard = !this.isOpenAddCard;
    },
  },
  data() {
    return {
      isOpenAddCard: false,
    };
  },
})
export default class CardList extends Vue {}
</script>

<style scoped lang="scss">
.add-item {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  position: relative;
  img {
    cursor: pointer;
  }
}
.items-list {
  margin-top: 30px;
}
.spinner-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
}
.spinner {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 60px;
  width: 60px;
  margin: 0px auto;
  -webkit-animation: rotation 0.6s infinite linear;
  -moz-animation: rotation 0.6s infinite linear;
  -o-animation: rotation 0.6s infinite linear;
  animation: rotation 0.6s infinite linear;
  border-left: 6px solid rgba(0, 174, 239, 0.15);
  border-right: 6px solid rgba(0, 174, 239, 0.15);
  border-bottom: 6px solid rgba(0, 174, 239, 0.15);
  border-top: 6px solid rgba(0, 174, 239, 0.8);
  border-radius: 100%;
}

@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
}
@-moz-keyframes rotation {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(359deg);
  }
}
@-o-keyframes rotation {
  from {
    -o-transform: rotate(0deg);
  }
  to {
    -o-transform: rotate(359deg);
  }
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
