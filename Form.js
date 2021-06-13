class Form{

    constructor(){
    this.title = createElement('h2');
    this.input = createInput('Name');
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.reset = createElement('Reset');
    }
    
    hide(){
     this.greeting.hide();
     this.title.hide();
     this.button.hide();
     this.input.hide();
    }
    
    display(){
        this.title.html("Defeat Corona");
        this.title.position(600,0);

    this.input.position(590,250);
    this.button.position(590,300);
    
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(250,300);
        this.greeting.html("Rules: Collect PPE kits to earn points and avoid corona enemy in order to win!")
        this.greeting.position(250,360);
    });

this.reset.mousePressed(()=>{
    players.updateCount(0);
    game.update(0);
});

}
}
