<template>
  <ForumList
    :forums="getForumsForCategory(category)"
    v-for="category in categories"
    :key="category.id"
    :title = "category.name"
    :categoryId = "category.id"
  />
</template>

<script>
import ForumList from "@/components/ForumList.vue";
import sourceData from "@/data.json"

export default {
  name: "CategoryList",
  components: {ForumList},
  props : {
    categories: {
      required: true,
      type: Array
    }
  },
  methods: {
    getForumsForCategory(category){
      return sourceData.forums.filter(forum => forum.categoryId === category.id)
    }
  }
}
</script>

<style scoped>

</style>
