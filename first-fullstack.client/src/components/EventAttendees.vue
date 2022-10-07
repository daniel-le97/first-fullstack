<template>
  <div class="event-attendee">
    <img :src="attendee.profile.picture" :alt="attendee.name" class="rounded img-fluid" />
  </div>
</template>

<script>
import { Attendee } from "../models/Attendee.js";

export default {
  props: {
    attendee: { type: Attendee, required: true },
  },
  setup(props) {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
