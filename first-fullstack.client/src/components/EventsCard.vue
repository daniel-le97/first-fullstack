<template>
  <router-link :to="{ name: 'Event', params: { id: event.id } }"
  aria-label="event-details-button">
    <div
      class="event-card d-flex align-items-end ms-sm-0 ms-2 "
      :style="{ backgroundImage: `url(${event.coverImg})` }"
      :title="event.name"
    >
      <div
        class="event-details text-shadow d-flex flex-column  w-100"
        v-if="!event.isCanceled"
      >
        <span class="ms-2 fs-5">{{ event.name }}</span>
        <span class="ms-2">{{ event.location }}</span>
        <span class="ms-2">{{ event.startDate }}</span>
        <span class="ms-2 me-2 text-danger fw-bold text-end"
          >{{ event.capacity }}
          <span class="text-shadow">spots left</span></span
        >
        <span>{{ event.type }}</span>
      </div>
      <div v-else class="event-details text-shadow d-flex flex-column w-100">
        canceled
      </div>
      <!--  -->
    </div>
  </router-link>
</template>

<script>
import { Event } from "../models/Event.js";

export default {
  props: {
    event: { type: Event, required: true },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.event-card {
  width: auto;
  height: 251px;
  object-fit: cover;
  object-position: center;
}
// .event-card:hover {
//   transform: scale(0.75);
// }
.event-details {
  background: rgba(204, 243, 253, 0.2);
  border: 1px solid rgba(86, 199, 251, 0.2);
  backdrop-filter: blur(10px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 3px;
}

.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;

  /* Second Color  in text-shadow is the blur */
}
</style>
