<template>
  <div class="hello">
    <h1>游戏房间</h1>

    <h2>本房间人数： {{room.player.length}}/{{room.maxPlayerSize}}</h2>
    <table>
      <thead>
      <td>昵称</td>
      <td>准备</td>
      <td>[--------------------------------------------------------]</td>
      </thead>
      <tr v-for="(playerOne,index) in room.player">
        <td>
          {{playerOne.displayName}}
        </td>
        <td>
          <template v-if="playerOne.ready">O了</template>
        </td>
        <td>
          <input type="button" v-if="playerOne.type=='me'" value="溜了" v-on:click="backToHall()"/>
          <input type="button" v-if="playerOne.type=='online'" value="踢掉" v-on:click="seatControl(index, 'empty')"/>
          <input type="button" v-if="playerOne.type=='local'" value="下掉" v-on:click="seatControl(index, 'empty')"/>
          <input type="button" v-if="playerOne.type=='robot'" value="干掉" v-on:click="seatControl(index, 'empty')"/>
          <input type="button" v-if="playerOne.type=='closed'" value="打开" v-on:click="seatControl(index, 'empty')"/>
          <template v-if="playerOne.type=='empty'">
            <input type="button" value="加个机器人" v-on:click="seatControl(index, 'robot')"/>
            <input type="button" value="加个本地玩家" v-on:click="seatControl(index, 'local')"/>
            <input type="button" value="关掉位置" v-on:click="seatControl(index, 'closed')"/>
          </template>
        </td>
      </tr>
    </table>
    <br/>
    <input type="button" class="btn btn-large btn-block" v-if="!ready" value="准备" v-on:click="readyChange()"/>
    <input type="button" v-if="ready" value="取消准备" v-on:click="readyChange()"/>
    <input type="button" value="溜了" v-on:click="backToHall()"/>
  </div>
</template>

<script>
  const mockRoomData = {
    room: {
      maxPlayerSize: 4,
      player: [
        {displayName: `这是我！`, type: 'me', ready: false},
        {displayName: `贝贝猫`, type: 'online', ready: false},
        {displayName: '蓝天', type: 'robot', ready: false},
        {displayName: '[空位]', type: 'empty', ready: false}
      ]
    },
    ready: false,
    mySeatIndex: 0
  }

  const seatType = {
    closed: {
      displayName: '[关闭]', type: 'closed'
    },
    displayName: {
      displayName: '[网络玩家]', type: 'online'
    },
    local: {
      displayName: '[本地玩家]', type: 'local'
    },
    robot: {
      displayName: '[机器人玩家]', type: 'robot'
    },
    empty: {
      displayName: '[空位]', type: 'empty'
    },
    me: {
      displayName: '[我]', type: 'me'
    }
  }

  export default {
    name: 'hello',
    data () {
      return mockRoomData
    },
    methods: {
      readyChange () {
        this.ready = !this.ready
        this.room.player[this.mySeatIndex].ready = this.ready
//        this.$set(this.room.player, this.mySeatIndex, this.ready)
      },
      backToHall () {
        this.$router.push('/game_hall')
      },
      seatControl (index, become) {
        console.log(this.room.player)
//        this.room.player[index] = seatType[become]
        this.$set(this.room.player, index, seatType[become])
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

  table {
    list-style-type: none;
    padding: 0;
    display: inline-block;
    margin: 0 10px;
    border-collapse: collapse;
  }

  td {
    border: 1px solid black;

  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
