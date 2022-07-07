<template>
  <div>
    <h1>Hello There!</h1>
    <p>Let's buy some insurance. It is going to take only few steps</p>
    <router-link :to="{ name: 'wizard' }">
      <button>Start</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>
