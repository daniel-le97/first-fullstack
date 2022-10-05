<template>
  <div class="about text-center container">
    <div class="row">
      <div class="col-12">
        <div>My Events</div>
        <EventDetails
          v-for="t in myTickets"
          :key="t.event.id"
          :event="t.event"
        />
        <!-- <EventsCard /> -->
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { AppState } from "../AppState";
import EventsCard from "../components/EventsCard.vue";
import { eventsService } from "../services/EventsService.js";
import EventDetails from "../components/EventDetails.vue";

export default {
  setup() {
    async function getMyTickets() {
      try {
        await eventsService.getMyTickets();
      } catch (error) {
        Pop.error(error, "[getMyTickets]");
      }
    }
    onMounted(() => {
      getMyTickets();
    });
    return {
      account: computed(() => AppState.account),
      myTickets: computed(() => AppState.myTickets),
    };
  },
  components: { EventsCard, EventDetails },
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
