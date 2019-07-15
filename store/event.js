export const state = () => ({
  event: {
    name: '',
    slots: {
      start: {
        selectedTimeValue: null,
        minValueAllowed: 0,
        times: [
          { message: '12:00 A.M.', value: 0, allowed: true },
          { message: '1:00 A.M.', value: 1, allowed: false },
          { message: '2:00 A.M.', value: 2, allowed: false },
          { message: '3:00 A.M.', value: 3, allowed: false },
          { message: '4:00 A.M.', value: 4, allowed: true },
          { message: '5:00 A.M.', value: 5, allowed: true },
          { message: '6:00 A.M.', value: 6, allowed: true },
          { message: '7:00 A.M.', value: 7, allowed: true },
          { message: '8:00 A.M.', value: 8, allowed: false },
          { message: '9:00 A.M.', value: 9, allowed: true },
          { message: '10:00 A.M.', value: 10, allowed: false },
          { message: '11:00 A.M.', value: 11, allowed: false },
          { message: '12:00 P.M.', value: 12, allowed: true },
          { message: '1:00 P.M.', value: 13, allowed: true },
          { message: '2:00 P.M.', value: 14, allowed: true },
          { message: '3:00 P.M.', value: 15, allowed: true },
          { message: '4:00 P.M.', value: 16, allowed: true },
          { message: '5:00 P.M.', value: 17, allowed: true },
          { message: '6:00 P.M.', value: 18, allowed: true },
          { message: '7:00 P.M.', value: 19, allowed: true },
          { message: '8:00 P.M.', value: 20, allowed: true },
          { message: '9:00 P.M.', value: 21, allowed: true },
          { message: '10:00 P.M.', value: 22, allowed: true },
          { message: '11:00 P.M.', value: 23, allowed: true }
        ]
      },
      end: {
        selectedTimeValue: null,
        minValueAllowed: 0,
        times: [
          { message: '12:00 A.M.', value: 0, allowed: true },
          { message: '1:00 A.M.', value: 1, allowed: true },
          { message: '2:00 A.M.', value: 2, allowed: true },
          { message: '3:00 A.M.', value: 3, allowed: true },
          { message: '4:00 A.M.', value: 4, allowed: true },
          { message: '5:00 A.M.', value: 5, allowed: true },
          { message: '6:00 A.M.', value: 6, allowed: true },
          { message: '7:00 A.M.', value: 7, allowed: true },
          { message: '8:00 A.M.', value: 8, allowed: true },
          { message: '9:00 A.M.', value: 9, allowed: true },
          { message: '10:00 A.M.', value: 10, allowed: true },
          { message: '11:00 A.M.', value: 11, allowed: true },
          { message: '12:00 P.M.', value: 12, allowed: true },
          { message: '1:00 P.M.', value: 13, allowed: true },
          { message: '2:00 P.M.', value: 14, allowed: true },
          { message: '3:00 P.M.', value: 15, allowed: true },
          { message: '4:00 P.M.', value: 16, allowed: true },
          { message: '5:00 P.M.', value: 17, allowed: true },
          { message: '6:00 P.M.', value: 18, allowed: true },
          { message: '7:00 P.M.', value: 19, allowed: true },
          { message: '8:00 P.M.', value: 20, allowed: true },
          { message: '9:00 P.M.', value: 21, allowed: true },
          { message: '10:00 P.M.', value: 22, allowed: true },
          { message: '11:00 P.M.', value: 23, allowed: true }
        ]
      }
    },
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
    }
  }
})

export const getters = {
  isDisabled(state) {
    return (params) => {
      if (params.slotsKey === 'start') {
        return !params.time.allowed
      } else {
        return (
          state.event.slots.start.selectedTimeValue >= params.time.value ||
          !params.time.allowed
        )
      }
    }
  }
}

export const mutations = {
  selectTime(state, params) {
    state.event.slots[params.slotsKey].selectedTimeValue =
      params.selectedTimeValue
    if (params.slotsKey === 'start') {
      state.event.slots.end.minValueAllowed = params.selectedTimeValue
    }
  },
  selectType(state, params) {
    if (
      params.selectedTypeValue != null &&
      state.event.types.values.includes(params.selectedTypeValue)
    ) {
      state.event.types.selectedValue = params.selectedTypeValue
    }
  },
  selectLocation(state, params) {
    if (
      params.selectedLocationName != null &&
      params.selectedLocationName !== ''
    ) {
      state.event.locations.selectedName = params.selectedLocationName
    }
  }
}
