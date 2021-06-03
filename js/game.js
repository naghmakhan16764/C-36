class Game {
  constructor() {}
  getState() {
    db.ref("gameState").on("value", function (data) {
      gameState = data.val();
    });
  }

  update(state) {
    db.ref("/").update({
      gameState: state,
    });
  }

  start(){
      if(gameState===0){
          player=new Player()
          player.getCount()

          form=new Form ()
          form.display()

      }


  }
}
