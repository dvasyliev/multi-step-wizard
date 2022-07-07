<template>
  <div>
    <h1>Summary</h1>

    <template v-if="customer">
      Name: {{ customer.name }}<br />
      Age: {{ customer.age }}<br />
      Where do you live: {{ country.label }}<br />
      Package: {{ pkg.label }}<br />
      Premium: {{ customer.premium }}
    </template>

    <template v-else>No customer data</template>

    <div style="display: flex; justify-content: center">
      <ButtonComponent @click="onBack">Back</ButtonComponent>

      <template v-if="customer">
        <ButtonComponent @click="onBuy">Buy</ButtonComponent>
      </template>
    </div>
  </div>
</template>

<script>
import find from 'lodash/find'
import { mapActions, mapState } from 'vuex'
import { countries } from '@/data/countries'
import { packages } from '@/data/packages'
import ButtonComponent from '@/components/ButtonComponent.vue'

export default {
  name: 'SummaryView',

  components: {
    ButtonComponent,
  },

  computed: {
    ...mapState(['customer']),

    country() {
      return find(countries, { value: this.customer.country })
    },

    pkg() {
      return find(packages, { value: this.customer.package })
    },
  },

  methods: {
    ...mapActions(['resetCustomer']),

    onBack() {
      this.$router.go(-1)
    },

    onBuy() {
      alert('Success!')
      this.resetCustomer()
      this.$router.push({ name: 'welcome' })
    },
  },
}
</script>
