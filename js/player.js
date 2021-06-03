class Player {
  constructor() {}

  updateCount(playerCount) {
    db.ref("/").update({
      playerCount: playerCount,
    });
  }

  getCount() {
    db.ref("playerCount").on("value", function (data) {
      playerCount = data.val();
    });
  }

  update(name){
      var playerIndex="player"+playerCount
      db.ref(playerIndex).set({
          name:name
      })
  }
}
