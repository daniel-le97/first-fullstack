<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3 d-flex flex-row justify-content-between">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }" aria-label="home-logo-button">
      <div class="d-flex flex-column align-items-center logo-img hover">
        <img src="../assets/img/Logo.png" alt="" width="250" />
      </div>
    </router-link>
 <div class="d-md-none">
   <span class="navbar-text">
    <button
      class="btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0"
      @click="login"
      v-if="!user.isAuthenticated"
      aria-label="login-button"
    >
      Login
    </button>
  
    <div class="my-2 my-lg-0 d-flex ">
      <div class="d-flex justify-content-between align-items-center">
        <router-link :to="{ name: 'Account' }" aria-label="account-picture-button">
          <div v-if="account.picture || user.picture" class="rounded">
            <img
              :src="account.picture || user.picture"
              alt="account photo"
              width="50"
              class="rounded-circle"
            />
          </div>
        </router-link>
        <router-link :to="{ name: 'Account' }" aria-label="account-button">
          <div class="btn hoverable d-flex justify-content-center my-2 text-light">
            Account
          </div>
        </router-link>
        <router-link :to="{ name: 'Home' }" aria-label="home-button">
          <button class="btn btn-primary p-1 m-1">home</button>
        </router-link>
        <div
          class="hoverable btn btn-success text-dark d-flex justify-content-center"
          @click="logout"
          aria-label="logout-button"
        >
          <i class="mdi mdi-logout"></i>
          logout
        </div>
      </div>
    
     
    </div>
  </span>
 </div>
    <div class="mt-2 mt-md-0 d-flex justify-content-center align-items-center">
      <button
        type="button"
        class="btn btn-primary mt-sm-2 mt-0 hover"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        aria-label="addEventForm"
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
import Login from "./Login.vue";

// import Login from './Login.vue'
export default {
    setup() {
        const editable = ref("");
        return {
            editable,
            user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithPopup();
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin });
      },
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
    components: { Login }
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

.logo-image {
  max-height: 2vh;
}
.hover:hover{
  transform: scale(1.1);
}
</style>
