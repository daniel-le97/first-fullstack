<template>
  <div class="event-details container">
<div class="row">
  <div class="col-4">
    <img :src="event.coverImg" alt="">
    <!--  -->
  </div>
  <div class="col-8">
    <!--  -->
    <div class="d-flex justify-content-between">
      <span>{{event.name}}</span>
      <span>{{event.startDate}}</span>
    </div>
    <div class="d-flex justify-content-between">
      <span>{{event.location}}</span>
      <span>{{event.time}}</span>
    </div>
  </div>
  <p>{{event.description}}</p>
  <div class="d-flex justify-content-between">
    <div>
      <span></span>
      <span></span>
    </div>
    <button class="btn btn-warning">
      Attend
      <i  class="mdi mdi-account-plus"></i>
    </button>
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
  .event-details{
    
    .text-shadow{
      color: aliceblue;
      text-shadow: 1px 1px black, 0px 0px 5px salmon;
      font-weight: bold;
      letter-spacing: 0.08rem
      
      /* Second Color  in text-shadow is the blur */
    }
  }
</style>
