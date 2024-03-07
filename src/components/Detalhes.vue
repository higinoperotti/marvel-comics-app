<template>
  <div>
    <h2>{{ comic.title }}</h2>
    <p>{{ comic.description }}</p>
  </div>
</template>

<script>
export default {
  props: ['comic'],
  mounted() {
    this.$store.dispatch('fetchComicDetails', this.$route.params.id);
  }
};
</script>
