<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="container-fluid">
      <div class="row justify-content-center ">
        <div class="col-11 order-first">
          <router-view />
        </div>
        <div class="col-1 p-0 bg-dark lighten-20 height100 scroll-none d-none d-md-block  ">
          <Login />
          <!--  -->
        </div>
      </div>
    </div>
  </main>

  <Modal />
</template>

<script>
import { computed } from "vue";
import { AppState } from "./AppState";
import Navbar from "./components/Navbar.vue";
import Login from "./components/Login.vue";
import Modal from "./components/Modal.vue";

export default {
  setup() {
    return {
      appState: computed(() => AppState),
    };
  },
  components: { Navbar, Login, Modal },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.height100 {
  min-height: 100vh;
  position: sticky;
}
</style>
