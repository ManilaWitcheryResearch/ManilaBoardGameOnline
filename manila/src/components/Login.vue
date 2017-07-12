<template>
  <div id="app" class="hello">
    <h1>{{ displayName }}</h1>
    <label>昵称：<input v-model="displayName"/></label>
    <input type="button" value="登录" v-on:click="login">
    <br/>
    <b>{{retObj}}</b>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        displayName: 'Bejita',
        retObj: 'what?',
        loginApi: 'http://lams.com/login'
      }
    },
    methods: {
      login () {
        console.log(this.loginApi)
        console.log(this)
        this.$http.get(this.loginApi, {'params': {displayName: this.displayName}})
          .then(response => {
//            get body data
            console.log(response.body)
            alert(`login success! ${response.body}`)
//            this.$set('retObj', response.body)
          }, response => {
//            error callback
            console.log(response)
            alert("fuck, can't login! " + JSON.stringify(response))
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
