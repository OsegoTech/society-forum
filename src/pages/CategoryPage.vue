<template>
  <h1>{{category.name}}</h1>
<ForumList
  :forums="getForumsForCategory(category)"
  :title="category.name"

/>
</template>

<script>
import sourceData from "@/data.json"
import ForumList from "@/components/ForumList.vue";
export default {
  name: "CategoryPage",
  components: {ForumList},
  props: {
    id: {
      required :true,
      type: String
    }
  },
  computed: {
    category(){
      return sourceData.categories.find(category => category.id === this.id)
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
