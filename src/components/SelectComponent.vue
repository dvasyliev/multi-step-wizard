<template>
  <div class="Select">
    <select :value="value" @input="onInput">
      <template v-for="option in options">
        <option :key="option[keyValue]" :value="option[keyValue]">
          {{ option[keyLabel] }}
        </option>
      </template>
    </select>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'input',
  },

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

  methods: {
    onInput(event) {
      this.$emit('input', event?.target?.value)
    },
  },
}
</script>
