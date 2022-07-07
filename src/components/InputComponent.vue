<template>
  <div class="Input">
    <input :value="value" :type="type" @input="onInput" />
  </div>
</template>

<script>
const TYPES = {
  TEXT: 'text',
  NUMBER: 'number',
}

export default {
  props: {
    value: {
      type: [String, Number],
      default: null,
    },

    type: {
      type: String,
      default: 'text',
      validator(value) {
        return Object.values(TYPES).includes(value)
      },
    },
  },

  methods: {
    onInput(event) {
      let { value } = event?.target || {}

      if (this.type === 'number') {
        value = parseInt(value, 10)
      }

      this.$emit('input', value)
    },
  },
}
</script>

<style scoped>
.Input input {
  width: 100%;
  height: 30px;
}
</style>
