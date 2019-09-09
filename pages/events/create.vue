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
              <input
                class="input"
                type="text"
                placeholder="Name"
                v-model="name"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Location</label>
            <div class="control">
              <div class="select">
                <select v-model="locationName">
                  <option disabled value="null">Please select one</option>
                  <option
                    v-for="locationNameOption in locationNames"
                    v-bind:key="locationNameOption"
                    >{{ locationNameOption }}</option
                  >
                </select>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">Sport Type</label>
                <div class="control">
                  <div class="select">
                    <select v-model="sportType">
                      <option disabled value="null">Please select one</option>
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
                  <input
                    class="input"
                    type="number"
                    v-model="price"
                    placeholder="Price"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Time</label>
            <div class="control">
              <button
                ref="calendarTrigger"
                type="datetime"
                data-is-range="true"
                data-close-on-select="true"
                data-minute-steps="30"
              />
            </div>
            <p
              class="help is-danger is-medium is-size-6"
              v-show="shouldShowInvalidTimeRangeError"
            >
              Event time is invalid!
            </p>
          </div>
          <div class="column has-text-centered">
            <a
              class="button is-link"
              :disabled="isSubmitDisabled()"
              @click="submitEvent()"
              >Submit</a
            >
          </div>
        </div>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.js'
export default {
  components: {},
  computed: {
    ...mapState({
      event: (state) => {
        return state.event.event
      }
    }),
    name: {
      get() {
        return this.event.name
      },
      set(name) {
        const params = {
          name: name
        }
        this.$store.commit('event/setName', params)
      }
    },
    locationName: {
      get() {
        return this.event.locations.selectedName
      },
      set(locationName) {
        const params = {
          selectedLocationName: locationName
        }
        this.$store.commit('event/selectLocation', params)
      }
    },
    sportType: {
      get() {
        return this.event.types.selectedValue
      },
      set(sportType) {
        const params = {
          selectedTypeValue: sportType
        }
        this.$store.commit('event/selectType', params)
      }
    },
    price: {
      get() {
        return this.event.price
      },
      set(price) {
        const params = {
          price: price
        }
        this.$store.commit('event/setPrice', params)
      }
    },
    typeValues() {
      return this.event.types.values
    },
    locationNames() {
      return this.event.locations.values.map((location) => {
        return location.name
      })
    }
  },
  methods: {
    isSubmitDisabled() {
      const status = !this.$store.getters['event/isEventValid']()
      console.log('isSubmitDisabled: ' + status)
      return status
    },
    isTimeRangeValid(startTime, endTime) {
      if (startTime == null || endTime == null) {
        return true
      }
      if (endTime <= startTime) {
        return false
      }
      return true
    },
    submitEvent(event) {
      console.log('Event submitted')
      this.$store.commit('event/submitEvent')
      this.resetTimeRange()
    },
    resetTimeRange() {
      if (this.calendar) {
        this.calendar.clear()
      }
    }
  },
  data: function() {
    return {
      shouldShowInvalidTimeRangeError: true,
      calendar: null
    }
  },
  mounted() {
    this.calendar = bulmaCalendar.attach(this.$refs.calendarTrigger, {})[0]
    this.calendar.on('select', (bulmaCalendar) => {
      const startTime = bulmaCalendar.data.startTime.getTime()
      const endTime = bulmaCalendar.data.endTime.getTime()
      this.shouldShowInvalidTimeRangeError = !this.isTimeRangeValid(
        startTime,
        endTime
      )
      if (!this.shouldShowInvalidTimeRangeError) {
        const params = {
          startTime: startTime,
          endTime: endTime
        }
        this.$store.commit('event/setTimeRange', params)
      } else {
        this.$store.commit('event/resetTimeRange')
      }
    })
  }
}
</script>
