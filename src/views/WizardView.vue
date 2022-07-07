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
      <RadioGroupComponent v-model="customerData.package" :options="packages" />
    </FieldsetComponent>

    <h2>Your premium is: {{ error || premium }}</h2>

    <div>
      <ButtonComponent @click="onBack">Back</ButtonComponent>
      <ButtonComponent @click="onNext">Next</ButtonComponent>
    </div>
  </div>
</template>

<script>
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
      package: null,
    },
  }),

  computed: {
    ...mapState(['customer']),

    selectedCountry() {
      return this.countries.filter(({ value }) => value === this.customerData.country)?.[0]
    },

    selectedPackage() {
      return this.packages.filter(({ value }) => value === this.customerData.package)?.[0]
    },

    error() {
      if (parseInt(this.customerData.age, 10) > AGE_LIMIT) {
        return 'Your age is over our accepted limit!'
      }

      if (!this.customerData.age || !this.selectedCountry || !this.selectedPackage) {
        return 'Canot calculate, fill all data!'
      }

      return null
    },

    premium() {
      if (this.error) {
        return NaN
      }

      const value =
        BASE_PREMIUM_RATE *
        parseInt(this.customerData.age, 10) *
        this?.selectedCountry?.rate *
        this?.selectedPackage?.multiplier

      return `${value}${this.selectedCountry?.currency}`
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
