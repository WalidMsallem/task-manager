<template>
  <div v-if="!isTextarea" class="input-group">
    <label> {{ label }} </label>
    <input
      :name="name"
      :value="value"
      @input="$emit('onInput', $event.target.value)"
      :data-cy="cyId"
    />
  </div>
  <div v-else class="input-group">
    <label> {{ label }} </label>
    <textarea
      :name="name"
      :value="value"
      @input="$emit('onInput', $event.target.value)"
      cols="30"
      rows="5"
      :data-cy="cyId"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    isTextarea: {
      type: Boolean,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    cyId: {
      type: String,
    },
  },
})
export default class InputGroup extends Vue {}
</script>

<style scoped lang="scss">
.input-group {
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  width: 100%;
  label {
    margin-bottom: 10px;
  }
  input,
  textarea {
    padding: 10px;
  }
}
</style>
