<template>
  <div>
    <h1 class="title has-text-centered">Create Event</h1>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-two-thirds">
        <div class="box">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Name" />
            </div>
          </div>
          <div class="field">
            <label class="label">Location</label>
            <div class="control">
              <div class="select">
                <select
                  @change="locationChanged()"
                  v-model="selectedLocationName"
                >
                  <option disabled value="">Please select one</option>
                  <option
                    v-for="locationName in locationNames"
                    v-bind:key="locationName"
                    >{{ locationName }}</option
                  >
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <TimePicker :labelName="'Start Time'" :slotsKey="'start'" />
          </div>
          <div class="field">
            <TimePicker :labelName="'End Time'" :slotsKey="'end'" />
          </div>

          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">Sport Type</label>
                <div class="control">
                  <div class="select">
                    <select
                      @change="eventTypeChanged()"
                      v-model="selectedEventType"
                    >
                      <option disabled value="">Please select one</option>
                      <option
                        v-for="typeValue in typeValues"
                        v-bind:key="typeValue"
                        >{{ typeValue }}</option
                      >
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">Price</label>
                <div class="control">
                  <input class="input" type="number" placeholder="Price" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TimePicker from '~/components/TimePicker.vue'
export default {
  components: {
    TimePicker
  },
  computed: mapState({
    event: (state) => {
      return state.event.event
    },
    title: (state) => {
      return state.event.event.name
    },
    slots: (state) => {
      const key = 'start'
      return state.event.event.slots[key]
    },
    typeValues: (state) => {
      return state.event.event.types.values
    },
    locationNames: (state) => {
      return state.event.event.locations.values.map((location) => location.name)
    }
  }),
  methods: {
    eventTypeChanged() {
      if (this.selectedEventType !== '' && this.selectedEventType != null) {
        const params = {
          selectedTypeValue: this.selectedEventType
        }
        this.$store.commit('event/selectType', params)
      }
    },
    locationChanged() {
      if (
        this.selectedLocationName !== '' &&
        this.selectedLocationName != null
      ) {
        const params = {
          selectedLocationName: this.selectedLocationName
        }
        this.$store.commit('event/selectLocation', params)
      }
    }
  },
  data: function() {
    return {
      selectedEventType: '',
      selectedLocationName: ''
    }
  }
}
</script>
