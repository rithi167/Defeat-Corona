class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.rank = null;
        this.name = null
    }

  getCount(){
  var playerCountRef = database.ref("playerCount");
  playerCountRef.on("value", (data)=> {
      playerCount = data.val();
  })
  }

  updateCount(count){
  database.ref('/').update({
    playerCount: count
  });
  }

  update(){
   var playerIndex = "players" + this.index;
   database.ref(playerIndex).set({
       name: this.name,
       distance: this.distance
   })
  }

  static getPlayerInfo(){
    var playerInfoRef = databse.ref('players');
    playerInfoRef.on("value", (data)=>{
      allPlayers = data.val();
    })
  }

  static getCartsAtEnd(){
    var r = database.ref('CartsAtEnd');
    r.on("value", (data)=>{
      this.rank = data.val();
    })
  }
  static  updateCartsAtEnd(){
    database.ref('/').update({
    CartsAtEnd: rank
    })
  }
}