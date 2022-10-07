<template>
  <div>
    <div
      class="card h-25 hero-img text-shadow gap-2 d-flex justify-content-center"
    >
      <span class="ms-5">get ahead of the crowd</span>
      <span class="ms-5">reserve your seats here</span>
      <span class="ms-5">real events for real people</span>
    </div>
  </div>
  <div>
     
    <div
      class="d-md-flex gap-5 gap-sm-0 flex-wrap justify-content-evenly mt-2  p-2  bg-dark lighten-25 rounded"
    >
      <button class="btn btn-light m-1 m-md-0 ms-3 ms-md-0" @click="getEventsByType('')">all</button>
      <button class="btn btn-light" @click="getEventsByType('concert')" aria-label="get-Event-by-concert">
        concerts
      </button>
      <button class="btn btn-light m-1 m-md-0" @click="getEventsByType('convention')" aria-label="get-Event-by-convention">
        conventions
      </button>
      <button class="btn btn-light m-1 m-md-0 ms-4 ms-md-0" @click="getEventsByType('sport')" aria-label="get-Event-by-sport">
        sports
      </button>
      <button class="btn btn-light m-1 m-md-0" @click="getEventsByType('expo')" aria-label="get-Event-by-expo">
        expo
      </button>
      <button class="btn btn-light m-1 m-md-0" @click="getEventsByType('digital')" aria-label="get-Event-by-digital">
        digital
      </button>
    </div>
  </div>
</template>

<script>

import { eventsService } from "../services/EventsService.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    return {
      async getEventsByType(type) {
        try {
          await eventsService.getAllEvents(type);
        } catch (error) {
          Pop.error(error, "[getEventsByType]");
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.h-25 {
  min-height: 25vh;
}
.hero-img {
  background-image: url("../assets/img/andrei-stratu-kcJsQ3PJrYU-unsplash.jpg");
  background-size: cover;
}
.btn:hover{
  transform: scale(1.2);
}

.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem;

  /* Second Color  in text-shadow is the blur */
}
</style>
