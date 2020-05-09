class Player {
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;

    }
     //read the playerCount from database
     getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
    } 
    //update the gamestate in the database
    updateCount(count)
    {
        database.ref('/').update({
            playerCount: count
        })
    }
    //update the name in the database
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name:this.name, 
            distance:this.distance
        })
    }
    static getPlayersInfo()
    {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val();
            
        })
    }
}