<template>
<div>
  <div class="form">
    <div class="header">
      <p id="step">STEP2</p>
      <p id="inst">以下にお答えください</p>
    </div>
    <div class="body">
      <div>
        <p class="genre">現在、生命保険に加入されていますか？</p>
          <label><input name="q1" type="radio" @click="showQ2" value="はい" @change="updateQ1">はい</label>
          <label><input name="q1" type="radio" @click="showQ2" value="いいえ" @change="updateQ1">いいえ</label>
      </div>
      <div v-if="q2">
        <p class="genre">現在入院中ですか。または、最近3ヶ月以内に医師の診断・検査の結果、入院・手術をすすめられたことはありますか？</p>
          <label><input name="q2" type="radio" @click="showQ3" value="はい" @change="updateQ2">はい</label>
          <label><input name="q2" type="radio" @click="showQ3" value="いいえ" @change="updateQ2">いいえ</label>
      </div>
      <div v-if="q3">
        <p class="genre">過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことはありますか？</p>
          <label><input name="q3" type="radio" value="はい" @change="updateQ3">はい</label>
          <label><input name="q3" type="radio" value="いいえ" @change="updateQ3">いいえ</label>
      </div>
    </div>
  </div>
  <div class="button-group">
    <router-link to="/" class="button">前へ戻る ＞</router-link>
    <router-link to="/consultation" class="button">次へ進む ＞</router-link>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      q2: false,
      q3: false,
    }
  },
  methods: {
    showQ2() {
      this.q2 = true
    },
    showQ3() {
      this.q3 = true
    },
    updateQ1(e) {
      this.$store.commit('updateQ1', e.target.value)
    },
    updateQ2(e) {
      this.$store.commit('updateQ2', e.target.value)
    },
    updateQ3(e) {
      this.$store.commit('updateQ3', e.target.value)
    },
  }
}
</script>

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
  line-height:200%
}

select {
  padding: 5px 10px 5px 0px;
  font-size: 9px;
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
