<template>
  <div class="about text-center container">
    <div class="row">
      <div class="col-12">
        <div class="text-light">my Events</div>
        <div class="row">
          <div class="col-md-3 mt-4" v-for="e in myEvents" :key="e.id">
            <div class="p-1 bg-dark lighten-25 rounded">
              <EventsCard :event="e" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="text-light">My tickets</div>
        <div v-for="t in myTickets" :key="t.id" class="mx-5 px-5">
          <div class="my-5">
            <EventDetails :event="t.event" v-if="t" />
          </div>
        </div>
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
import Pop from "../utils/Pop.js";

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
      myEvents: computed(() =>
        AppState.events.filter((e) => e.creator.id == AppState.account.id)
      ),
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
