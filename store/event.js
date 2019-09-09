export const state = () => ({
  event: {
    name: null,
    types: {
      selectedValue: null,
      values: ['Cricket', 'Football']
    },
    locations: {
      selectedName: null,
      values: [
        {
          name: 'Batman',
          city: 'Sunnyvale',
          state: 'California'
        },
        {
          name: 'Sola',
          city: 'Ahmedabad',
          state: 'Gujarat'
        },
        {
          name: 'Relish',
          city: 'Vadodara',
          state: 'Gujarat'
        },
        {
          name: 'Jolly',
          city: 'Surat',
          state: 'Gujarat'
        },
        {
          name: 'Althan',
          city: 'Surat',
          state: 'Gujarat'
        }
      ]
    },
    price: null,
    startTime: null,
    endTime: null
  }
})

export const getters = {
  isEventValid(state) {
    return () => {
      if (
        state.event.name == null ||
        state.event.name.trim() === '' ||
        state.event.price == null ||
        state.event.startTime == null ||
        state.event.endTime == null ||
        state.event.types.selectedValue == null ||
        state.event.locations.selectedName == null
      ) {
        return false
      }
      return true
    }
  }
}

export const mutations = {
  setTimeRange(state, params) {
    state.event.startTime = params.startTime
    state.event.endTime = params.endTime
  },
  resetTimeRange(state) {
    state.event.startTime = null
    state.event.endTime = null
  },
  selectType(state, params) {
    state.event.types.selectedValue = params.selectedTypeValue
  },
  selectLocation(state, params) {
    state.event.locations.selectedName = params.selectedLocationName
  },
  setName(state, params) {
    state.event.name = params.name
  },
  setPrice(state, params) {
    state.event.price = params.price
  },
  submitEvent(state) {
    state.event.name = null
    state.event.price = null
    state.event.startTime = null
    state.event.endTime = null
    state.event.locations.selectedName = null
    state.event.types.selectedValue = null
  }
}
