<template>
  <form @submit.prevent="createEvent()">
    <!-- Modal -->
    <div
      class="modal fade modal-lg"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              Event Details
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <!--  -->
            <div class="row">
              <div class="col-6">
                <div class="">
                  <label for="coverImg">send a picture!</label>
                  <input
                    type="text"
                    v-model="editable.coverImg"
                    class="form-control"
                    name="coverImg"
                  />
                </div>
                <div class="">
                  <label for="name">what is your event</label>
                  <input
                    type="text"
                    v-model="editable.name"
                    class="form-control"
                    name="name"
                  />
                </div>
                <div class="">
                  <label for="description">what is your event about</label>
                  <input
                    type="text"
                    v-model="editable.description"
                    class="form-control"
                    name="description"
                  />
                </div>
                <div class="">
                  <label for="location">where is your event</label>
                  <input
                    type="text"
                    v-model="editable.location"
                    class="form-control"
                    name="location"
                  />
                </div>
                <div class="">
                  <label for="capacity">how many people can you have</label>
                  <input
                    type="number"
                    v-model="editable.capacity"
                    class="form-control"
                    name="capacity"
                  />
                </div>
                <div class="">
                  <label for="startDate">when is your event</label>
                  <input
                    type="datetime-local"
                    v-model="editable.startDate"
                    class="form-control"
                    name="startDate"
                  />
                </div>
                <div class="mt-2">
                  <select
                    class="form-select bg-white"
                    aria-label="Default select example"
                    v-model="editable.type"
                  >
                    <option selected>Event type</option>
                    <option value="expo">expo</option>
                    <option value="sport">sport</option>
                    <option value="convention">convention</option>
                    <option value="digital">digital</option>
                    <option value="concert">concert</option>
                  </select>
                </div>
              </div>
              <div
                class="col-6 bg-dark rounded d-flex justify-content-center align-content-center"
              >
                <div v-if="editable.coverImg">
                  <div class="mt-3 border-1 border elevation-5">
                    <img
                      :src="editable.coverImg"
                      alt=""
                      class="img-fluid rounded"
                    />
                  </div>
                  <div class="text-center mt-3">
                    <span>Image Preview</span>
                  </div>
                </div>
                <div v-else class="mt-5">
                  <span class="fs-2">Please put in a picture!</span>
                </div>

                <!--  -->
              </div>
            </div>

            <!--  -->
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" class="btn btn-primary">Create Event!</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { eventsService } from "../services/EventsService.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    const editable = ref({});
    return {
      editable,
      async createEvent() {
        try {
          const yes = await Pop.confirm();
          if (!yes) {
            return;
          }
          await eventsService.createEvent(editable.value);
        } catch (error) {
          Pop.error(error);
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
