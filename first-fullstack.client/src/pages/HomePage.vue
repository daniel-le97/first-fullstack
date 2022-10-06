<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <HomeImage />
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-3 mt-3" v-for="e in events" :key="e.id">
        <div class="bg-dark lighten-25 p-1 rounded hover-effect">
          <EventsCard :event="e" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeImage from "../components/HomeImage.vue";
import Pop from "../utils/Pop.js";
import { eventsService } from "../services/EventsService.js";
import { onMounted } from "vue";
import EventsCard from "../components/EventsCard.vue";
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
export default {
  setup() {
    async function getAllEvents() {
      try {
        await eventsService.getAllEvents();
      } catch (error) {
        Pop.error(error, "[getAllEvents]");
      }
    }
    onMounted(() => {
      getAllEvents();
    });
    return {
      events: computed(() => AppState.events),
    };
  },
  components: { HomeImage, EventsCard },
};
</script>

<style scoped lang="scss">
.hover-effect:hover {
  transform: scale(.85)
  
}
</style>
