<template>
  <div class="Button" :class="typeClass">
    <button v-on="$listeners">
      <slot />
    </button>
  </div>
</template>

<script>
const TYPES = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
}

export default {
  props: {
    type: {
      type: String,
      default: TYPES.DEFAULT,
      validator(value) {
        return Object.values(TYPES).includes(value)
      },
    },
  },

  computed: {
    typeClass() {
      return `is${this.type.charAt(0).toUpperCase()}${this.type.slice(1)}`
    },
  },
}
</script>
