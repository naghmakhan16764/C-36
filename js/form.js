class Form {
  constructor() {}

  display() {
    var title = createElement("h1");
    title.html("car racing game ");
    title.position(100, 10);

    var input = createInput("name");
    input.position(150, 100);

    var button = createButton("Join now");
    button.position(300, 250);
    button.mousePressed(function(){
        input.hide()
        button.hide()
        var name=input.value()
        playerCount=playerCount+1
        player.update(name)
        player.updateCount(playerCount)

        var greeting= createElement("h2");
        greeting.html("Welcome"+name);
        greeting.position(100,100)

             
    })
  }
}
