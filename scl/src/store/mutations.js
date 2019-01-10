import * as types from './mutation-type'
export default {
  [types.SET_LAN] (state, currentlanguage) {
    console.log(currentlanguage)
    state.currentlanguage = currentlanguage.lan
  }
}
