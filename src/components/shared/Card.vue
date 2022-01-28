<template>
  <div v-if="!isCreateMode" class="card-container">
    <div class="pre-bloc">
      <input type="checkbox" id="scales" name="scales" checked />
      <img src="icons/person-1.png" alt="delete-icon" />
    </div>
    <div class="content">
      <div class="title" @click="openEditTitle">
        <span v-if="!editTitle">{{ title }}</span>
        <input v-else v-model="editedTitle" @blur="onBlurEditTitle" />
        <!-- {{ title }} -->
      </div>
      <div class="description">{{ description }}</div>
    </div>
    <div class="actions">
      <img src="icons/delete.svg" alt="delete-icon" @click="onDelete" />
    </div>
  </div>
  <div v-else class="card-container">
    <div class="create-mode">
      <InputGroup
        label="Voice name"
        :value="titleInput"
        @onInput="(value) => (titleInput = value)"
        name="voice-name"
      />
      <InputGroup
        isTextarea
        label="Description"
        :value="descriptionInput"
        @onInput="(value) => (descriptionInput = value)"
        name="description"
      />
      <div v-if="error && isCreateMode" class="error">
        {{ error }}
      </div>
      <button @click="onAddItem">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import InputGroup from "./InputGroup.vue";
import { mapActions } from "vuex";

@Options({
  components: {
    InputGroup,
  },
  props: {
    isCreateMode: { type: Boolean },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    toggleAddCard: {
      type: Function,
    },
    id: {
      type: Number,
    },
  },
  computed: {
    console: () => console,
  },
  methods: {
    ...mapActions(["addItem", "editItem", "deleteItem"]),
    onAddItem() {
      this.error = "";
      if (this.titleInput.length === 0 || this.descriptionInput.length === 0) {
        this.error = "All field must be required";
      } else {
        this.addItem({
          voice: this.titleInput,
          text: this.descriptionInput,
        });
        this.titleInput = "";
        this.descriptionInput = "";
        this.toggleAddCard();
      }
    },
    openEditTitle() {
      this.editTitle = true;
    },
    onBlurEditTitle() {
      this.editItem({
        id: this.id,
        voice: this.editedTitle,
        text: this.description,
      });
      this.editTitle = false;
    },
    onDelete() {
      this.deleteItem(this.id);
    },
  },
  data() {
    return {
      titleInput: "",
      descriptionInput: "",
      error: "",
      editTitle: false,
      editedTitle: this.title,
    };
  },
})
export default class Card extends Vue {}
</script>

<style scoped lang="scss">
.card-container {
  margin: 5px 0;
  padding: 30px 15px;
  width: 100%;
  background: white;
  min-height: 40px;
  display: flex;
}
.create-mode {
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  button {
    background: none;
    color: inherit;
    border: unset;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    margin: 5px 10px;
    width: 120px;
    padding: 10px;
    background: wheat;
  }
}
.content {
  flex: 10;

  .title {
    font-size: 16px;
    font-weight: 500;
    color: #566074;
    margin-bottom: 10px;
  }
}
.pre-bloc {
  display: flex;
  flex: 0.5;
  justify-content: space-between;
  margin-right: 15px;
  img {
    height: 25px;
    margin-left: 20px;
  }
}
.actions {
  flex: 0.5;
  img {
    cursor: pointer;
  }
}
.error {
  color: red;
  width: 100%;
  margin: 5px;
}
</style>
