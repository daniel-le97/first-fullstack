<template>
  <div class="comment-component container">
    <div class="row">
      <div class="col-12 mt-4 mb-3">
        <div class="text-end text-success mb-1">
          <span>join the conversation</span>
        </div>
        <form @submit.prevent="handleSubmit()">
          <div>
            <textarea
              v-model="editable.body"
              rows="3"
              required
              class="form-control"
              placeholder="leave a comment here"
              id="textArea"
            ></textarea>
            <!-- <input type="number" v-model="editable.eventId" name="eventId" class="no-select hidden bg-dark lighten-25"/> -->
            <!-- <label for="textArea">comment</label> -->
          </div>
          <div class="text-end mt-2">
            <button type="submit" class="btn btn-success" v-if="account?.id">
              post comment
            </button>
            <button type="submit" class="btn btn-success" v-else>
              please login to comment
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <!-- comments draw Here -->
        <CommentCreators v-for="c in comments" :comment="c" :key="c.id" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import { AuthService } from "../services/AuthService.js";
import { eventsService } from "../services/EventsService.js";
import Pop from "../utils/Pop.js";
import CommentCreators from "./CommentCreators.vue";

export default {
  setup() {
    let editable = ref({});
    const route = useRoute();
    // -----set-up-----//
    return {
      // --variables--/
      account: computed(() => AppState.account),
      comments: computed(() => AppState.comments),
      editable,
      ///---client-functions---//
      async handleSubmit() {
        try {
          if (!AppState.account.id) {
            return AuthService.loginWithPopup();
          }
          const id = route.params.id;
          editable.value.eventId = id;
          await eventsService.createComment(editable.value);
          editable.value = {};
        } catch (error) {
          Pop.error(error, "[handleFormSubmit]");
        }
      },
    };
  },
  components: { CommentCreators },
};
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}
</style>
