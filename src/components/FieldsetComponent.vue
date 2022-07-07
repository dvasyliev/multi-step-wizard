<template>
  <div class="Fieldset">
    <template v-if="label">
      <div class="Fieldset-label">
        <label>{{ label }}</label>
      </div>
    </template>

    <div class="Fieldset-element">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: null,
    },
  },
}
</script>

<style scoped>
.Fieldset {
  width: 260px;
  padding: 12px;
}

.Fieldset-label {
  margin-bottom: 6px;
  font-size: 14px;
  text-align: left;
}
</style>
