<template>
<div>
  <div class="form">
    <div class="header">
      <p id="step">STEP3</p>
      <p id="inst">ご相談内容をご記入ください</p>
    </div>
    <div class="body">
      <p class="genre">-ご相談内容-</p>
        <textarea cols="50" rows="10"></textarea>
    </div>
  </div>
  <div class="button-group">
    <router-link to="/questionnaire" class="button">前へ戻る ＞</router-link>
    <router-link to="" class="button">次へ進む ＞</router-link>
  </div>
</div>
</template>

<script>
export default {
  
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
  text-align: center;
}

.genre {
  color: #1e90ff;
  text-align: left;
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
