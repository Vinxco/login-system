<template>
  <div class="form__section">
    <input
      v-model="value"
      @change="$emit('input', value)"
      :type="type"
      :id="type"
    />
    <label :for="type">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "InputSection",
  props: {
    type: {
      type: String,
      default: ""
    },
    label: String,
    value: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
input {
  border: none;
  border-bottom: 1px solid grey;
  margin-bottom: 1rem;
  width: 100%;
  font-size: 1.5rem;
}
label {
  position: absolute;
  transition: all 0.3s ease;
  left: 0;
  top: 0;
}
.form__section {
  display: block;
  position: relative;
  margin-bottom: 1rem;
}
input:focus ~ label,
.form__section.filled > label {
  top: -1rem;
  left: 0;
  transform: scale(0.7);
}
input:focus {
  outline: none;
}
</style>
