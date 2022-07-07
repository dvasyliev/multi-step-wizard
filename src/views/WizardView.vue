<template>
  <div>
    <h1>Tell us about yourself</h1>

    <FieldsetComponent label="Name">
      <InputComponent v-model="customer.name" />
    </FieldsetComponent>

    <FieldsetComponent label="Age">
      <InputComponent v-model="customer.age" />
    </FieldsetComponent>

    <FieldsetComponent label="Where do you leave">
      <SelectComponent v-model="customer.country" :options="countries" />
    </FieldsetComponent>

    <FieldsetComponent>
      <RadioGroupComponent v-model="customer.package" :options="packages" />
    </FieldsetComponent>

    <h2>Your premium is: {{ premium }}</h2>

    <div>
      <ButtonComponent @click="onBack">Back</ButtonComponent>
      <ButtonComponent @click="onNext">Next</ButtonComponent>
    </div>
  </div>
</template>

<script>
import { countries } from '@/data/countries'
import { packages } from '@/data/packages'
import FieldsetComponent from '@/components/FieldsetComponent.vue'
import InputComponent from '@/components/InputComponent.vue'
import SelectComponent from '@/components/SelectComponent.vue'
import RadioGroupComponent from '@/components/RadioGroupComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'

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
    customer: {
      name: null,
      age: null,
      country: null,
      package: null,
      premium: null,
    },
  }),

  computed: {
    premium() {
      return 122
    },
  },

  methods: {
    onBack() {
      this.$router.go(-1)
    },

    onNext() {
      this.$router.push({ name: 'summary' })
    },
  },
}
</script>
