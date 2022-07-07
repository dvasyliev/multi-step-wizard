<template>
  <div>
    <h1>Hello There!</h1>
    <p>Let's buy some insurance. It is going to take only few steps</p>

    <ButtonComponent @click="onStart">Start</ButtonComponent>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ButtonComponent from '@/components/ButtonComponent.vue'

export default {
  name: 'HomeView',

  components: {
    ButtonComponent,
  },

  methods: {
    ...mapActions(['resetCustomer']),

    onStart() {
      this.resetCustomer()
      this.$router.push({ name: 'wizard' })
    },
  },
}
</script>
