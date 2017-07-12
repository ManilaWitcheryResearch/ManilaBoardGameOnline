<template>
  <div class="hello">
    <h1>游戏大厅</h1>

    <h2>共有 {{playerSize}} 人坐着</h2>
    <div v-for="(room, index) in rooms">
      <h2>room {{index}}</h2>
      <ul>
        <li>{{room.playerSize}}/{{room.maxPlayerSize}} 人</li>
        <li><input type="button" value="坐下" v-on:click="enterRoom(index)"></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        playerSize: 3,
        rooms: [{
          playerSize: 1,
          maxPlayerSize: 5
        }, {
          playerSize: 3,
          maxPlayerSize: 4
        }
        ]
      }
    },
    methods: {
      enterRoom (index) {
        alert(`其实还进不去${index}桌啦！`)
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
