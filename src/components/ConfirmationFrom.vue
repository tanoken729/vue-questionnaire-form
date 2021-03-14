<template>
<div>
  <div class="form">
    <div class="header">
      <p id="step">STEP4</p>
      <p id="inst">以下の内容をご確認ください</p>
    </div>
    <div class="body">
      <div>
        <p class="genre">-性別-</p>
        <p class="answer">{{ gender }}</p>
      </div>
      <div>
        <p class="genre">-生年月日-</p>
        <p class="answer">{{ year }}{{ month }}{{ day }}</p>
      </div>
      <div>
        <p class="genre">-現在、生命保険に加入されていますか？-</p>
        <p class="answer">{{ q1 }}</p>
      </div>
      <div>
        <p class="genre">-現在入院中ですか。または、最近3ヶ月以内に医師の診断・検査の結果、入院・手術をすすめられたことはありますか？-</p>
        <p class="answer">{{ q2 }}</p>
      </div>
      <div>
        <p class="genre">-過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことはありますか？-</p>
        <p class="answer">{{ q3 }}</p>
      </div>
      <div>
        <p class="genre">-ご相談内容-</p>
        <p class="answer">{{ consultation }}</p>
      </div>
    </div>
  </div>
  <div class="button-group">
    <router-link to="/consultation" class="button">前へ戻る ＞</router-link>
    <router-link to="/confirmation" class="button">送信 ＞</router-link>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      gender: 'gender',
      year: 'year',
      month: 'month',
      day: 'day',
      q1: 'q1',
      q2: 'q2',
      q3: 'q3',
      consultation: 'consultation',
    })
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

.genre {
  color: #1e90ff;
  text-align: left;
  line-height:200%
}

.answer {
  margin: 0 0 0 10px;
}

textarea {
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
