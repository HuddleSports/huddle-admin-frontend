<template>
  <div>
    <label class="label">{{ labelName }}</label>
    <div class="control">
      <div class="buttons has-addons">
        <span
          v-for="time in times"
          v-bind:key="time.value"
          class="button"
          :disabled="isDisabled(time)"
          :class="{
            'is-info': isSelected(time)
          }"
          @click="selectTime(time.value)"
          >{{ time.message }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    labelName: String,
    slotsKey: String
  },
  computed: {
    times() {
      return this.slot.times
    },
    selectedTimeValue() {
      return this.slot.selectedTimeValue
    },
    slot() {
      return this.slots[this.slotsKey]
    },
    ...mapState({
      slots: (state) => {
        return state.event.event.slots
      }
    })
  },
  methods: {
    isSelected(time) {
      const status =
        this.selectedTimeValue === time.value && !this.isDisabled(time)
      console.log('Status: ' + status)
      return status
    },
    isDisabled(time) {
      const params = { time: time, slotsKey: this.slotsKey }
      return this.$store.getters['event/isDisabled'](params)
    },
    getTime(value) {
      if (value < 0) {
        return -1
      }
      const time = this.times.find((time) => {
        return time.value === value
      })
      return time
    },
    selectTime(value) {
      const time = this.getTime(value)
      if (time != null && !this.isDisabled(time)) {
        const params = {
          slotsKey: this.slotsKey,
          selectedTimeValue: value
        }
        this.$store.commit('event/selectTime', params)
      }
    }
  }
}
</script>
