<template>
<div>
  <div class="form">
    <div class="header">
      <p id="step">STEP1</p>
      <p id="inst">お客様の情報を入力してください</p>
    </div>
    <div class="body">
      <p class="genre">-性別-</p>
        <label><input type="radio" name="gender" value="男性">男性</label>
        <label><input type="radio" name="gender" value="女性">女性</label>
      <p class="genre">-生年月日-</p>
      <select name="year" id="id_year">
        <option v-for="(year, key) in years" :key="key">{{ year }}</option>
      </select>年
      <select name="month" id="id_month">
        <option v-for="(month, key) in months" :key="key">{{ month }}</option>
      </select>月
      <select name="day" id="id_day">
        <option v-for="(day, key) in days" :key="key">{{ day }}</option>
      </select>日
    </div>
  </div>
  <div class="button-group">
    <router-link to="/questionnaire" class="button">次へ進む ＞</router-link>
  </div>
</div>
</template>

<script>
import { yearList, monthList, dayList } from '@/utiles/definition';

export default {
  data() {
    return {
      years: yearList,
      months: monthList,
      days: dayList,
    }
  },
  // methods() {
  //   optionLoop(1950, 2000, yearList);
  //   yearList: this.yearList
  // }
  // method: {
  //   optionLoop(){
  //     const {start, end} = optionLoop({
  //     })
  //   }
  // }
  // data() {

  // },
  // methods: {
  //   // optionLoop(start, end) {
  //   //   definition.optionLoop(start, end);
  //   // }
  //   addTodo(e) {
  //     this.$store,commit('todo/add', e.target.value);
  //   }
  // }
}
</script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  // outline: auto;
	margin:0; padding:0; 		/*全要素のマージン・パディングをリセット*/
  max-width: 100%;
}

#step{
  background: #1e90ff;
  color: #fff;
  font-size: 2px;
  margin: 0;
  max-width: 40px;
  padding: 2px;
  text-align: center;
}

#inst {
  font-size: 12px;
  color: #696969;
  text-align: center;
  padding-bottom: 10px;
}

.header {
  background: #afeeee;
  margin: 0%;
  padding: 0%;
  line-height: 10px;
  border-bottom: solid 1px #48d1cc;
}

.body {
  font-size: 9px;
  margin: 10px;
  padding-bottom: 10px;
  line-height: 30px;
  text-align: left;
}

.body input {
  vertical-align:middle;
}

.genre {
  color: #1e90ff;
}

select {
  padding: 5px 10px 5px 0px;
  font-size: 9px;
  border: 1px solid #dcdcdc;
}

.form{
  max-width: 80%;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #48d1cc;
  border-bottom: 0.5px solid #000;
}

.button-group{
  text-align: center;
}

.button {
  background-color: #40e0d0;
  color: #fff;
  border: solid 1px #48d1cc;
  margin-top: 1rem;
  padding: 5px 10px;
  border-radius: 0.5rem 0.5rem;
  text-decoration: none;
  display:inline-block;
  margin: 10px;
}
</style>
