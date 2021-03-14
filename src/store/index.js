"use strict"

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//どこからでも参照できる唯一の情報源store
const store = new Vuex.Store({
  state: {
    gender: '',
    year: '',
    month: '',
    day: '',
    q1: '',
    q2: '',
    q3: '',
    consultation: '',
  },
  mutations: {
    // ページ1
    updateGender (state, gender) {
      state.gender = gender
    },
    updateYear (state, year) {
      state.year = year += '年'
    },
    updateMonth (state, month) {
      state.month = month += '月'
    },
    updateDay (state, day) {
      state.day = day += '日'
    },
    // ページ2
    updateQ1 (state, q1) {
      state.q1 = q1
    },
    updateQ2 (state, q2) {
      state.q2 = q2
    },
    updateQ3 (state, q3) {
      state.q3 = q3
    },
    // ページ3
    updateConsultation (state, consultation) {
      state.consultation = consultation
    },
  },
});

export default store
