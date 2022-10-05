<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <HomeImage />
      </div>
    </div>
    <div class="row">
      <div class="col-12"></div>
    </div>
  </div>
</template>

<script>
import HomeImage from '../components/HomeImage.vue';
import Pop from '../utils/Pop.js';
import { eventsService } from '../services/EventsService.js';
import { onMounted } from 'vue';
export default {
    setup() {
      async function getAllEvents(){
        try {
            await eventsService.getAllEvents()
          } catch (error) {

            Pop.error(error,'[getAllEvents]')
          }
      }
      onMounted(()=>{
        getAllEvents()
      })
        return {};
    },
    components: { HomeImage }
};
</script>

<style scoped lang="scss"></style>
