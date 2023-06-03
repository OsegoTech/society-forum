<template>
  <div class="post-list">
    <div class="post" v-for="post in posts" :key="post.id">
      <div class="user-info">
        <a href="#" class="user-name">{{ userById(post.userId).name }}</a>
        <a href="#">
          <img
            :src="userById(post.userId).avatar"
            alt=""
            class="avatar-large"
          />
        </a>
        <p class="desktop-only text-small">107 posts</p>
      </div>

      <div class="post-content">
        <div>
          <p>
            {{ post.text }}
          </p>
        </div>
      </div>

      <div
        class="post-date text-faded"
        :title="humanFriendlyDate(post.publishedAt)"
      >
        {{ diffForHumans(post.publishedAt) }}
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedDate from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedDate);
dayjs.extend(relativeTime);
import sourceData from "@/data.json";
export default {
  name: "PostList",
  data() {
    return {
      users: sourceData.users,
    };
  },
  // declare the props
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    userById(userId) {
      return this.users.find((p) => p.id === userId);
    },
    diffForHumans(timestamp) {
      return dayjs(timestamp * 1000).fromNow();
    },
    humanFriendlyDate(timestamp) {
      // return dayjs(timestamp * 1000).format("MMMM DD, YYYY HH:mm");
      return dayjs.unix(timestamp * 1000).format("LLL");
    },
  },
  // create a dayjs methode to show time elapsed since post
};
</script>

<style scoped></style>
