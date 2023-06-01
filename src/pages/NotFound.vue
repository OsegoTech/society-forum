<template>
  <div class="col-full text-center">
    <h1>Not Found</h1>
    <router-link :to="{name: 'Home'}">Read Some Cool Threads</router-link>
  </div>

</template>

<script>
import pageHome from "@/pages/Home.vue";

export default {
  name: "PageNotFound",
  computed: {
    pageHome() {
      return pageHome
    }
  }
}
</script>

<style scoped>

</style>
