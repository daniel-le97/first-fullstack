<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <img alt="logo" src="../assets/img/cw-logo.png" height="45" />
      </div>
    </router-link>
    <!-- <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <input
        type="text"
        class="form-control w-50"
        placeholder="search..."
        v-model="editable"
        @input="SearchEvents(editable)"
      />
    </div> -->
    <div class="mt-2 mt-md-0 d-flex justify-content-center align-items-center">
      <button
        type="button"
        class="btn btn-primary mt-sm-2 mt-0"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Add an event
      </button>
    </div>
  </nav>
</template>

<script>
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import { AppState } from "../AppState.js";
import { eventsService } from "../services/EventsService.js";
import Pop from "../utils/Pop.js";

// import Login from './Login.vue'
export default {
  setup() {
    const editable = ref("");
    return {
      editable,
      //  async SearchEvents(editable){
      //   try {
      //       await eventsService.SearchEvents(editable)
      //     } catch (error) {

      //       Pop.error(error)
      //     }

      //   },
      // events: computed(() => AppState.events.filter(e => e.name.toUpperCase().includes(editable.value.toUpperCase())))
    };
  },
  // components: { Login }
};
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
