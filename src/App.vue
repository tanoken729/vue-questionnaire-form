<template>
  <div>
    <myheader></myheader>
    <p v-if="msg.length > 0">
      {{ msg }}
    </p>
    <p v-else>
      no-text
    </p>
    <input type="text" v-model="msg">
    <button @click="clear()">clear</button>
    <button @click="created()">created</button>
  </div>
</template>

<script>
import myheader from './components/myheader'

export default {
  components: {
    myheader
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  methods: {
    clear () {
      this.msg = ''
    },
    created() {
      fetch('http://www.geonames.org/postalCodeLookupJSON?postalcode=10504&country=US')
      .then( res => {
        return res.json()
      })
      .then( json => {
        this.msg = json.postalcodes[0].adminName1
        })
      .catch( err => {
        this.msg = err
      });
    }
  },
}
</script>