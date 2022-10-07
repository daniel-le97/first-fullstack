<template>
  <div class="event container-fluid">
    <div class="row">
      <div class="col-12">
        <EventDetails :event="event" v-if="event" />
      </div>
    </div>
    <div class="row">
      <div
        class="col-12 d-flex flex-wrap bg-dark lighten-25 rounded my-4"
        v-if="attendees"
      >
        <div class="row flex-wrap" v-if="attendees">
          <div class="col-3 p-1" v-for="a in attendees" :key="a.id">
            <EventAttendees :attendee="a" />
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-10 bg-dark lighten-25 rounded">
        <!--  -->
        <div v-if="!event?.isCanceled">

          <Comments />
        </div>
        <div v-else>
           <router-link class="navbar-brand d-flex justify-content-center" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center justify-content-center">
        <span class="fs-1">find a new event</span>
      </div>
    </router-link>
        </div>
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
import Comments from "../components/Comments.vue";
export default {
  setup() {
    const route = useRoute();
    async function getEventById() {
      try {
        await eventsService.getEventById(route.params.id);
        document.documentElement.scrollTop = 0;
      } catch (error) {
        Pop.error(error, "[getEventById]");
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
      attendees: computed(() => AppState.attendees),
      newImage(e) {
        e.target.src = "/src/assets/img/undraw_Dog_re_is6r.png";
      },
    };
  },
  components: { EventDetails, Comments },
};
</script>

<style scoped lang="scss">
.min-height {
  min-height: 10vh;
}
</style>
