<template>
  <div>
    <div class="header">
      <div class="member">
        <p>ログイン | 新規登録</p>
      </div>
      <div id="title">
        <router-link to="/">Sample App</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  /* outline: auto; */
	margin:0; padding:0; 		/*全要素のマージン・パディングをリセット*/
}
.header {
    background-color: #f5f5f5;
    border-bottom: solid 0.5px #000;
    color: #696969;
}

#title {
    font-size: 16px;
    text-align: left;
    padding: 0 0 20px 10px;
    // text-decoration: none;
}

#title a:link {
  color: #696969;
  text-decoration: none; /*主に下線部削除に使用*/
}
#title a:visited {
  color: #696969;
  text-decoration: none;
}
#title a:hover {
  color: #000000;
  text-decoration: none;
}
#title a:active {
  color: #000000;
  text-decoration: none;
}

.member {
    font-size: 10px;
    text-align: right;
    padding: 5px 0 0 0;
}
</style>
