<template>
<div>
  <div class="form">
    <div class="header">
      <p id="step">STEP1</p>
      <p id="inst">お客様の情報を入力してください</p>
    </div>
    <div class="body">
      <p class="genre">-性別-</p>
        <label><input name="q1" type="radio">男性</label>
        <label><input name="q1" type="radio">女性</label>
      <p class="genre">-生年月日-</p>
      <select name="year" id="id_year">
        <option value="">-</option>
        <option value="1990">1990（平成2）</option>
        <option value="1991">1991（平成3）</option>
        <option value="1992">1992（平成4）</option>
        <option value="1993">1993（平成5）</option>
        <option value="1994">1994（平成6）</option>
        <option value="1995">1995（平成7）</option>
        <option value="1996">1996（平成8）</option>
        <option value="1997">1997（平成9）</option>
        <option value="1998">1998（平成10）</option>
        <option value="1999">1999（平成11）</option>
        <option value="2000">2000（平成12）</option>
      </select>年
      <select name="month" id="id_month">
        <option value="">-</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>月
      <select name="day" id="id_day">
        <option value="">-</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
      </select>日
    </div>
  </div>
  <div class="button-group">
    <router-link to="/questionnaire" class="button">次へ進む ＞</router-link>
  </div>
</div>
</template>

<script>
// import common from '@/static/js/option';

// export default {
//   data() {

//   },
//   methods: {
//     optionLoop(start, end, id, this_day) {
//       common.optionLoop(start, end, id, this_day);
//     }
//   }
// }
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
