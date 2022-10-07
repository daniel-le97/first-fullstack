<template>
  <div class="event-attendee">
    <img
      :src="attendee.profile.picture"
      :alt="attendee.name"
      :title="attendee.name"
      class="rounded Images"
    />
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
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

<style lang="scss" scoped>
.Images {
  height: 2rem;
  width: 2rem;
  object-fit: cover;
}
</style>
