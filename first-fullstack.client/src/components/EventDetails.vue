<template>
  <div class="event-details container" v-if="event">
    <div class="row blur">
      <!-- <div
        class="d-flex justify-content-end mt-1"
      
      >
        <button
          class="btn btn-primary"
          @click="cancelEvent(event.id)"
          v-if="!event.isCanceled"
        >
          cancel event?
        </button>
      </div> -->
      <div class="col-md-4 py-3">
        <img
          :src="event.coverImg"
          :alt="event.name"
          :title="event.name"
          class="img-fluid h-100"
        />
        <!--  -->
      </div>
      <div
        class="col-md-8 text-shadow d-flex flex-column justify-content-between"
      >
        <!--  -->
        <div class="d-flex justify-content-end mt-1" v-if="!routeAccount">
          <button
            class="btn btn-primary"
            @click="cancelEvent(event.id)"
            v-if="event.creatorId == account?.id && !event?.isCanceled"
            aria-label="cancel-event"
          >
            cancel event?
          </button>
        </div>
        <div>
          <div class="text-center">{{ event.type }}</div>
        </div>
        <div class="d-flex justify-content-between">
          <span class="fs-5 fw-bold">{{ event.name }}</span>
          <span>{{ event.startDate }}</span>
        </div>
        <div class="d-flex justify-content-between">
          <span>{{ event.location }}</span>
          <span>{{ event.time }}</span>
        </div>
        <div v-if="!routeAccount">
          <p
            v-if="event.isCanceled || event.capacity <= 0"
            class="fs-1 text-danger"
          >
            This Event has been canceled or sold out
          </p>
          <div v-else>
            <p>
              {{ event.description }}
            </p>
          </div>
        </div>
        <div
          class="d-flex mb-3 me-2"
          :class="
            routeAccount ? 'justify-content-end' : 'justify-content-between'
          "
        >
          <div class="d-flex gap-3 align-items-end" v-if="!routeAccount">
            <span class="text-warning">{{ event.capacity }}</span>
            <span>spots left</span>
          </div>
          <div>
            <div v-if="!routeAccount && account.id">
              <button
                class="btn btn-danger"
                @click="removeTicket(event.id)"
                v-if="hasTicket"
                aria-label="un-attend event"
              >
                not going <i class="mdi mdi-account-minus"></i>
              </button>
              <button
                class="btn btn-warning"
                @click="createTicket(event.id)"
                v-else
                aria-label="attend-event"
              >
                Attend
                <i class="mdi mdi-account-plus"></i>
              </button>
            </div>
            <div
              v-else
              class="d-flex justify-content-end"
              :class="account.id ? '' : 'd-none'"
            >
              <router-link
                :to="{ name: 'Event', params: { id: event.id } }"
                aria-label="event-page-button"
              >
                <div class="text-shadow btn btn-danger">go to event page</div>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!--  -->
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import { Event } from "../models/Event.js";
import { AuthService } from "../services/AuthService.js";
import { eventsService } from "../services/EventsService.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    event: { type: Event, required: true },
  },
  setup(props) {
    const route = useRoute();
    const editable = ref({});
    return {
      routeAccount: computed(() => route.name == "Account"),
      // thisTicket: computed(() =>
      //   AppState.myTickets.find((t) => t.eventId == this.event.id)
      // ),
      hasTicket: computed(() =>
        AppState.attendees.find((a) => a.id == AppState.account.id)
      ),
      account: computed(() => AppState.account),
      editable,

      async createTicket(id) {
        try {
          if (!AppState.account.id) {
            return AuthService.loginWithPopup();
          }
          editable.value.eventId = id;
          editable.value.accountId = AppState.account.id;
          // console.log(editable.value);
          await eventsService.createTicket(editable.value);
          props.event.capacity--;
          Pop.success("Attending event!");
        } catch (error) {
          Pop.error(error, "[createTicket]");
        }
      },
      async removeTicket(eventId) {
        try {
          const yes = await Pop.confirm();
          if (!yes) {
            return;
          }
          let ticket = AppState.myTickets.find(
            (t) => t.profile.id == AppState.account.id
          );
          // console.log(ticket);
          let id = ticket.id;
          await eventsService.removeTicket(id);
          props.event.capacity++;
        } catch (error) {
          Pop.error(error);
        }
      },
      async cancelEvent(eventId) {
        try {
          const yes = await Pop.confirm();
          if (!yes) {
            return;
          }
          // let event = AppState.events.find(
          //   (e) => e.creatorId == AppState.account.id
          // );
          // let eventId = event.id;
          await eventsService.cancelEvent(eventId);
        } catch (error) {
          Pop.error(error);
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.event-details {
  background-image: url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80");
  .text-shadow {
    color: aliceblue;
    text-shadow: 1px 1px black, 0px 0px 5px salmon;
    // font-weight: bold;
    // letter-spacing: 0.08rem;

    /* Second Color  in text-shadow is the blur */
  }
}
.blur {
  background: rgba(36, 109, 142, 0.6);
  border: 1px solid rgba(204, 243, 253, 0.2);
  backdrop-filter: blur(5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 3px;
}

.text-shadow {
  color: aliceblue;
  text-shadow: 2px 2px black, 0px 0px 5px rgb(217, 229, 229);
  font-weight: bold;
  letter-spacing: 0.08rem;

  /* Second Color  in text-shadow is the blur */
}
</style>
