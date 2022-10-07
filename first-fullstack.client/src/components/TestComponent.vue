<template>
     <div class="dropdown my-2 my-lg-0">
      <div
        class="dropdown-toggle selectable"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        id="filter-dropdown"
      >
       
      </div>
      <div class="dropdown-menu p-0 list-group w-100" aria-labelledby="filter-dropdown">
          <div class="list-group-item list-group-item-action hoverable">
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
          </div>
          <div class="list-group-item list-group-item-action hoverable">
            <router-link :to="{ name: 'Account' }" aria-label="account-button">
          <div class="btn hoverable d-flex justify-content-center my-2 text-light">
            Account
          </div>
        </router-link>
          </div>
          <div class="list-group-item list-group-item-action hoverable">
            <router-link :to="{ name: 'Home' }" aria-label="home-button">
          <button class="btn btn-primary p-1 m-1">home</button>
        </router-link>
          </div>
          <div class="list-group-item list-group-item-action hoverable">
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
    </div>
</template>


<script>
export default {
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>