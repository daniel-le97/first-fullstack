<template>
  <div class="event-attendee">
    <img
      :src="attendee.picture"
      :alt="attendee.name"
      width="45px"
      height="45px"
      class="rounded"
    />
  </div>
</template>

<script>
import { Attendee } from "../models/Attendee.js";

export default {
  props: {
    attendee: { type: Attendee, required: true },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
