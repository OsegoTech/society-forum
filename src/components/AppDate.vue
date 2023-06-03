<template>
  <span :title="humanFriendlyDate()">
    {{ diffForHumans() }}
  </span>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedDate from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedDate);
dayjs.extend(relativeTime);
export default {
  name: "AppDate",
  props: {
    timestamp: {
      type: Number,
      required: true,
    },
  },
  methods: {
    diffForHumans() {
      return dayjs(this.timestamp * 1000).fromNow();
    },
    humanFriendlyDate() {
      return dayjs.unix(this.timestamp).format("L LT");
    },
  },
};
</script>

<style scoped></style>
