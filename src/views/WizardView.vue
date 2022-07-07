<template>
  <div>
    <h1>Tell us about yourself</h1>

    <FieldsetComponent label="Name">
      <InputComponent v-model="customerData.name" />
    </FieldsetComponent>

    <FieldsetComponent label="Age">
      <InputComponent v-model="customerData.age" />
    </FieldsetComponent>

    <FieldsetComponent label="Where do you leave">
      <SelectComponent v-model="customerData.country" :options="countries" />
    </FieldsetComponent>

    <FieldsetComponent>
      <RadioGroupComponent v-model="customerData.package" :options="packagesExtended" />
    </FieldsetComponent>

    <h2>Your premium is: {{ premium }}</h2>

    <div>
      <ButtonComponent @click="onBack">Back</ButtonComponent>
      <ButtonComponent @click="onNext">Next</ButtonComponent>
    </div>
  </div>
</template>

<script>
import find from 'lodash/find'
import { mapActions, mapState } from 'vuex'
import { countries } from '@/data/countries'
import { packages } from '@/data/packages'
import FieldsetComponent from '@/components/FieldsetComponent.vue'
import InputComponent from '@/components/InputComponent.vue'
import SelectComponent from '@/components/SelectComponent.vue'
import RadioGroupComponent from '@/components/RadioGroupComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'

const BASE_PREMIUM_RATE = 10
const AGE_LIMIT = 100

export default {
  name: 'WizardView',

  components: {
    FieldsetComponent,
    InputComponent,
    SelectComponent,
    RadioGroupComponent,
    ButtonComponent,
  },

  data: () => ({
    countries,
    packages,
    customerData: {
      name: null,
      age: null,
      country: null,
      pkgage: null,
    },
  }),

  computed: {
    ...mapState(['customer']),

    selectedCountry() {
      return find(this.countries, { value: this.customerData.country })
    },

    standartPackageCost() {
      const standartPackage = find(this.packages, { value: 'standart' })

      return this.getPackageCost(standartPackage?.multiplier)
    },

    packagesExtended() {
      return this.packages.map((pkg) => {
        const cost = this.getPackageCost(pkg.multiplier)

        return { ...pkg, cost, label: this.getPackageLabel(pkg, cost) }
      })
    },

    selectedPackage() {
      return find(this.packagesExtended, { value: this.customerData.package })
    },

    premium() {
      const { cost } = this.selectedPackage || {}
      const { currency } = this.selectedCountry || {}

      return cost && currency ? `${cost} ${currency}` : 'Canot be calculated'
    },
  },

  created() {
    if (this.customer) {
      this.customerData = {
        ...this.customerData,
        ...this.customer,
      }
    }
  },

  methods: {
    ...mapActions(['setCustomer']),

    getPackageCost(multiplier) {
      const { age } = this.customerData
      const { rate } = this.selectedCountry || {}

      if (!age || !rate) {
        return NaN
      }

      return BASE_PREMIUM_RATE * parseInt(age, 10) * rate * multiplier
    },

    getPackageLabel(pkg, cost) {
      if (pkg.value === 'standart' || !cost) {
        return pkg.label
      }

      const costDifferenceFromStandart = cost - this.standartPackageCost
      const { currency } = this.selectedCountry || {}
      const percent = (pkg.multiplier - 1) * 100

      return `${pkg.label} (+${costDifferenceFromStandart}${currency}, ${percent}%)`
    },

    onBack() {
      this.$router.go(-1)
    },

    onNext() {
      this.setCustomer({
        ...this.customerData,
        premium: this.premium,
      })

      this.$router.push({ name: 'summary' })
    },
  },
}
</script>
