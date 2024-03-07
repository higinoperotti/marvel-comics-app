<template>
  <div id="app">
    <header>
      <navbar />
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>&copy; 2024 </p>
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style>
#app {
  font-family: 'Arial', sans-serif;
  text-align: center;
  color: #333;
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
  box-sizing: border-box;
}

header {
  background-color: #3498db;
  padding: 10px;
  color: #fff;
}

main {
  margin-top: 20px;
}

footer {
  margin-top: 20px;
  padding: 10px;
  background-color: #f0f0f0;
}

</style>
