<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for doesn't exist.</p>
    <router-link to="/">Go back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
};
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

.not-found {
  text-align: center;
  margin-top: 50px;
}

h1 {
  font-size: 3em;
  color: $primary-color;
}

p {
  font-size: 1.2em;
  color: $text-color;
  font-weight: bold;
}

a {
  font-size: 1.1em;
  color: #3498db;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>