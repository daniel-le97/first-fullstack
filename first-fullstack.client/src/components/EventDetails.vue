<template>
  <div class="event-details container">
    <div class="row blur">
      <div class="col-4 py-3">
        <img :src="event.coverImg" alt="" class="img-fluid" />
        <!--  -->
      </div>
      <div class="col-8 text-shadow d-flex flex-column justify-content-between">
        <!--  -->
        <div class="text-center">{{ event.type }}</div>
        <div class="d-flex justify-content-between">
          <span>{{ event.name }}</span>
          <span>{{ event.startDate }}</span>
        </div>
        <div class="d-flex justify-content-between">
          <span>{{ event.location }}</span>
          <span>{{ event.time }}</span>
        </div>
        <p>{{ event.description }}</p>
        <div class="d-flex justify-content-between mb-3 me-2">
          <div class="d-flex gap-3 align-items-end" >
            <span class="text-primary">{{ event.capacity }}</span>
            <span>spots left</span>
          </div>
          <button class="btn btn-warning">
            Attend
            <i class="mdi mdi-account-plus"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
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
.event-details {
 
  
  background-image: url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80");
  .text-shadow {
    color: aliceblue;
    text-shadow: 1px 1px black, 0px 0px 5px salmon;
    font-weight: bold;
    letter-spacing: 0.08rem;

    /* Second Color  in text-shadow is the blur */
  }
}
.blur{
   background: rgba(36, 109, 142, 0.6);
  border: 1px solid rgba(204, 243, 253, 0.2);
  backdrop-filter: blur(1px);
  /* Note: backdrop-filter has minimal browser support */
  
  border-radius: 3px;
}
</style>
