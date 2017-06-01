var game = new Phaser.Game(400, 600, Phaser.CANVAS, 'gameDiv');

var background;
var quit;

var mainState = {

    preload:function(){
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    game.load.image("background","img/bgg.png")
    game.load.image("quit","img/quit.png")

    },

    create:function(){

    game.add.sprite(0,0,"background");

    quit = game.add.button(340,15,"quit",quit);
    quit.scale.x= .3;
    quit.scale.y= .3;

    instructions = game.add.text(90,85,'INSTRUCTIONS',{fill:"black",font:"30px Times New Roman"});
    instructions1 = game.add.text(90,220,'This game is played by 5 players.',{fill:"black",font:"18px Times New Roman"});
    instructions2 = game.add.text(50,240,'It can played wherever there is light and shade.',{fill:"black",font:"18px Times New Roman"});
    instructions3 = game.add.text(50,260,'One player is the tagger.',{fill:"black",font:"18px Times New Roman"});
    instructions4 = game.add.text(50,280,'It needs to touch the players who is in the light.',{fill:"black",font:"18px Times New Roman"});
    instructions5 = game.add.text(50,300,'You need to touch them all before the time is over.',{fill:"black",font:"18px Times New Roman"});


    },


    update: function() {
    },
}

function quit ()
{
     window.location.href="bati1.html";
  {quit.frame=0}  
setTimeout(function(){
    
quit.frame=0;
game._paused=false;
},50);
}

    game.state.add("mainState",mainState);
    game.state.start("mainState");