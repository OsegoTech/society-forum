<template>
  <div v-if="thread" class="col-large push-top" >
    <h1>{{ thread.title }}</h1>
    <div class="post-list">
      <div class="post"
           v-for="postId in thread.posts"
           :key="postId"
      >
        <div class="user-info">
          <a href="#" class="user-name">{{ userById(postById(postId).userId).name }}</a>
          <a href="#">
            <img :src="userById(postById(postId).userId).avatar" alt="" class="avatar-large">
          </a>
          <p class="desktop-only text-small"> 107 posts</p>
        </div>

        <div class="post-content">
          <div>
            <p>
              {{ postById(postId).text }}
            </p>
          </div>
        </div>

        <div class="post-date text-faded">
          {{postById(postId).publishedAt}}
        </div>
      </div>
    </div>
  </div>
  <div v-else class="col-full text-center">
    <h1>This thread does not exist</h1>
    <RouterLink :to="{name: 'Home'}"></RouterLink>
  </div>



  <!-- <div class="pagination">
    <button class="btn-circle" disabled><i class="fa fa-angle-left"></i></button>
    1 of 3
    <button class="btn-circle"><i class="fa fa-angle-right"></i></button>
  </div>


  <div class="forum-stats desktop-only">
    <hr>
    <ul>
      <li><i class="fa fa-user-circle-o"></i>47 users online</li>
      <li><i class="fa fa-user-o"></i>497 users registered</li>
      <li><i class="fa fa-comments-o"></i>49 threads</li>
      <li><i class="fa fa-comment-o"></i>763 posts</li>
    </ul>

  </div> -->
</template>

<script>
import sourceData from "@/data.json";

export default {
  name: "PageThreadShow",
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users
    }
  },
  computed: {
    thread(){
      return this.threads.find(thread => thread.id === this.id)
    }
  },
  methods: {
    postById(postId) {
      return this.posts.find(p => p.id === postId)
    },
    userById(userId) {
      return this.users.find(p => p.id === userId)
    }
  }

}
</script>

<style scoped>

</style>