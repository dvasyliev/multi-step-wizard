<template>
  <div>
    <h1>Summary</h1>

    <template v-if="customer">
      Name: {{ customer.name }}<br />
      Age: {{ customer.age }}<br />
      Where do you live: {{ customer.country }}<br />
      Package: {{ customer.package }}<br />
      Premium: {{ customer.premium }}
    </template>

    <template v-else>No customer data</template>

    <div>
      <ButtonComponent @click="onBack">Back</ButtonComponent>

      <template v-if="customer">
        <ButtonComponent @click="onBuy">Buy</ButtonComponent>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ButtonComponent from '@/components/ButtonComponent.vue'

export default {
  name: 'SummaryView',

  components: {
    ButtonComponent,
  },

  computed: {
    ...mapState(['customer']),
  },

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
