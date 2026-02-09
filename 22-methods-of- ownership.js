// Mètodos de propiedad

const player ={
    play : function (id){
        console.log ("playing song...", id );
    },
    pause : function (id){
        console.log ("paused....", `${id}`)
    },
    delete : function (id){
        list : 
        console.log (`delete song n: ${id}` )
    },
}


console.log (player);
player.play (217);

player.pause (217);
player.delete (217)


const playlist ={
    list : function (id){console.log (`choose song in the playlist...`)},
    
  option1 : function (Song) {console.log (`option1: ${Song}`)},
}

console.log (playlist);
playlist.list (218)
playlist.option1 ("bohemianrahpsody")
