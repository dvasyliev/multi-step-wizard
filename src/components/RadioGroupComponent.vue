<template>
  <div class="RadioGroup">
    <template v-for="option in options">
      <div :key="option[keyValue]">
        <label>
          <input :value="option[keyValue]" type="radio" :name="name" @input="onInput" />
          {{ option[keyLabel] }}
        </label>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },

    options: {
      type: Array,
      default: () => [],
    },

    keyValue: {
      type: String,
      default: 'value',
    },

    keyLabel: {
      type: String,
      default: 'label',
    },
  },

  computed: {
    name() {
      return `radio-group-${this._uid}`
    },
  },

  methods: {
    onInput(value) {
      this.$emit('input', event?.target?.value)
    },
  },
}
</script>
