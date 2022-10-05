<template>
  <div class="event container-fluid">
    <div class="row">
      <div class="col-12">
        <EventDetails :event="event" v-if="event" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import EventDetails from "../components/EventDetails.vue";
import { eventsService } from "../services/EventsService.js";
import Pop from "../utils/Pop.js";
export default {
  setup() {
    const route = useRoute();
    async function getEventById() {
      try {
        await eventsService.getEventById(route.params.id);
        document.documentElement.scrollTop = 0;
      } catch (error) {
        Pop.error(error);
      }
    }
    async function getEventTickets() {
      try {
        await eventsService.getEventTickets(route.params.id);
      } catch (error) {
        Pop.error(error, "[getEventTickets]");
      }
    }
    async function getEventComments() {
      try {
        await eventsService.getEventComments(route.params.id);
      } catch (error) {
        Pop.error(error, "[getEventComments]");
      }
    }

    onMounted(() => {
      getEventById();
      getEventTickets();
      getEventComments();
    });
    return {
      event: computed(() => AppState.activeEvent),
    };
  },
  components: { EventDetails },
};
</script>
