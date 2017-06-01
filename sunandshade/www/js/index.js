var game = new Phaser.Game(400, 600, Phaser.CANVAS, 'gameDiv');

var background;
var honeycrushko;
var menu;
var music;


var mainState = {

    preload:function(){
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    game.load.image("background","img/bg.png")
    game.load.image("start","img/ply.png")
    game.load.image("menu","img/menu.png")
   // game.load.audio("music","audio/cocintro.mp3");


    },

    create:function(){

    game.add.sprite(0,0,"background");
    start = game.add.button(270,450,"start",honeycrushko);
    start.scale.x= .5;
    start.scale.y= 1;

    menu = game.add.button(50,440,"menu",menu);
    menu.scale.x= .8;
    menu.scale.y= .8;

    game.input.touch.preventDefault = false;

    // music = game.add.audio("music");
    // music.play();

    },


    update: function () {

},
}

function honeycrushko ()
{
     window.location.href="bati.html";
  {start.frame=0}  
setTimeout(function(){
    
start.frame=0;
game._paused=false;
},50);
}

function menu ()
{
     window.location.href="bati1.html";
  {start.frame=0}  
setTimeout(function(){
    
start.frame=0;
game._paused=false;
},50);
}

function update() {
    s.rotation += 0.01;
}

function render() {
    game.debug.soundInfo(music, 20, 32);
}

    game.state.add("mainState",mainState);
    game.state.start("mainState");