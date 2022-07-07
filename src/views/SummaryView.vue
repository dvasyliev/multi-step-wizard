<template>
  <div>
    <h1>Summary</h1>

    <template v-if="customer">
      Name: {{ customer.name }}<br />
      Age: {{ cusotmer.age }}<br />
      Where do you live: {{ cusotmer.country }}<br />
      Package: {{ cusotmer.package }}<br />
      Premium: {{ cusotmer.premium }}
    </template>

    <template v-else>No customer data</template>

    <div>
      <ButtonComponent @click="onBack">Back</ButtonComponent>
      <ButtonComponent @click="onBuy">Buy</ButtonComponent>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue'

export default {
  name: 'SummaryView',

  components: {
    ButtonComponent,
  },

  data: () => ({
    customer: null,
  }),

  methods: {
    onBack() {
      this.$router.go(-1)
    },

    onBuy() {
      alert('Success')
    },
  },
}
</script>
