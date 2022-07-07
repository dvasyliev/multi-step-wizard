<template>
  <div class="Input">
    <input :value="value" type="text" @input="onInput" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
  },

  methods: {
    onInput(event) {
      this.$emit('input', event?.target?.value)
    },
  },
}
</script>
