<template>
  <div class="hello">
    <h1>游戏大厅</h1>

    <h2>共有 {{playerSize}} 人坐着</h2>
    <div v-for="(room, index) in rooms">
      <h2>room {{index}}</h2>
      <ul>
        <li>{{room.player.length}}/{{room.maxPlayerSize}} 人</li>
        <li>
          <template v-for="(playerOne,index2) in room.player">
            <template v-if="index2!=0">,</template>
            {{playerOne.displayName}}
          </template>
        </li>
        <li><input type="button" value="坐下" v-on:click="enterRoom(index)"></li>
      </ul>
    </div>
  </div>
</template>

<script>
  const mockRoomData = {
    playerSize: 4,
    rooms: [{
      maxPlayerSize: 5,
      player: [
        {displayName: '带鱼'}
      ]
    }, {
      maxPlayerSize: 4,
      player: [
        {displayName: `爱撸`},
        {displayName: `贝贝猫`},
        {displayName: '蓝天'}
      ]
    }
    ]
  }

  export default {
    name: 'hello',
    data () {
      return mockRoomData
    },
    methods: {
      enterRoom (index) {
//        alert(`其实还进不去${index}桌啦！`)
        this.$router.push('/game_room')
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
