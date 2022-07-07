<template>
  <div>
    <h1>Ooops</h1>
    <p>Your age is over our accepted limit.</p>
    <p>We are sorry but we canot insure you now</p>
    <router-link :to="{ name: 'welcome' }">
      <button>Ok :(</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AgeErrorView',
}
</script>
