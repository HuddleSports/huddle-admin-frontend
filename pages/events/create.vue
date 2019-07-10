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
            <TimePicker :labelName="'Start Time'" :minTimeValue="0" />
          </div>
          <div class="field">
            <TimePicker :labelName="'End Time'" :minTimeValue="18" />
          </div>

          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">Sport Type</label>
                <div class="control">
                  <div class="select">
                    <select>
                      <option>None</option>
                      <option>Cricket</option>
                      <option>Football</option>
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
import TimePicker from '~/components/TimePicker.vue'
export default {
  components: {
    TimePicker
  }
}
</script>
