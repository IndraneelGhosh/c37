class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }


  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
      form.hide()
      text("start",100,100)
      Player.getPlayerInfo();
        if(allPlayers!==undefined){
           var b=130;
               for(var plr in allPlayers){
                  b+=20;
                    if(plr==="player"+player.index){
                        fill("red")
                    }
                    else
                    fill("black")
      
     
      
                  text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,b)   
               } 
        }
        if(keyIsDown (UP_ARROW) && player.index!==null)
        {player.distance=player.distance+50;
          player.update()
        }
  }
 

  }
