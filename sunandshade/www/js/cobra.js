var game = new Phaser.Game(400, 600, Phaser.CANVAS, 'gameDiv');

var background;
var restart;
var quit;
var player;
var scoretext;
var bestScoretext;
var music;
var PLAY,puno,sunny;

var mainState = {

    preload:function(){
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    game.load.image("background","img/bgg.png")
    //game.load.image("restart","img/circle.png")
   game.load.image("quit","img/quit.png")
    game.load.image("PLAY","img/pause.png")
     game.load.image("puno","img/puno.png")
      game.load.image("puno","img/puno.png")
       game.load.image("puno","img/puno.png")
              game.load.image("sunny","img/sunny.png")
    game.load.spritesheet("player","img/pacman.png",67,86)
   // game.load.audio("music","audio/banana.mp3");
    //game.load.spritesheet("AI","img/pacman1.png",50,100)

    },

    create:function(){

    game.add.sprite(0,0,"background");

    game.physics.arcade.gravity.y = 800;
    game.time.desiredFps = 30;

    PLAY = game.add.button(10,20,"PLAY",pause);
    PLAY.scale.x= .3;
    PLAY.scale.y= .3;
 
    // restart = game.add.button(340,55,"restart",back);
    // restart.scale.x= .3;
    // restart.scale.y= .3;

    quit = game.add.button(300,10,"quit",quit);
    quit.scale.x= .3;
    quit.scale.y= .3;


    puno = game.add.sprite(240,200,"puno",puno);
    puno.scale.x= .5;
    puno.scale.y= .5;

    puno = game.add.sprite(80,200,"puno",puno);
    puno.scale.x= .5;
    puno.scale.y= .5;


    sunny = game.add.sprite(40,100,"sunny",sunny);
    sunny.scale.x= .5;
    sunny.scale.y= .5;

    player = game.add.sprite(600,500,"player");
    player.scale.x = .5;
    player.scale.y = .5;

    game.physics.enable(player);
    player.body.collideWorldBounds = true;
    player.animations.add("walk-left",[6,7,8,9,10,11],10,true);
    player.animations.add("walk-right",[0,1,2,3,4,5],10,true);
    game.camera.follow(player, Phaser.Camera.FOLLOW_TOPDOWN);

    life = game.add.text(140,10,'Score: 0',{fill:"black",font:"18px Ravie"});
    bestScoreText = game.add.text(140,35,'Best: ',{fill:"black",font:"18px Ravie"});

    music = game.add.audio("music");
    music.play();

    // AI = game.add.sprite(600,500,"AI");
    // AI.scale.x = 1.5;
    // AI.scale.y = 1.5;

    // game.physics.enable(AI);
    // AI.body.collideWorldBounds = true;
    // AI.animations.add("walk-left",[5,6,7],10,true);
    // AI.animations.add("walk-right",[1,2,3],10,true);
    game.camera.follow(player, Phaser.Camera.FOLLOW_TOPDOWN);
    },


    update: function() {
        // AI.animations.play("walk-right");
        // AI.body.velocity.x= 100;
        // AI.animations.play("walk-left");
        // AI.body.velocity.x= -100;

        keyboard = game.input.keyboard.createCursorKeys();

            if (keyboard.left.isDown){
                player.animations.play('walk-left');
                player.body.velocity.x = -90;
            }
            else if(keyboard.right.isDown){
                player.animations.play('walk-right');
                player.body.velocity.x = 90;
            }
            else if(keyboard.left.isDown){
                if(keyboard.up.isDown){
                    player.animations.play('walk-left-up');
                }

            }
            
            

            else{
                player.animations.stop();
                player.body.velocity.y = 0;
                player.body.velocity.x = 0;
                player.frame = 1;

            }

},
}
function saveScore(Score) {
    localStorage.setItem("gameScore",Score);
}


function getScore(){
    return (localStorage.getItem("gameScore") == null || localStorage.getItem("gameScore") == "")?0:localStorage.getItem("gameScore");
}

function back ()
{
     window.location.href="bati.html";
  {restart.frame=0}  
setTimeout(function(){
    
restart.frame=0;
game._paused=false;
},50);
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

function update() {
    s.rotation += 0.01;
}

function render() {
    game.debug.soundInfo(music, 20, 32);
}

function pause(){
  PLAY.frame =0;
{game._paused = true;}
game.sound.mute = true;
  PLAY.frame =1;
  game.input.onTap.addOnce(play,game);
}
function play(){
{game._paused = false;}
game.sound.mute = false;
PLAY.frame =0;
}
    game.state.add("mainState",mainState);
    game.state.start("mainState");