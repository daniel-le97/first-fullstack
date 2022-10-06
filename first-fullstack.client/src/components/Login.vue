<template>
  <span class="navbar-text">
    <button
      class="btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0"
      @click="login"
      v-if="!user.isAuthenticated"
    >
      Login
    </button>

    <div class="my-2 my-lg-0 d-flex flex-column" v-else>
      <div>
        <router-link :to="{ name: 'Account' }">
          <div v-if="account.picture || user.picture" class="rounded">
            <img
              :src="account.picture || user.picture"
              alt="account photo"
              height=""
              class="rounded-5 p-2 img-fluid"
            />
          </div>
        </router-link>
      </div>
      <div class="text-center">
        <router-link :to="{ name: 'Home' }">
          <button class="btn btn-primary p-1">home</button>
        </router-link>
      </div>
      <div class="p-1 w-100">
        <router-link :to="{ name: 'Account' }">
          <div class="btn hoverable d-flex justify-content-center my-2">
            Account
          </div>
        </router-link>
        <div
          class="hoverable btn btn-success text-dark d-flex justify-content-center"
          @click="logout"
        >
          <i class="mdi mdi-logout"></i>
          logout
        </div>
      </div>
    </div>
  </span>
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState";
import { AuthService } from "../services/AuthService";
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithPopup();
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin });
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}

.dropdown-menu.show {
  transform: scale(1);
}

.hoverable {
  cursor: pointer;
}
</style>
