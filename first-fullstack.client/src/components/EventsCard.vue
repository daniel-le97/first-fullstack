<template>
  <router-link :to="{ name: 'Event', params: { id: event.id } }">
    <div
      class="event-card d-flex align-items-end"
      :style="{ backgroundImage: `url(${event.coverImg})` }"
    >
      <div class="event-details text-shadow d-flex flex-column w-100">
        <span class="ms-2">{{ event.name }}</span>
        <span class="ms-2">{{ event.location }}</span>
        <span class="ms-2">{{ event.startDate }}</span>
        <span class="ms-2 me-2 text-primary text-end"
          >{{ event.capacity }}
          <span class="text-shadow">spots left</span></span
        >
        <span>{{ event.id }}</span>
        
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
  width: 287px;
  height: 251px;
  object-fit: cover;
}
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
