var game = new Phaser.Game(400, 600, Phaser.CANVAS, 'gameDiv');

var background;
var quit;
var instructions;
var about;

var mainState = {

    preload:function(){
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    game.load.image("background","img/bgg.png")
    game.load.image("quit","img/quit.png")
    game.load.image("instructions","img/instructions.png")
    game.load.image("about","img/about.png")




    },

    create:function(){

    game.add.sprite(0,0,"background");

    quit = game.add.button(340,15,"quit",quit);
    quit.scale.x= .3;
    quit.scale.y= .3;

    instructions = game.add.button(100,150,"instructions",instructions);
    instructions.scale.x= 1;
    instructions.scale.y= 1;

    about = game.add.button(140,250,"about",about);
    about.scale.x= .9;
    about.scale.y= .9;

    },


    update: function() {
    },
}

function quit ()
{
     window.location.href="index.html";
  {quit.frame=0}  
setTimeout(function(){
    
quit.frame=0;
game._paused=false;
},50);
}

function instructions ()
{
     window.location.href="bati3.html";
  {instructions.frame=0}  
setTimeout(function(){
    
instructions.frame=0;
game._paused=false;
},50);
}

function about ()
{
     window.location.href="bati2.html";
  {instructions.frame=0}  
setTimeout(function(){
    
about.frame=0;
game._paused=false;
},50);
}

    game.state.add("mainState",mainState);
    game.state.start("mainState");