<template>
  <div>
    <label class="label">{{ labelName }}</label>
    <div class="control">
      <div class="buttons has-addons">
        <span
          class="button"
          v-for="time in times"
          v-bind:key="time.id"
          :disabled="time.disabled"
          @click="selectTime(time.id)"
          :class="{ 'is-info': selectedTimeId == time.id }"
          >{{ time.message }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    labelName: String,
    minTimeValue: Number
  },
  data: function() {
    return {
      selectedTimeId: -1,
      times: [
        { id: 1, message: '5:00 P.M.', value: 17, disabled: true },
        { id: 2, message: '6:00 P.M.', value: 18, disabled: true },
        { id: 3, message: '7:00 P.M.', value: 19, disabled: true },
        { id: 4, message: '8:00 P.M.', value: 20, disabled: false },
        { id: 5, message: '9:00 P.M.', value: 21, disabled: false },
        { id: 6, message: '10:00 P.M.', value: 22, disabled: false },
        { id: 7, message: '11:00 P.M.', value: 23, disabled: true }
      ]
    }
  },
  created: function() {
    this.times.forEach((time) => {
      if (this.minTimeValue > time.value) {
        time.disabled = true
      }
    })
  },
  methods: {
    getTime(id) {
      if (id < 0) {
        return -1
      }
      const time = this.times.find((time) => {
        return time.id === id
      })
      return time
    },
    selectTime(id) {
      const time = this.getTime(id)
      if (time != null && !time.disabled) {
        this.selectedTimeId = time.id
      }
    }
  }
}
</script>
