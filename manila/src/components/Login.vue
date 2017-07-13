<template>
  <div id="login" class="login">
    <h1>{{ displayName }}</h1>
    <label>USERID：<input v-model="userId"/></label>
    <input type="button" value="LOGIN" v-on:click="login">
    <input type="button" value="LOGOUT" v-on:click="logout">
    <br/>
    <b>{{retObj}}</b>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        userId: 'Bejita',
        displayName: 'Bejita',
        retObj: 'what?',
        loginApi: '/api/user/signin',
        logoutApi: '/api/user/signout'
      }
    },
    methods: {
      login () {
        console.log(this.loginApi)
        console.log(this)
        this.$http.post(this.loginApi, {'params': {userId: this.userId}})
          .then(response => {
//            get body data
            console.log(response.body)
            alert(`login success!` + JSON.stringify(response))
//            this.$set('retObj', response.body)
          }, response => {
//            error callback
            console.log(response)
            alert("fuck, can't login! " + JSON.stringify(response))
          })
      },
      logout () {
        console.log(this.logoutApi)
        console.log(this)
        this.$http.post(this.logoutApi, {'params': {userId: this.userId}})
          .then(response => {
//            get body data
            console.log(response.body)
            alert(`logout success!` + JSON.stringify(response))
//            this.$set('retObj', response.body)
          }, response => {
//            error callback
            console.log(response)
            alert("fuck, can't logout! " + JSON.stringify(response))
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
