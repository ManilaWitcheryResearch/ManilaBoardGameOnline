var manilaUIMap = {
    width: 1280,
    height: 720,
    kaizokuPosition: [{
        x: 123,
        y: 456
    }, {
        x: 166,
        y: 456
    }, {
        x: 199,
        y: 456
    }]
};

var gameConst = {
    playerSize: {
        min: 3,
        max: 5
    }
};

var gameSetting = {
    player: 4,
    roundWaitTime: 30
};

var hallState = {
    room: [
        {
            id: 123,
            user: [
                {name: "fuck"},
                {name: "what"}
            ],
            havePassword: false,
            roundWaitTime: 30,
            playerUpperBound: 5,
            playerLowerBound: 3
        }
    ]
};

var roomState = {
    id: 123,
    user: [
        {name: "fuck"},
        {name: "what"}
    ],
    havePassword: false,
    roundWaitTime: 30,
    playerUpperBound: 5,
    playerLowerBound: 3
};

var gameState = {//保存当前游戏状态，使玩家断线重连时获得这个就能正确重连
    player: [
        {
            id: 123,
            displayName: "sdfad",
            color: "red",
            position: 0,//顺位
            money: 34,
            freeBoy: 2,//剩余的棋子
            share: [0, 1, 2, 0],//拥有各支股票数量
            mortgageShare: [1, 0, 0, 0]//抵押的股票
        },
        {
            xxxx: "第二个玩家"
        }
    ],
    share: [//股票（货物？
        {
            name: "jade",
            last: 2,
            price: 15
        },
        {}, {}, {}
    ],
    captain: 0,//当前大轮0号玩家是船长
    bigRound: 2,//第几大轮，从0开始？
    littleRound: 1,//第几回合，从0开始？
    nowWhoMove: 2,//当前到哪个position的玩家行动，从0开始
    specialStep: "payForCaptain",//当前到达了哪种特殊状态，如竞选船长、购买股票、扔骰子等阶段
    remainingTime: 14,//剩余时间
    ship: [
        {
            good: 0,//哪种货物
            size: 3,//能上多少人
            onboard: [2, 0, -1]//有谁在上面，-1是没人。
        },
        {}, {}
    ],
    otherPosition: {
        kaizoku: [0, -1],//有谁在上面
        fixShip: [-1, -1, -1],
        bank: [-1]
    }

};